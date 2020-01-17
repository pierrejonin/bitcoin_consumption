<template>
  <div id="scroll">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" to="/">Projet DataViz - BTC</b-navbar-brand>
      </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
