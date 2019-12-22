<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello World"/>
    <BarChart/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import BarChart from './components/BarChart.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    BarChart,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
