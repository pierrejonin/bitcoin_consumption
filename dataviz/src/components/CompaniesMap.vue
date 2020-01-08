
<template>
  <svg class="camembert"></svg>
</template>

<script>
/* eslint no-restricted-syntax: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-unused-vars: 0 */

import * as d3 from 'd3';

export default {
  name: 'CompaniesMap',
  mounted() {
    const gdriveLink = 'https://docs.google.com/spreadsheets/d/1V-2hul0_KF5agQPGA7FJlWRFWLc5UWneJ4_ZZnmj5yM/export?format=csv&id=1V-2hul0_KF5agQPGA7FJlWRFWLc5UWneJ4_ZZnmj5yM&gid=0';

    const myPools = ['AntPool', 'Poolin', 'Huobi', 'BTC.COM', 'Okex', 'SpiderPool',
      'NovaBlock', 'BitFury', 'bytepool', '🐟', 'Nova', 'Inconnu'];
    const freq = {};
    let maxFreq = -1;
    const svg = d3.select('svg.camembert').attr('width', 960).attr('height', 500);
    const camembert = svg.append('g').attr('transform', 'translate(310,100)').attr('id', 'camembert');

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
      maxFreq = d3.max(freqs);
      const size = d3.scaleLinear().domain([0, maxFreq]);
    });
  },
};
</script>
