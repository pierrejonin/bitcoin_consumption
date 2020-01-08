<template>
    <div id="my_dataviz">
    </div>
</template>
<script>
import * as d3 from 'd3';

export default {
  name: 'LineChart',
  mounted() {
    const margin = {
      top: 20, right: 20, bottom: 100, left: 50,
    };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // parse the date / time
    const parseTime = d3.timeParse('%Y-%m-%dT%H:%M:%S');

    // set the ranges
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    // define the line
    const valueline = d3.line()
      .x((d) => x(d.DateandTime))
      .y((d) => y(d.GUESS));

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = d3.select('#my_dataviz').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        `translate(${margin.left},${margin.top})`);

    // Get the data
    d3.csv('https://pierrejonin.github.io/bitcoin_consumption'.concat('/data/bitcoin_electric.csv'), (error, data) => {
      if (error) throw error;

      // format the data
      data.forEach((d) => {
        // eslint-disable-next-line no-param-reassign
        d.DateandTime = parseTime(d.DateandTime);
        // eslint-disable-next-line no-param-reassign
        d.GUESS = +d.GUESS;
      });

      // Scale the range of the data
      x.domain(d3.extent(data, (d) => d.DateandTime));
      y.domain([0, d3.max(data, (d) => d.GUESS)]);

      // Add the valueline path.
      svg.append('path')
        .data([data])
        .attr('class', 'line')
        .attr('d', valueline);

      // Add the X Axis
      svg.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x)
          .tickFormat(d3.timeFormat('%b %Y')))
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-65)');

      // Add the Y Axis
      svg.append('g')
        .attr('class', 'axis')
        .call(d3.axisLeft(y));


      svg.append('svg:line')
        .attr('x1', 0)
        .attr('x2', width)
        .attr('y1', y(10))
        .attr('y2', y(10))
        .style('stroke', 'rgb(189, 189, 189)');
    });
  },
};
</script>
<style>
body { margin:0;position:fixed;top:0;right:0;bottom:0;left:0; }
    .axis { font: 14px sans-serif; }
    .line {
      fill: none;
      stroke: steelblue;
      stroke-width: 2px;
    }
</style>
