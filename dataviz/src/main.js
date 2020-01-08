import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import app from './App.vue';

import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: (h) => h(app),
  router,
}).$mount('#app');
