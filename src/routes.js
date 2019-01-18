import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Stocks from './components/stocks/Stocks.vue';
import Portfolio from './components/portfolio/Portfolio.vue';

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/stocks',
        name: 'stocks',
        component: Stocks
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    }
];

export const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

export default router;
