import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { router } from './routes'
import { store } from './store';

axios.defaults.baseURL = 'https://vuejs-http-94c97.firebaseio.com';

//Vue.http.options.root = 'https://vuejs-http-94c97.firebaseio.com/';

Vue.filter('currency', function (value) {
  return "R$ " + value.toLocaleString();
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
