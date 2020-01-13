<template>
  <div class='WorldMapView'>
    <WorldMap />
  </div>
</template>

<script>
// import BarChart from './components/BarChart.vue';
import WorldMap from '../components/WorldMap.vue';

export default {
  name: 'WorldMapView',
  components: {
    WorldMap,
  },
};
</script>
