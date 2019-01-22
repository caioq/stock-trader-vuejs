<template>
  <div class="card stock-card">
    <h5 class="card-header">
      {{ stock.name }}
      <small class="text-muted">(Price: {{ stock.price }})</small>
      <small v-if="type=='sell'" class="text-muted">(Quantity: {{ stock.quantity }})</small>
    </h5>
    <div v-if="type=='buy'" class="card-body">
      <input type="number" placeholder="Quantity" v-model="quant">
      <button
        @click="buyStock"
        class="btn btn-success"
        :disabled="insufficientFunds || quant <= 0"
      >Buy</button>
    </div>
    <!-- Sell Stock - Portfolio Page -->
    <div v-if="type=='sell'" class="card-body">
      <input type="number" placeholder="Quantity" v-model="quant">
      <button @click="sellStock" class="btn btn-danger" :disabled="(quant <= 0)">Sell</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock", "quantityPurchased", "type"],
  data() {
    return {
      quant: ""
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quant * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      if (this.quant > 0) {
        this.$store.commit("buyStock", {
          stock: this.stock,
          quant: Number(this.quant)
        });
        //TODO: add stock in portfolio

        this.quant = "";
      }
    },
    sellStock() {
      if (this.quant > 0) {
        this.$store.commit("sellStock", {
          stock: this.stock,
          quant: Number(this.quant)
        });
        //TODO: add stock in portfolio

        this.quant = "";
      }
    }
  }
};
</script>

<style>
.stock-card {
  margin: 3px;
}
</style>
