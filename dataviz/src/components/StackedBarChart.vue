<template>
  <b-container>
    <b-row align-h="center">
      <div id="my_dataviz">
        <div id="stackedbarchart">
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'StackedBarChart',
  mounted() {
    const margin = {
      top: 10, right: 30, bottom: 50, left: 50,
    };
    const width = 400 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    // eslint-disable-next-line no-unused-vars
    const svg = d3.select('#stackedbarchart')
      .append('svg')
      .attr('width', width * 3)
      .attr('height', 500 + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        `translate(${margin.left},${margin.top})`);

    const colors = new Map([
      ['black', '#373534'],
      ['red', '#FF2700'],
      ['blue', '#0A98EE'],
      ['green', '#41C626'],
    ]);

    svg.append('text').attr('x', 380).attr('y', 100).text('Click on the source you want to sort')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle');

    svg.append('text')
      .attr('x', 200)
      .attr('y', 430)
      .attr('text-anchor', 'middle')
      .style('font-size', '24px')
      .style('text-decoration', 'underline')
      .text('Electric energy sources by Country');

    svg.append('text')
      .attr('x', 200)
      .attr('y', 460)
      .attr('text-anchor', 'middle')
      .style('font-size', '24px')
      .style('text-decoration', 'underline')
      .text('that might be used for bitcoin mining');

    svg.append('text')
      .attr('x', 180)
      .attr('y', 480)
      .attr('text-anchor', 'middle')
      .style('font-size', '12px')
      .text('Sources : CIA Factbook; Digiconomist');
    // const dataset = [];

    d3.csv('https://pierrejonin.github.io/bitcoin_consumption'.concat('/data/data_countries.csv'), (data) => {
      // Start Preprocessing
      let subgroups = ['Percentage_fossil', 'Percentage_nuclear', 'Percentage_hydroelectric', 'Percentage_renewable'];
      // sort country by their consumption
      data.sort((a, b) => b.Consumption - a.Consumption);
      // take top 10
      const topCountries = data.slice(0, 10);
      // sort top countries by their Percentage of fossil energy
      topCountries.sort((a, b) => b.Percentage_fossil - a.Percentage_fossil);
      // take the data for the top 10 countries
      let groups = [];
      topCountries.forEach((element) => groups.push(element.Country));
      // End Preprocessing

      // Add X axis
      let x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2]);
      svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll('text')
        .attr('y', 0)
        .attr('x', 5)
        .attr('transform', 'rotate(45)')
        .style('text-anchor', 'start');

      // Add Y axis
      let y = d3.scaleLinear()
        .domain([0, 100])
        .range([height, 0]);
      svg.append('g')
        .call(d3.axisLeft(y));

      // color palette = one color per subgroup
      // eslint-disable-next-line no-unused-vars
      let color = d3.scaleOrdinal()
        .domain(subgroups)
        .range([colors.get('black'), colors.get('red'), colors.get('blue'), colors.get('green')]);


      // ----------------
      // Create a tooltip
      // ----------------
      const tooltip = d3.select('div')
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
      tooltip.style('opacity', 0);
      // Three function that change the tooltip when user hover / move / leave a cell
      function mouseover(d) {
        const subgroupName = d3.select(this.parentNode).datum().key;
        // const subgroupValue = d.data[subgroupName];
        const country = d.data.Country;
        tooltip
          .html(`${subgroupName}:${d[1] - d[0]}%<br>${country}`)
          .style('opacity', 1);
      }
      function mousemove() {
        tooltip
          .style('left', `${d3.event.pageX}px`)
          .style('top', `${d3.event.pageY}px`);
      }
      function mouseleave() {
        tooltip
          .style('opacity', 0);
      }
      function update(newGroups, s, t) {
        const stackedData = d3.stack()
          .keys(s)(t);

        svg.selectAll('a').remove();
        svg.selectAll('g').remove();

        x = d3.scaleBand()
          .domain(newGroups)
          .range([0, width])
          .padding([0.2]);
        svg.append('g')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom(x).tickSizeOuter(0))
          .selectAll('text')
          .attr('y', 0)
          .attr('x', 5)
          .attr('transform', 'rotate(45)')
          .style('text-anchor', 'start');

        y = d3.scaleLinear()
          .domain([0, 100])
          .range([height, 0]);
        svg.append('g')
          .call(d3.axisLeft(y));

        svg.append('a')
          .selectAll('g')
        // Enter in the stack data = loop key per key = group per group
          .data(stackedData)
          .enter()
          .append('g')
          .attr('fill', (d) => color(d.key))
          .selectAll('rect')
        // enter a second time = loop subgroup per subgroup to add all rectangles
          .data((d) => d)
          .enter()
          .append('rect')
          .attr('x', (d) => x(d.data.Country))
          .attr('y', (d) => y(d[1]))
          .attr('height', (d) => (Number.isNaN(y(d[0]) - y(d[1])) ? 0 : y(d[0]) - y(d[1])))
          .attr('width', x.bandwidth())
          .attr('stroke', 'grey')
          .on('mouseover', mouseover)
          .on('mousemove', mousemove)
          .on('mouseleave', mouseleave);
      }

      update(groups, subgroups, topCountries);

      function sortFossil() {
        subgroups = ['Percentage_fossil', 'Percentage_nuclear', 'Percentage_hydroelectric', 'Percentage_renewable'];
        color = d3.scaleOrdinal()
          .domain(subgroups)
          .range([colors.get('black'), colors.get('red'), colors.get('blue'), colors.get('green')]);
        topCountries.sort((a, b) => b.Percentage_fossil - a.Percentage_fossil);
        groups = [];
        topCountries.forEach((element) => groups.push(element.Country));

        update(groups, subgroups, topCountries);
      }
      function sortNuclear() {
        subgroups = ['Percentage_nuclear', 'Percentage_fossil', 'Percentage_hydroelectric', 'Percentage_renewable'];
        color = d3.scaleOrdinal()
          .domain(subgroups)
          .range([colors.get('red'), colors.get('black'), colors.get('blue'), colors.get('green')]);
        topCountries.sort((a, b) => b.Percentage_nuclear - a.Percentage_nuclear);
        groups = [];
        topCountries.forEach((element) => groups.push(element.Country));

        update(groups, subgroups, topCountries);
      }

      function sortHydroelectric() {
        subgroups = ['Percentage_hydroelectric', 'Percentage_fossil', 'Percentage_nuclear', 'Percentage_renewable'];
        color = d3.scaleOrdinal()
          .domain(subgroups)
          .range([colors.get('blue'), colors.get('black'), colors.get('red'), colors.get('green')]);
        topCountries.sort((a, b) => b.Percentage_hydroelectric - a.Percentage_hydroelectric);
        groups = [];
        topCountries.forEach((element) => groups.push(element.Country));

        update(groups, subgroups, topCountries);
      }

      function sortRenewable() {
        subgroups = ['Percentage_renewable', 'Percentage_fossil', 'Percentage_hydroelectric', 'Percentage_nuclear'];
        color = d3.scaleOrdinal()
          .domain(subgroups)
          .range([colors.get('green'), colors.get('black'), colors.get('blue'), colors.get('red')]);
        topCountries.sort((a, b) => b.Percentage_renewable - a.Percentage_renewable);
        groups = [];
        topCountries.forEach((element) => groups.push(element.Country));

        update(groups, subgroups, topCountries);
      }

      svg.append('circle').attr('cx', 400).attr('cy', 130).attr('r', 6)
        .style('fill', colors.get('black'))
        .on('click', () => { sortFossil(); });
      svg.append('circle').attr('cx', 400).attr('cy', 160).attr('r', 6)
        .style('fill', colors.get('red'))
        .on('click', () => { sortNuclear(); });
      svg.append('circle').attr('cx', 400).attr('cy', 190).attr('r', 6)
        .style('fill', colors.get('blue'))
        .on('click', () => { sortHydroelectric(); });
      svg.append('circle').attr('cx', 400).attr('cy', 220).attr('r', 6)
        .style('fill', colors.get('green'))
        .on('click', () => { sortRenewable(); });

      svg.append('text').attr('x', 420).attr('y', 130).text('Fossil')
        .style('font-size', '15px')
        .attr('alignment-baseline', 'middle')
        .on('click', () => { sortFossil(); });
      svg.append('text').attr('x', 420).attr('y', 160).text('Nuclear')
        .style('font-size', '15px')
        .attr('alignment-baseline', 'middle')
        .on('click', () => { sortNuclear(); });
      svg.append('text').attr('x', 420).attr('y', 190).text('Hydroelectric')
        .style('font-size', '15px')
        .attr('alignment-baseline', 'middle')
        .on('click', () => { sortHydroelectric(); });
      svg.append('text').attr('x', 420).attr('y', 220).text('Renewable')
        .style('font-size', '15px')
        .attr('alignment-baseline', 'middle')
        .on('click', () => { sortRenewable(); });

      update(groups, subgroups, topCountries);
    });
  },
};
</script>

<style>
#my_dataviz {
  float : center;
  padding-right : 20px;
}
</style>
