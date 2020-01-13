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
      top: 20, right: 20, bottom: 300, left: 80,
    };
    const width = 990 - margin.left - margin.right;
    const height = 700 - margin.top - margin.bottom;

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
      .attr('height', height + margin.top + margin.bottom);

    const g = svg.append('g')
      .attr('transform',
        `translate(${margin.left},${margin.top})`);

    const Tooltip = d3.select('#my_dataviz')
      .append('div')
      .style('opacity', 0)
      .attr('class', 'tooltip')
      .style('background-color', '#e3d0b0')
      .style('border', 'solid')
      .style('border-width', '2px')
      .style('border-radius', '5px')
      .style('padding', '5px');

    svg.append('text')
      .attr('x', 500)
      .attr('y', 550)
      .attr('text-anchor', 'middle')
      .style('font-size', '24px')
      .style('text-decoration', 'underline')
      .text('Consommation énergétique du Bitcoin au cours du temps');

    svg.append('text')
      .attr('x', 500)
      .attr('y', 600)
      .attr('text-anchor', 'middle')
      .style('font-size', '12px')
      .text('Sources : CIA Factbook; University of Cambridge');

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
      g.append('path')
        .data([data])
        .attr('class', 'line')
        .attr('d', valueline);

      // Add the X Axis
      g.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x)
          .tickFormat(d3.timeFormat('%b %Y'))
          .ticks(11))
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-65)');

      // Add the Y Axis
      g.append('g')
        .attr('class', 'axis')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('class', 'axis-title')
        .attr('transform', 'rotate(-90)')
        .attr('y', -50)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .attr('fill', '#5D6971')
        .text('Consommation électrique annualisée(en TW/H)');

      // First interest point
      g.append('circle')
        .attr('id', 'circle1')
        .attr('cx', x(new Date(2016, 0, 29)))
        .attr('cy', y(4.7181))
        .attr('r', 5)
        .attr('fill', '#1A7EF7');
      const mouseover1 = function o() {
        Tooltip
          .style('opacity', 1);
        d3.select(this)
          .style('stroke', 'black')
          .style('opacity', 1);
      };
      const mousemove1 = function m() {
        Tooltip
          .html('Le Bitcoin consomme <br> autant qu\'un million <br> de foyers français')
          .style('text-align', 'center')
          .style('left', `${d3.mouse(this)[0] - 20}px`)
          .style('top', `${d3.mouse(this)[1] - 30}px`);
      };
      const mouseleave1 = function l() {
        Tooltip
          .style('opacity', 0);
        d3.select(this)
          .style('stroke', 'none')
          .style('opacity', 0.8);
      };
      d3.select('#circle1')
        .on('mouseover', mouseover1)
        .on('mousemove', mousemove1)
        .on('mouseleave', mouseleave1);

      // Second interest point
      g.append('circle')
        .attr('id', 'circle2')
        .attr('cx', x(new Date(2018, 10, 3)))
        .attr('cy', y(51.673))
        .attr('r', 5)
        .attr('fill', '#1A7EF7');
      const mouseover2 = function o() {
        Tooltip
          .style('opacity', 1);
        d3.select(this)
          .style('stroke', 'black')
          .style('opacity', 1);
      };
      const mousemove2 = function m() {
        Tooltip
          .html('Le Bitcoin consomme <br> maintenant autant <br> que le Bengladesh <br> (+150M d\'habitants)')
          .style('text-align', 'center')
          .style('left', `${d3.mouse(this)[0] - 20}px`)
          .style('top', `${d3.mouse(this)[1] - 50}px`);
      };
      const mouseleave2 = function l() {
        Tooltip
          .style('opacity', 0);
        d3.select(this)
          .style('stroke', 'none')
          .style('opacity', 0.8);
      };
      d3.select('#circle2')
        .on('mouseover', mouseover2)
        .on('mousemove', mousemove2)
        .on('mouseleave', mouseleave2);

      // Third interest point
      g.append('circle')
        .attr('id', 'circle3')
        .attr('cx', x(new Date(2017, 6, 14)))
        .attr('cy', y(14.0462))
        .attr('r', 5)
        .attr('fill', '#1A7EF7');
      const mouseover3 = function o() {
        Tooltip
          .style('opacity', 1);
        d3.select(this)
          .style('stroke', 'black')
          .style('opacity', 1);
      };
      const mousemove3 = function m() {
        Tooltip
          .html('Le Bitcoin consomme <br> plus que la Corée! <br> (du nord)')
          .style('text-align', 'center')
          .style('left', `${d3.mouse(this)[0] - 20}px`)
          .style('top', `${d3.mouse(this)[1] - 30}px`);
      };
      const mouseleave3 = function l() {
        Tooltip
          .style('opacity', 0);
        d3.select(this)
          .style('stroke', 'none')
          .style('opacity', 0.8);
      };
      d3.select('#circle3')
        .on('mouseover', mouseover3)
        .on('mousemove', mousemove3)
        .on('mouseleave', mouseleave3);

      // Fourth interest point
      g.append('circle')
        .attr('id', 'circle4')
        .attr('cx', x(new Date(2019, 8, 22)))
        .attr('cy', y(80.2968))
        .attr('r', 5)
        .attr('fill', '#1A7EF7');
      const mouseover4 = function o() {
        Tooltip
          .style('opacity', 1);
        d3.select(this)
          .style('stroke', 'black')
          .style('opacity', 1);
      };
      const mousemove4 = function m() {
        Tooltip
          .html('Max conso')
          .style('left', `${d3.mouse(this)[0] - 30}px`)
          .style('top', `${d3.mouse(this)[1] + 30}px`);
      };
      const mouseleave4 = function l() {
        Tooltip
          .style('opacity', 0);
        d3.select(this)
          .style('stroke', 'none')
          .style('opacity', 0.8);
      };
      d3.select('#circle4')
        .on('mouseover', mouseover4)
        .on('mousemove', mousemove4)
        .on('mouseleave', mouseleave4);

      // Fifth interest point
      g.append('circle')
        .attr('id', 'circle5')
        .attr('cx', x(new Date(2018, 1, 7)))
        .attr('cy', y(38.4544))
        .attr('r', 5)
        .attr('fill', '#1A7EF7');
      const mouseover5 = function o() {
        Tooltip
          .style('opacity', 1);
        d3.select(this)
          .style('stroke', 'black')
          .style('opacity', 1);
      };
      const mousemove5 = function m() {
        Tooltip
          .html('Eclatement de la <br> bulle au début 2018. <br> Le bitcoin consomme <br> plus que l\'Irak')
          .style('text-align', 'center')
          .style('left', `${d3.mouse(this)[0] - 30}px`)
          .style('top', `${d3.mouse(this)[1] - 50}px`);
      };
      const mouseleave5 = function l() {
        Tooltip
          .style('opacity', 0);
        d3.select(this)
          .style('stroke', 'none')
          .style('opacity', 0.8);
      };
      d3.select('#circle5')
        .on('mouseover', mouseover5)
        .on('mousemove', mousemove5)
        .on('mouseleave', mouseleave5);

      // Sixth interest point
      g.append('circle')
        .attr('id', 'circle6')
        .attr('cx', x(new Date(2019, 8, 22)))
        .attr('cy', y(80.2968))
        .attr('r', 5)
        .attr('fill', '#1A7EF7');
      const mouseover6 = function o() {
        Tooltip
          .style('opacity', 1);
        d3.select(this)
          .style('stroke', 'black')
          .style('opacity', 1);
      };
      const mousemove6 = function m() {
        Tooltip
          .html('Maximum de la <br> consommation électrique. <br> Le niveau est équivalent <br> à celui de la Belgique')
          .style('text-align', 'center')
          .style('left', `${d3.mouse(this)[0] - 30}px`)
          .style('top', `${d3.mouse(this)[1] + 120}px`);
      };
      const mouseleave6 = function l() {
        Tooltip
          .style('opacity', 0);
        d3.select(this)
          .style('stroke', 'none')
          .style('opacity', 0.8);
      };
      d3.select('#circle6')
        .on('mouseover', mouseover6)
        .on('mousemove', mousemove6)
        .on('mouseleave', mouseleave6);

      // Seventh interest point
      g.append('circle')
        .attr('id', 'circle7')
        .attr('cx', x(new Date(2020, 0, 3)))
        .attr('cy', y(74.3374))
        .attr('r', 5)
        .attr('fill', '#1A7EF7');
      const mouseover7 = function o() {
        Tooltip
          .style('opacity', 1);
        d3.select(this)
          .style('stroke', 'black')
          .style('opacity', 1);
      };
      const mousemove7 = function m() {
        Tooltip
          .html('Consommation actuelle. <br> Elle correspond à celle du Chili. <br> Ou deux fois celle du Qatar. <br> Ou trois fois celle de l\'Irlande')
          .style('text-align', 'center')
          .style('left', `${d3.mouse(this)[0] - 30}px`)
          .style('top', `${d3.mouse(this)[1] + 100}px`);
      };
      const mouseleave7 = function l() {
        Tooltip
          .style('opacity', 0);
        d3.select(this)
          .style('stroke', 'none')
          .style('opacity', 0.8);
      };
      d3.select('#circle7')
        .on('mouseover', mouseover7)
        .on('mousemove', mousemove7)
        .on('mouseleave', mouseleave7);

      g.append('line')
        .style('stroke', 'grey')
        .style('z-index', -1)
        .attr('x1', 0)
        .attr('y1', y(10))
        .attr('x2', width)
        .attr('y2', y(10));
      g.append('line')
        .style('stroke', 'grey')
        .attr('x1', 0)
        .attr('y1', y(20))
        .attr('x2', width)
        .attr('y2', y(20));
      g.append('line')
        .style('stroke', 'grey')
        .attr('x1', 0)
        .attr('y1', y(30))
        .attr('x2', width)
        .attr('y2', y(30));
      g.append('line')
        .style('stroke', 'grey')
        .attr('x1', 0)
        .attr('y1', y(40))
        .attr('x2', width)
        .attr('y2', y(40));
      g.append('line')
        .style('stroke', 'grey')
        .attr('x1', 0)
        .attr('y1', y(50))
        .attr('x2', width)
        .attr('y2', y(50));
      g.append('line')
        .style('stroke', 'grey')
        .attr('x1', 0)
        .attr('y1', y(60))
        .attr('x2', width)
        .attr('y2', y(60));
      g.append('line')
        .style('stroke', 'grey')
        .attr('x1', 0)
        .attr('y1', y(70))
        .attr('x2', width)
        .attr('y2', y(70));
      g.append('line')
        .style('stroke', 'grey')
        .attr('x1', 0)
        .attr('y1', y(80))
        .attr('x2', width)
        .attr('y2', y(80));
    });
  },
};
</script>
<style>
    .axis { font: 14px sans-serif; }
    .line {
      fill: none;
      stroke: #f7931a;
      stroke-width: 2px;
    }
</style>
