<template>
  <div id="companies">
    <svg class="companies"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3';
import JQuery from 'jquery';

window.$ = JQuery;

export default {
  name: 'Companies',

  data() {
    return {
      isConnected: false,
      socketMessage: '',
      lastBlock: '',
    };
  },
  methods: {
    connect() {
      this.socket = new WebSocket('wss://ws.blockchain.info/inv');
      this.socket.onopen = () => {
        this.socketMessage = 'connected';
        this.socket.send('{"op":"ping_tx"}');
        this.socket.onmessage = ({ data }) => {
          console.log(this.socket);
          this.lastBlock = data;
        };
      };
    },
  },
  mounted() {
    if (localStorage.days) {
      console.log('lol');
    } else {
      const reqString = 'https://blockchain.info/blocks/';
      const aTimeStamp = Date.now();
      localStorage.timeStamp = aTimeStamp;
      localStorage.days = [];
      // On fait 14 calls à l'api btc
      for (let i = 0; i < 14; i += 1) {
        const req = `${reqString}${aTimeStamp - (i * 3600 * 24 * 1000)}?format=json`;
        console.log(req);
        window.$.ajax({
          url: req,
          type: 'GET',
          crossDomain: true,
          dataType: 'json',
          success: (response) => {
            const resp = JSON.parse(response);
            console.log(resp.status);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    }
    const svgWidth = 600;
    const svgHeight = 300;

    const dataset = [];

    d3.csv('https://pierrejonin.github.io/bitcoin_consumption'.concat('/data/test.csv'), (data) => {
      data.forEach((d) => {
        dataset.push(d.id);
      });
      // console.log(dataset);
      const barPadding = 5;
      const barWidth = (svgWidth / dataset.length);
      d3.select('svg.companies')
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
