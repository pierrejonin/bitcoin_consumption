import Vue from 'vue';
import Router from 'vue-router';
import Companies from './views/Companies.vue';
import WorldMapView from './views/WorldMapView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Companies',
      name: 'Companies',
      component: Companies,
    },
    {
      path: '/WorldMapView',
      name: 'WorldMapView',
      component: WorldMapView,
    },
  ],
});
