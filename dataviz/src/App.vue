<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Projet DataViz - BTC</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
              <router-link class="nav-link" to="/WorldMapView">
                Pays
              </router-link>
              <router-link class="nav-link" to="/Companies">
                Entreprises
              </router-link>
              <router-link class="nav-link" to="/StackedBarChartView">
                StackedBarChartView
              </router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">FR</b-dropdown-item>
            </b-nav-item-dropdown>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
