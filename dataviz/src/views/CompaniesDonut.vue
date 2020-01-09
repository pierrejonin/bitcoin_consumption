<template>
  <b-container>
    <b-row>
      <CompaniesDonut class="firstDiv"/>
    </b-row>
  </b-container>
</template>

<script>
/* eslint no-restricted-globals:0 */
import CompaniesDonut from '../components/CompaniesDonut.vue';

export default {
  name: 'Companies',
  components: {
    CompaniesDonut,
  },
};
</script>

<style>

.firstDiv {
  animation: fadeIn 2s;
}

@keyframes fadeIn {
 0% {opacity: 0.1;}
 25% {opacity: 0.2;}
 75% {opacity: 0.8;}
 100% {opacity: 1;}
}
</style>
