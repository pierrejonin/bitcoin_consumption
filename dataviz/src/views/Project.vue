<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="info">
            Goal of the Project
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
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
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="info">About the project</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            This project was developed during
             <a href="https://lyondataviz.github.io/teaching/lyon1-m2/2019/">Aurélien Tabard's Data Vizualisation course</a>
             and the details are available
              <a href='https://lyondataviz.github.io/teaching/lyon1-m2/2019/projets.html'>here</a>. <br>
            </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'ProjectView',
};
</script>
