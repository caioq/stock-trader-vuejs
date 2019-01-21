<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for="el in stocksA" :key="el.id">
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
      
    };
  },
  computed: {
    stocksA () {
      return this.$store.getters.stocksAvailable
    }
  },
  components: {
    appStock: Stock
  }
};
</script>

<style>

</style>

