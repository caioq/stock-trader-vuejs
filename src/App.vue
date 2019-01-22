<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12 content-main">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
};
</script>

<style>
.content-main {
  margin-top: 2%;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  } 
  to {
    transform: translateY(0);
    opacity: 1;
  } 
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  } 
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}


</style>
