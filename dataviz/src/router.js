import Vue from 'vue';
import Router from 'vue-router';
import CompaniesDonut from './views/CompaniesDonut.vue';
import WorldMapView from './views/WorldMapView.vue';
import StackedBarChartView from './views/StackedBarChartView.vue';
import LineChartView from './views/LineChartView.vue';
import ProjectView from './views/Project.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/CompaniesDonut',
      name: 'CompaniesDonut',
      component: CompaniesDonut,
    },
    {
      path: '/WorldMapView',
      name: 'WorldMapView',
      component: WorldMapView,
    },
    {
      path: '/StackedBarChartView',
      name: 'StackedBarChartView',
      component: StackedBarChartView,
    },
    {
      path: '/LineChartView',
      name: 'LineChartView',
      component: LineChartView,
    },
    {
      path: '/',
      name: 'ProjectView',
      component: ProjectView,
    },
  ],
});
