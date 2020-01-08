<template>
  <CompaniesMap />
</template>

<script>
import CompaniesMap from '../components/CompaniesMap.vue';

export default {
  name: 'Companies',
  components: {
    CompaniesMap,
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
