
<template>
  <b-container class="donut">
    <b-row>
        <b-col cols="6">
          <svg class="cam"></svg>
        </b-col>
        <b-col cols="3">
          <svg class="legend"></svg>
          <br/>
          <br/>
          <div class="lComplementary">
            More the blue is intense, more the pool's mining percentage is big.
          </div>
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
            <br/>
            <div>
              As we can observe, the majority of the pools are from China. That's
              because China's electricity is cheap. Hence miners can have a larger profit by mining.
            </div>
            <br/>
            <div>
              Data scraped from <a href="https://www.blockchain.com/api/blockchain_api"> the blockchain data API</a>.
              <br/>
              Pools countries from <a href="https://en.bitcoin.it/wiki/Comparison_of_mining_pools"> bitcoin.it</a>.
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
/* eslint no-nested-ternary: 0 */

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
      'BitFury', 'bytepool', 'viaBTC', '🐟', 'BTC.TOP', 'Unknown'];

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
    const Lheight = 50;
    const Lwidth = 210;
    const margin = 20;
    const translateFactorX = 2.4;
    const translateFactorY = 3.5;

    const svg = d3.select('svg.cam').attr('width', width).attr('height', height);
    const svg2 = d3.select('svg.legend').attr('width', Lwidth).attr('height', Lheight);
    const camembert = svg.append('g').attr('transform', `translate(${width / translateFactorX},${height / translateFactorY})`);

    const lBlue = svg2.append('defs')
      .append('svg:linearGradient')
      .attr('id', 'gradientB')
      .attr('x1', '0%')
      .attr('y1', '100%')
      .attr('x2', '100%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad');

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
          freq.Unknown += 1;
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
        .attr('class', 'donutPath')
        .attr('fill', (d) => color(d.data.value))
        .attr('d', arc)
        .attr('stroke', 'white')
        .attr('transform', 'translate(0,25)')
        .style('stroke-width', '2px')
        .on('mousemove', (d) => {
          const mousePosition = d3.mouse(d3.event.currentTarget);
          tooltip.classed('hidden', false)
            .attr('style', `left:${mousePosition[0] + width / 2.3}px; top:${mousePosition[1] + Math.abs(bodyPos.y - donutPos.y) + 100}px`)
            .html(`Pool's name : ${d.data.name == '🐟' ? 'F2Pool' : d.data.name}
              <br>Bitcoins mined : ${d.data.value * 12.5}
              <br>Countries : ${d.data.name == '🐟' ? countries.F2Pool : countries[d.data.name] != undefined ? countries[d.data.name] : 'Unknown'}
              <br>Percentage : ${Math.round((d.data.value / total) * 100)}%`);
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
        .attr('x', width * 0.5)
        .attr('y', height * 0.73)
        .attr('text-anchor', 'middle')
        .attr('text-decoration', 'underline')
        .style('font-size', '24px')
        .text('BTC mined per pool between 01/03 - 01/14');
      svg.append('text')
        .attr('x', width / 2.87)
        .attr('y', height / 2)
        .attr('text-anchor', 'middle')
        .attr('fill', '#F5C52C')
        .style('font-size', '150px')
        .style('font-weight', 'bold')
        .attr('transform', 'rotate(-13)')
        .text('₿');

      lBlue.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', color(0))
        .attr('stop-opacity', 1);

      // color fin
      lBlue.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', color(maxFreq))
        .attr('stop-opacity', 1);

      svg2.append('rect')
        .attr('width', Lwidth - 9)
        .attr('height', Lheight - 30)
        .style('fill', 'url(#gradientB)')
        .attr('transform', 'translate(0,10)');

      const ticksScale = d3.scaleLinear()
        .range([200, 0])
        .domain([20, -0.3]);

      const yAxisBlue = d3.axisBottom()
        .scale(ticksScale)
        .ticks(5);

      svg2.append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(0,30)')
        .call(yAxisBlue);
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

path.donutPath {
  stroke: white;
  stroke-width: 0;
}

.lComplementary {
  text-align: justify;
  width: 80%;
}
</style>
