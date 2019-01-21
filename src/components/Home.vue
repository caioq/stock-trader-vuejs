<template>
  <div class="card">
    <div class="card-body">
      <h1>Trade or View your Portfolio</h1>
      <p>Click on 'End Day' to begin a new day!</p>
      <p class="title-bold">Your Funds: R$ {{ funds }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds () {
      return this.$store.getters.totalFunds
    }
  }
};
</script>

<style>
.title-bold {
  font-weight: bold;
}
</style>


