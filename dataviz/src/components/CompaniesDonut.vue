
<template>
  <b-container class="donut">
    <b-row>
        <b-col cols="7">
          <svg class="cam"></svg>
        </b-col>
        <b-col>
          <span class="legende">
            <div>
              A mining pool is a groupement of cryptocurrency miners. They group to have a greater
              mining power. Since the biggest mining power has more chance to be rewarded for
              mining the next block, it's totally in their interest to group. Moreover, we are not
              able to know who mined every block. Indeed, only miners who chose to sign
              can be retrieved.
            </div>
            <br>
            <div>
              As we can observe, the majority of the pools are from China. That's
              because China's electricity is cheap. Hence miners can have a larger profit by mining.
            </div>
          </span>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* eslint no-restricted-syntax: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-unused-vars: 0 */
/* eslint eqeqeq: 0 */
/* eslint quote-props: 0 */

import * as d3 from 'd3';

export default {
  name: 'CompaniesDonut',
  methods: {
    reloadVue() {
      this.$forceUpdate();
    },
    connect() {
      this.socket = new WebSocket('wss://ws.blockchain.info/inv');
      this.socket.onopen = () => {
        this.socket.send('{"op":"blocks_sub"}');
        this.socket.onmessage = ({ data }) => {
          this.reloadVue();
        };
      };
    },
  },
  mounted() {
    const gdriveLink = 'https://docs.google.com/spreadsheets/u/0/d/1gw_V0IF139kLkQ96k2WNdU1bTobevqlnI_80kYUeic0/export?format=csv&id=1gw_V0IF139kLkQ96k2WNdU1bTobevqlnI_80kYUeic0&gid=0';
    this.connect();
    const myPools = ['AntPool', 'Poolin', 'Huobi', 'BTC.COM', 'Okex',
      'BitFury', 'bytepool', 'viaBTC', '🐟', 'BTC.TOP', 'Inconnu'];

    const countries = {
      'AntPool': ['China - 🇨🇳'],
      'Huobi': ['China - 🇨🇳'],
      'BTC.COM': ['Europe - 🇪🇺', 'USA - 🇺🇸', 'China - 🇨🇳'],
      'SpiderPool': ['China - 🇨🇳'],
      'BitFury': ['Netherlands - 🇳🇱'],
      'bytepool': ['China - 🇨🇳'],
      'F2Pool': ['Europe - 🇪🇺', 'USA - 🇺🇸', 'China - 🇨🇳'],
      'Poolin': ['China - 🇨🇳'],
    };

    const freq = {};
    const dataset = [];
    let maxFreq = -1;
    let total = -1;

    const height = 650;
    const width = 720;
    const margin = 20;
    const translateFactorX = 2.4;
    const translateFactorY = 3.5;

    const svg = d3.select('svg.cam').attr('width', width).attr('height', height);
    const camembert = svg.append('g').attr('transform', `translate(${width / translateFactorX},${height / translateFactorY})`);

    const tooltip = d3.select('.donut')
      .append('div')
      .attr('class', 'hidden tooltip');

    // La fonction pour extraire les données
    const pie = d3.pie().value((d) => d.value);

    // On initialise les fréquences
    for (const pool of myPools) {
      freq[pool] = 0;
    }

    d3.csv(`${gdriveLink}`, (data) => {
      data.forEach((d) => {
        let trouve = false;
        for (const pool of myPools) {
          d.Donnee.toLowerCase().includes(pool.toLowerCase())
            ? (freq[pool] += 1, trouve = true) : null;
        }
        if (!trouve) {
          freq.Inconnu += 1;
          trouve = true;
        }
      });
      const freqs = Object.values(freq);
      for (const keys of Object.keys(freq)) {
        dataset.push({ name: keys, value: freq[keys] });
      }

      maxFreq = d3.max(freqs);
      total = freqs.reduce((acc, current) => acc + current);
      const size = d3.scaleLinear().domain([0, maxFreq]);
      const dataProcessed = pie(dataset);
      let radius = Math.min(width / 1.5, height / 1.5) / 2 - margin;
      // The arc generator
      const arc = d3.arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius * 0.8);
      const arc2 = d3.arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9);
      const arc3 = d3.arc()
        .innerRadius(radius * 1.02)
        .outerRadius(radius * 1.01);

      radius = Math.min(width, height) / 2.5;
      const arcLabel = d3.arc().innerRadius(radius).outerRadius(radius);
      const color = d3.scaleLinear()
        .domain([0, maxFreq])
        .range(['#ecfcff', '#3e64ff']);
      const bodyPos = document.body.getBoundingClientRect();
      const donutPos = document.getElementsByClassName('donut')[0].getBoundingClientRect();
      svg.selectAll('g')
        .selectAll('slices')
        .data(dataProcessed)
        .enter()
        .append('path')
        .attr('fill', (d) => color(d.data.value))
        .attr('d', arc)
        .attr('stroke', 'white')
        .attr('transform', 'translate(0,25)')
        .style('stroke-width', '2px')
        .on('mousemove', (d) => {
          const mousePosition = d3.mouse(d3.event.currentTarget);
          tooltip.classed('hidden', false)
            .attr('style', `left:${mousePosition[0] + width / 2.3}px; top:${mousePosition[1] + Math.abs(bodyPos.y - donutPos.y) + 100}px`)
            .html(`Pool's name : ${d.data.name == '🐟' ? 'P2Pool' : d.data.name}<br>Bitcoins mined : ${d.data.value * 12.5}
              <br>Countries : ${countries[d.data.name] != undefined ? countries[d.data.name] : 'Unknown'}`);
        })
        .on('mouseout', () => {
          tooltip.classed('hidden', true);
        });
      svg.selectAll('allPolylines')
        .data(dataProcessed)
        .enter()
        .append('polyline')
        .attr('stroke', 'black')
        .style('fill', 'none')
        .attr('stroke-width', 1)
        .attr('points', (d) => {
          const posA = arc.centroid(d);
          const posB = arc2.centroid(d);
          return [posA, posB];
        })
        .attr('transform', `translate(${width / translateFactorX},${height / translateFactorY + 30})`);
      svg.selectAll('g')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 11)
        .attr('text-anchor', 'middle')
        .selectAll('labels')
        .data(dataProcessed)
        .enter()
        .append('text')
        .text((d) => `${d.data.name}`)
        .attr('transform', (d) => {
          const pos = arc3.centroid(d);
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          // On ajuste un peu la position du texte
          pos[0] += 2;
          pos[1] += 40;
          return `translate(${pos})`;
        })
        .attr('padding', '10px;');
      svg.append('text')
        .attr('x', width / 2.5)
        .attr('y', height * 0.8)
        .attr('text-anchor', 'middle')
        .style('font-size', '24px')
        .text('Repartition of the mining sources for the last 5 days');
      svg.append('text')
        .attr('x', width / 2.87)
        .attr('y', height / 2)
        .attr('text-anchor', 'middle')
        .attr('fill', '#F5C52C')
        .style('font-size', '150px')
        .style('font-weight', 'bold')
        .attr('transform', 'rotate(-13)')
        .text('₿');
    });
  },
};
</script>

<style>
path:hover {
  opacity: 0.5;
}

.hidden {
  display: none;
}

div.tooltip {
    color: #222;
    background-color: lightblue;
    padding: .5em;
    text-shadow: #f5f5f5 0 1px 0;
    border-radius: 2px;
    opacity: 0.9;
    position: absolute;
}

.legende {
  margin-top: 50px;
  position: relative;
}

</style>
