<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <router-link to="/portfolio" class="nav-link" activeClass="active">Portfolio</router-link>
        <router-link to="/stocks" class="nav-link" activeClass="active">Stocks</router-link>
      </ul>
      <!-- Right -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" @click="endDay">End Day</a>
        </li>
        <li
          class="nav-item dropdown"
          :class="{show: isDropdownOpen}"
          @click="isDropdownOpen = !isDropdownOpen"
        >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Load and Save</a>
          <div
            class="dropdown-menu"
            :class="{show: isDropdownOpen}"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a class="dropdown-item" @click="loadData">Load</a>
            <a class="dropdown-item" @click="saveData">Save</a>
          </div>
        </li>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
import axios from 'axios';

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.totalFunds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadDataProgress"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.totalFunds,
        stockPortfolio: this.$store.getters.stocksPurchased,
        stocks: this.$store.getters.stocksAvailable
      };
      axios.put('/data.json', data);
    },
    loadData() {    
      this.loadDataProgress();
    }
  }
};
</script>

<style scoped>
a.nav-link {
  cursor: pointer;
}
</style>


