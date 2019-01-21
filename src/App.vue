<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12 content-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header
  }
};
</script>

<style>
.content-main {
  margin-top: 2%;
}
</style>
