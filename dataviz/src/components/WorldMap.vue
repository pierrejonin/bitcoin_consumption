<template>
  <div id="my_dataviz">
    <div id="legendes">
      <div id="legende1"></div>
      <div id="legende2"></div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import * as d3Chromatic from 'd3-scale-chromatic';

export default {
  name: 'WorldMap',
  mounted() {
    // The svg
    const svg = d3.select('#my_dataviz')
      .append('svg')
      .attr('width', 900)
      .attr('height', 700)
      .attr('transform',
        `translate(${0},${0})`);

    const width = +svg.attr('width');
    const height = +svg.attr('height');

    svg.append('text')
      .attr('x', 500)
      .attr('y', 590)
      .attr('text-anchor', 'middle')
      .style('font-size', '24px')
      .style('text-decoration', 'underline')
      .text('Bitcoin Electricity Consumption vs. Country Electricicty Consumption');

    svg.append('text')
      .attr('x', 500)
      .attr('y', 610)
      .attr('text-anchor', 'middle')
      .style('font-size', '12px')
      .text('Sources : CIA Factbook; Digiconomist');
    // eslint-disable-next-line no-unused-vars
    const path = d3.geoPath();
    const projection = d3.geoMercator()
      .scale(120)
      .center([0, 20])
      .translate([width / 2, height / 2]);

    // Data and color scale
    const data = d3.map();

    const colorScaleBlue = d3.scaleSequential(d3Chromatic.interpolateBlues)
      .domain([0, 1]);

    const colorScaleRed = d3.scaleSequential(d3Chromatic.interpolateReds)
      .domain([1, 200]);

    // LEGENDES
    // Bleu
    const w = 300;
    const h = 50;
    const keyBlue = d3.select('#legende1')
      .append('svg')
      .attr('width', w + 15)
      .attr('height', h);

    // pas touche
    const legendBlue = keyBlue.append('defs')
      .append('svg:linearGradient')
      .attr('id', 'gradientB')
      .attr('x1', '0%')
      .attr('y1', '100%')
      .attr('x2', '100%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad');

    // color départ
    legendBlue.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', colorScaleBlue(0))
      .attr('stop-opacity', 1);

    // color fin
    legendBlue.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', colorScaleBlue(1))
      .attr('stop-opacity', 1);

    keyBlue.append('rect')
      .attr('width', w)
      .attr('height', h - 30)
      .style('fill', 'url(#gradientB)')
      .attr('transform', 'translate(0,10)');

    const yBlue = d3.scaleLinear()
      .range([300, 0])
      .domain([100, 0]);

    const yAxisBlue = d3.axisBottom()
      .scale(yBlue)
      .ticks(5);

    keyBlue.append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(0,30)')
      .call(yAxisBlue)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('axis title');

    // Rouge
    const keyRed = d3.select('#legende2')
      .append('svg')
      .attr('width', w + 30)
      .attr('height', h);

    // pas touche
    const legendRed = keyRed.append('defs')
      .append('svg:linearGradient')
      .attr('id', 'gradient')
      .attr('x1', '0%')
      .attr('y1', '100%')
      .attr('x2', '100%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad');

    // color départ
    legendRed.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', colorScaleRed(1))
      .attr('stop-opacity', 1);

    legendRed.append('stop')
      .attr('offset', '15%')
      .attr('stop-color', colorScaleRed(13))
      .attr('stop-opacity', 1);

    legendRed.append('stop')
      .attr('offset', '80%')
      .attr('stop-color', colorScaleRed(160))
      .attr('stop-opacity', 1);

    // color fin
    legendRed.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', colorScaleRed(250))
      .attr('stop-opacity', 1);

    keyRed.append('rect')
      .attr('width', w)
      .attr('height', h - 30)
      .style('fill', 'url(#gradient)')
      .attr('transform', 'translate(0,10)');

    const yRed = d3.scaleLinear()
      .range([300, 0])
      .domain([20000, 100]);

    const yAxisRed = d3.axisBottom()
      .scale(yRed)
      .ticks(5);

    keyRed.append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(0,30)')
      .call(yAxisRed)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('axis title');

    // FONCTIONS
    function ready(error, topo) {
      const Tooltip = d3.select('body')
        .append('div')
        .style('position', 'absolute')
        .attr('class', 'tooltip')
        .style('opacity', 1)
        .style('background-color', 'white')
        .style('border', 'solid')
        .style('border-width', '2px')
        .style('border-radius', '5px')
        .style('padding', '5px')
        .style('pointer-events', 'none');
      Tooltip.style('opacity', 0);
      function mouseover() {
        Tooltip
          .style('opacity', 0)
          .classed('hidden', true);
        d3
          .selectAll('path')
          .attr('stroke', '#fff')
          .attr('stroke-width', '1px');
      }

      function mousemove(d) {
        const total = data.get(d.properties.name) || 0;
        const htmlString = `<strong>${d.properties.name}</strong><br>Consommation : <i>${total.toLocaleString()} kWH</i><br>Rapport : <i>${Number.parseFloat((75000000000 / total).toFixed(2)) * 100}%</i>`;

        Tooltip
          .style('opacity', 0.99)
          .classed('hidden', false)
          .style('left', `${d3.event.pageX + 30}px`)
          .style('top', `${d3.event.pageY - 80}px`)
          .html(htmlString);
        d3
          .select(this)
          .attr('stroke-width', '2px')
          .attr('stroke', '#2e006c');
      }

      function mouseleave() {
        Tooltip
          .style('opacity', 0)
          .classed('hidden', true);
        d3
          .selectAll('path')
          .attr('stroke', '#fff')
          .attr('stroke-width', '1px');
      }

      svg.append('g')
        .selectAll('path')
        .data(topo.features)
        .enter()
        .append('path')
        .attr('stroke', '#fff')
        .attr('stroke-width', '1px')
        .attr('d', d3.geoPath()
          .projection(projection))
        .attr('fill', (d) => {
          // eslint-disable-next-line no-param-reassign
          const total = data.get(d.properties.name) || 0;
          if (total === 0) {
            return 'grey';
          }
          const rapport = Number.parseFloat(75000000000 / total);
          if (rapport < 1) {
            return colorScaleBlue(rapport);
          }
          return colorScaleRed(rapport);
          // 75 000 000 000 : bitcoin consumption
        })
        .on('mouseover', mouseover)
        .on('mousemove', mousemove)
        .on('mouseleave', mouseleave);
    }
    // Load external data and then launch the function ready
    d3.queue()
      .defer(d3.json, 'https://pierrejonin.github.io/bitcoin_consumption'.concat('/data/custom.geo.json'))
      .defer(d3.csv, 'https://pierrejonin.github.io/bitcoin_consumption'.concat('/data/data_countries.csv'), (d) => { data.set(d.Country, +d.Consumption/* Population */); })
      .await(ready);
  },
};

</script>

<style>
.bar-chart {
    background-color: #f1e6dd;
}

#legendes{
  float : right;
  padding-right : 20px;
}

</style>
