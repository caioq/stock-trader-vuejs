<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for="el in stocks" :key="el.id">
        <app-stock :stock="el" :type="'sell'"></app-stock>
      </div>
    </div>
  </div>
</template>

<script>
import Stock from "../stocks/Stock.vue";

export default {
  computed: {
    stocks () {
      return this.$store.getters.stocksPurchased
    }
  },
  components: {
    appStock: Stock
  }
};
</script>

