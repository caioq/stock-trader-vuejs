<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for="el in stocks" :key="el.id">
        <app-stock :stock="el" :type="'buy'"></app-stock>
      </div>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  data() {
    return {
      stocks: [
        { 
          id: 1,
          name: "VALE3",
          price: 42.0
          
        },
        {
          id: 2,
          name: "ITUB3",
          price: 37.0
        },
        {
          id: 3,
          name: "BMW3",
          price: 240.0
        },
        {
          id: 4,
          name: "MGLU3",
          price: 170.0
        }
      ]
    };
  },
  components: {
    appStock: Stock
  }
};
</script>

<style>

</style>

