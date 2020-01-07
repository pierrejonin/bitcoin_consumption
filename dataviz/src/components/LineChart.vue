/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
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
      top: 10, right: 100, bottom: 30, left: 30,
    };
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    const svg = d3.select('#my_dataviz')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        `translate(${margin.left},${margin.top})`);


    d3.csv('https://pierrejonin.github.io/bitcoin_consumption'.concat('/data/data_processing/out.csv'), (data) => {
      // List of groups (here I have one group per column)
      const allGroup = ['Estimation', 'Borne_sup', 'Borne_inf'];

      // add the options to the button
      d3.select('#selectButton')
        .selectAll('myOptions')
        .data(allGroup)
        .enter()
        .append('option')
        .text((d) => d) // text showed in the menu
        .attr('value', (d) => d); // corresponding value returned by the button

      // A color scale: one color for each group
      const myColor = d3.scaleOrdinal()
        .domain(allGroup)
        .range(['red', 'blue', 'yellow']);

      // Add X axis --> it is a date format
      const x = d3.scaleLinear()
        .domain([0, 10])
        .range([0, width]);
      svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      // Add Y axis
      const y = d3.scaleLinear()
        .domain([0, 20])
        .range([height, 0]);
      svg.append('g')
        .call(d3.axisLeft(y));

      // Initialize line with group a
      const line = svg
        .append('g')
        .append('path')
        .datum(data)
        .attr('d', d3.line()
          .x((d) => x(+d.Periode))
          .y((d) => y(+d.valueA)))
        // eslint-disable-next-line no-unused-vars
        .attr('stroke', (d) => myColor('valueA'))
        .style('stroke-width', 4)
        .style('fill', 'none');

      // A function that update the chart
      function update(selectedGroup) {
      // Create new data with the selection?
        const dataFilter = data.map((d) => ({ Periode: d.Periode, value: d[selectedGroup] }));

        // Give these new data to update line
        line
          .datum(dataFilter)
          .transition()
          .duration(1000)
          .attr('d', d3.line()
            .x((d) => x(+d.Periode))
            .y((d) => y(+d.value)))
          // eslint-disable-next-line no-unused-vars
          .attr('stroke', (d) => myColor(selectedGroup));
      }

      // When the button is changed, run the updateChart function
      // eslint-disable-next-line no-unused-vars
      d3.select('#selectButton').on('change', function f(d) {
        // recover the option that has been chosen
        const selectedOption = d3.select(this).property('value');
        // run the updateChart function with this selected option
        update(selectedOption);
      });
      return -1;
    });
  },
};
</script>

<style>

</style>
