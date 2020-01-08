<template>
<div id="my_dataviz"></div>
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


    const legendCellSize = 20;
    const colorss = ['#d4eac7', '#c6e3b5', '#b7dda2', '#a9d68f', '#9bcf7d', '#8cc86a', '#7ec157', '#77be4e', '#70ba45', '#65a83e', '#599537', '#4e8230', '#437029', '#385d22', '#2d4a1c', '#223815'];

    const legend = svg.append('g')
      .attr('transform', 'translate(40, 50)');

    legend.selectAll()
      .data(d3.range(colorss.length))
      .enter().append('svg:rect')
      .attr('height', `${legendCellSize}px`)
      .attr('width', `${legendCellSize}px`)
      .attr('x', 5)
      .attr('y', (d) => d * legendCellSize)
      .style('fill', (d) => colorss[d]);

    const legendScale = d3.scaleLinear().domain([0, 100])
      .range([0, colorss.length * legendCellSize]);

    legend.append('g')
      .attr('class', 'axis')
      .call(d3.axisLeft(legendScale));

    // eslint-disable-next-line no-unused-vars
    const path = d3.geoPath();
    const projection = d3.geoMercator()
      .scale(120)
      .center([0, 20])
      .translate([width / 2, height / 2]);

    // Data and color scale
    const data = d3.map();

    const colorScale = d3.scaleThreshold()
      .domain([5, 10, 20, 30, 40, 50, 75, 90, 100])
      .range(d3Chromatic.schemeBlues[9]);

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
        const htmlString = `<strong>${d.properties.name}</strong><br>Consommation : <i>${total} kWH</i><br>Rapport : <i>${Number.parseFloat((75000000000 / total).toFixed(2))}</i>`;

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
          return colorScale((75000000000 * 100) / total);// 75 000 000 000 : bitcoin consumption
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
</style>
