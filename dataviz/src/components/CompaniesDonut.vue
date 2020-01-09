
<template>
  <div class="donut">
    <svg class="cam"></svg>
    <div class="desc">
      <span>
        A mining pool is a groupement of cryptocurrency miners. They group to have a greater
        mining power. Since the biggest mining power has more chance to be rewarded for
        mining the next block, it's totally in their interest to group. Moreover, we are not able to
        know who mined every block. Indeed, only miners who chose to sign can be retrieved.
      </span>
    </div>
  </div>
</template>

<script>
/* eslint no-restricted-syntax: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-unused-vars: 0 */
/* eslint eqeqeq: 0 */

import * as d3 from 'd3';

export default {
  name: 'CompaniesDonut',
  mounted() {
    const gdriveLink = 'https://docs.google.com/spreadsheets/d/1V-2hul0_KF5agQPGA7FJlWRFWLc5UWneJ4_ZZnmj5yM/export?format=csv&id=1V-2hul0_KF5agQPGA7FJlWRFWLc5UWneJ4_ZZnmj5yM&gid=0';

    const myPools = ['AntPool', 'Poolin', 'Huobi', 'BTC.COM', 'Okex', 'SpiderPool',
      'NovaBlock', 'BitFury', 'bytepool', '🐟', 'Inconnu'];
    const freq = {};
    const dataset = [];
    let maxFreq = -1;
    let total = -1;

    const height = 550;
    const width = 960;
    const margin = 20;

    const svg = d3.select('svg.cam').attr('width', width).attr('height', height);
    const camembert = svg.append('g').attr('transform', `translate(${width / 2.5},${height / 2})`);

    const tooltip = d3.select('.donut')
      .append('div')
      .attr('class', 'hidden tooltip');

    // La fonction pour extraire les données
    const pie = d3.pie().value((d) => d.value);

    // On initialise les fréquences
    for (const pool of myPools) {
      freq[pool] = 0;
    }

    d3.csv(gdriveLink, (data) => {
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
      const arcs = pie(dataset);
      let radius = Math.min(width, height) / 2 - margin;
      // The arc generator
      const arc = d3.arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius * 0.8);

      radius = Math.min(width, height) / 2.5;
      const arcLabel = d3.arc().innerRadius(radius).outerRadius(radius);

      const color = d3.scaleLinear()
        .domain([0, maxFreq])
        .range(['#ecfcff', '#3e64ff']);

      svg.selectAll('g')
        .selectAll('slices')
        .data(arcs)
        .enter()
        .append('path')
        .attr('fill', (d) => color(d.data.value))
        .attr('d', arc)
        .attr('stroke', 'white')
        .style('stroke-width', '2px')
        .on('mousemove', (d) => {
          const mousePosition = d3.mouse(d3.event.currentTarget);
          tooltip.classed('hidden', false)
            .attr('style', `left:${mousePosition[0] + width / 3}px; top:${mousePosition[1] + height / 2}px`)
            .html(`Nom de la pool : ${d.data.name == '🐟' ? 'P2Pool' : d.data.name}<br>Bitcoins minés : ${d.data.value}`);
        })
        .on('mouseout', () => {
          tooltip.classed('hidden', true);
        });
      svg.selectAll('g')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 15)
        .attr('text-anchor', 'middle')
        .selectAll('text')
        .data(arcs)
        .enter()
        .append('text')
        .attr('transform', (d) => `translate(${arcLabel.centroid(d)}) rotate(33)`)
        .text((d) => `${d.data.name.slice(0, 3)} ${(Math.round((d.data.value / total) * 100)).toLocaleString()} %`);
      svg.append('text')
        .attr('x', width / 2.5)
        .attr('y', height * 0.99)
        .attr('text-anchor', 'middle')
        .style('font-size', '24px')
        .text('Repartition of the mining pools for the last 7 days');
      svg.append('text')
        .attr('x', width / 3.05)
        .attr('y', height / 1.29)
        .attr('text-anchor', 'middle')
        .attr('fill', '#F5C52C')
        .style('font-size', '200px')
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

.desc {
  position: fixed;
  top: 100px;
  left: 900px;
  width: 250px;
}

.btc {
  color: gold;
}

</style>
