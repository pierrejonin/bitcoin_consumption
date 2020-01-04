<template>
  <div class="StackedBarChartView">
    <StackedBarChart />
  </div>
</template>

<script>
// import BarChart from './components/BarChart.vue';
import StackedBarChart from '../components/StackedBarChart.vue';

export default {
  name: 'StackedBarChartView',
  components: {
    StackedBarChart,
  },
};
</script>
