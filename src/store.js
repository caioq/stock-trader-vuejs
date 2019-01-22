import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './data/stocks'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        funds: 10000.00,
        stocks: [],
        stocksAvailable: []
    },
    getters: {
        totalFunds: state => {
            return state.funds
        },
        stocksPurchased (state, getters) {
            return state.stocks.map(stock => {
                const record = getters.stocksAvailable.find(element => element.id == stock.id);
                return {
                    id: stock.id,
                    name: record.name,
                    quantity: stock.quantity,
                    price: record.price
                }
            });            
        },
        stocksAvailable: state => {
            return state.stocksAvailable
        }
    },
    mutations: {
        'SET_STOCKS' (state, stocks) {
            state.stocksAvailable = stocks;
        },
        buyStock(state, payload) {
            //update state funds
            state.funds -= (payload.stock.price * payload.quant)            
            var stockIndex = state.stocks.findIndex((stockObj => stockObj.id == payload.stock.id));
            console.log("index:", stockIndex)
            if (stockIndex >= 0) {
                console.log("Buyed + %d stocks. Before: %d. New Total: %d", Number(payload.quant), Number(state.stocks[stockIndex].quantity), Math.floor(Number(state.stocks[stockIndex].quantity) + Number(payload.quant)));
                state.stocks[stockIndex].quantity = Number(state.stocks[stockIndex].quantity) + payload.quant;
            } else {
                //add stock in stock purchased list
                payload.stock.quantity = payload.quant;
                const data = {
                    id: payload.stock.id,
                    name: payload.stock.name,
                    quantity: payload.stock.quantity
                  };
                state.stocks.push(data);
                console.log("Pushed %d stocks", + Math.floor(payload.stock.quantity));
            }
        },
        sellStock(state, payload) {
            var stockIndex = state.stocks.findIndex((stockObj => stockObj.id == payload.stock.id));
            if (stockIndex >= 0) {                
                if (payload.quant >= state.stocks[stockIndex].quantity){
                    payload.quant = state.stocks[stockIndex].quantity;
                    state.stocks.splice(stockIndex, 1);
                } else {
                    state.stocks[stockIndex].quantity = Number(state.stocks[stockIndex].quantity) - payload.quant;                            
                }                
                //update state funds
                state.funds += (payload.stock.price * payload.quant)
            } else {
                alert('Stock not found!');
            }
        },
        'RND_STOCKS'(state, payload) {
            for (var i = 0; i < state.stocksAvailable.length; i++) {
                state.stocksAvailable[i].price = Math.round(state.stocksAvailable[i].price * (1 + Math.random() - 0.5));
            }
        },
        'LOAD_DATA'(state, payload) {
            axios.get('/data.json')
            .then( res => {
                console.log(res);
                state.funds = res.data.funds;
                state.stocksAvailable = res.data.stocks;
                state.stocks = res.data.stockPortfolio;
            });
        }
    },
    actions: {
        initStocks: ({commit}) => {
            commit('SET_STOCKS', stocks);
        },
        randomizeStocks: ({commit}) => {
            commit('RND_STOCKS');
        },
        loadDataProgress: ({commit}) => {
            commit('LOAD_DATA');
        }
    }
})