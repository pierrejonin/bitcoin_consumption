import Vue from 'vue';
import Router from 'vue-router';
import ProjectView from './views/Project.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProjectView',
      component: ProjectView,
    },
  ],
});
