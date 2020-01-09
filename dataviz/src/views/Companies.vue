<template>
  <CompaniesDonut class="firstDiv"/>
</template>

<script>
import CompaniesDonut from '../components/CompaniesDonut.vue';

export default {
  name: 'Companies',
  components: {
    CompaniesDonut,
  },
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
          this.lastBlock = data;
        };
      };
    },
  },
};
</script>

<style>
.firstDiv {
  animation: fadeIn 2s;
}

@keyframes fadeIn {
 0% {opacity: 0;}
 25% {opacity: 0.2;}
 50% {opacity: 0.4;}
 75% {opacity: 0.6;}
 100% {opacity: 1;}
}

</style>
