<template>
  <svg></svg>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'BarChart',
  mounted() {
    const svgWidth = 500;
    const svgHeight = 300;
    // const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];


    const dataset = [];
    d3.csv('/data/test.csv').then((data) => {
      data.forEach((d) => {
        dataset.push(d.id);
      });
      console.log(dataset);
      const barPadding = 5;
      const barWidth = (svgWidth / dataset.length);
      d3.select('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .attr('class', 'bar-chart')
        .selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('y', (d) => svgHeight - d)
        .attr('height', (d) => d)
        .attr('width', barWidth - barPadding)
        .attr('transform', (d, i) => {
          const translate = [barWidth * i, 0];
          return `translate(${translate})`;
        });
    });
  },
};

</script>

<style>
.bar-chart {
    background-color: #f1e6dd;
}
</style>
