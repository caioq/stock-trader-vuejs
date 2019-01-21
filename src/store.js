import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        funds: 10000.00,
        stocks: [],
        stocksAvailable: [
            {
                id: 1,
                name: "VALE3",
                price: 42.0

            },
            {
                id: 2,
                name: "ITUB3",
                price: 37.0
            },
            {
                id: 3,
                name: "BMW3",
                price: 240.0
            },
            {
                id: 4,
                name: "MGLU3",
                price: 170.0
            }
        ]
    },
    getters: {
        totalFunds: state => {
            return state.funds
        },
        stocksPurchased: state => {
            return state.stocks
        },
        stocksAvailable: state => {
            return state.stocksAvailable
        }
    },
    mutations: {
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
                state.stocks.push(payload.stock);
                console.log("Pushed %d stocks", + Math.floor(payload.stock.quantity));
            }
        },
        sellStock(state, payload) {
            //update state funds
            state.funds += (payload.stock.price * payload.quant)

            var stockIndex = state.stocks.findIndex((stockObj => stockObj.id == payload.stock.id));
            if (stockIndex >= 0) {                
                state.stocks[stockIndex].quantity = Number(state.stocks[stockIndex].quantity) - payload.quant;
                if (state.stocks[stockIndex].quantity == 0) {
                    state.stocks.splice(stockIndex, 1);
                }            
            } else {
                alert('Stock not found!');
            }
        },
        updatePrices(state, payload) {
            for (var i = 0; i < state.stocksAvailable.length; i++) {
                state.stocksAvailable[i].price = Math.floor(state.stocksAvailable[i].price * Math.random());
            }
        }
    }
})