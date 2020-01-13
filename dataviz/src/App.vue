<template>
  <div id="scroll">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" to="/">Projet DataViz - BTC</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
              <router-link class="nav-link" to="/vizus">
                Visualisations
              </router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
