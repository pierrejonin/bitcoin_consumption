<template>
  <b-container>
    <div role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-1 variant="info">
              Goal of the Project
          </b-button>
        </b-card-header>
          <b-card-body>
            <b-card-text>
              Bitcoin is a crypto-currency often criticized for its viability.
              Why ? The energy chasm it represents. <br>
              Mining bitcoin requires a great computing power,
              meaning a proportional amount of energy. <br>
              This vizualisation aims to give information about the energetic viability of Bitcoin :
              its origins, its evolution, comparision elements. It is therefore aimed
              at anyone interested in cryptocurrencies and the ecological impact.
            </b-card-text>
          </b-card-body>
      </b-card>
  </div>

    <b-row>
      <LineChart class="firstDiv"/>
    </b-row>
    <b-row>
      <CompaniesDonut class="firstDiv"/>
    </b-row>
    <b-row>
      <StackedBarChart class="firstDiv"/>
    </b-row>
    <b-row>
      <WorldMap class="firstDiv"/>
    </b-row>

    <div role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-2 variant="info">
            About the project</b-button>
        </b-card-header>
          <b-card-body>
            <b-card-text>
              This project was developed during
              <a href="https://lyondataviz.github.io/teaching/lyon1-m2/2019/">Aurélien Tabard's Data Vizualisation course</a>
              and the details are available
                <a href='https://lyondataviz.github.io/teaching/lyon1-m2/2019/projets.html'>here</a>. <br>
              </b-card-text>
          </b-card-body>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-3 variant="info">Data sources</b-button>
        </b-card-header>
          <b-card-body>
            <b-card-text>
              <a href="https://www.cia.gov/library/publications/the-world-factbook/">CIA Factbook </a> : Used to create a dataset with multiple values on each country (electricity comsumption, population, ...)
              <br>
              <a href='https://digiconomist.net/bitcoin-energy-consumption'>Digiconomist</a>
              <br>
              <a href='https://www.blockchain.com/api/blockchain_api'>API blockchain.com</a>
              <br>
              <a href="https://en.bitcoin.it/wiki/Comparison_of_mining_pools"> bitcoin.it</a>
            </b-card-text>
          </b-card-body>
      </b-card>

    </div>
  </b-container>
</template>

<script>
/* eslint no-restricted-globals:0 */
import CompaniesDonut from '../components/CompaniesDonut.vue';
import LineChart from '../components/LineChart.vue';
import StackedBarChart from '../components/StackedBarChart.vue';
import WorldMap from '../components/WorldMap.vue';


export default {
  name: 'Companies',
  components: {
    CompaniesDonut,
    LineChart,
    StackedBarChart,
    WorldMap,
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
