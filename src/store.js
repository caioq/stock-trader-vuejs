import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      funds: 10000.00,
      stocks: []
    },
    getters: {
        totalFunds: state => {
            return state.funds
        },
        stocksPurchased: state => {
            return state.stocks
        }
    },
    mutations: {
        buyStock (state, payload) {
            //update state funds
            state.funds -= (payload.stock.price * payload.quant)
            //add stock in stock purchased list
            payload.stock.quantity = payload.quant;            
            var stockIndex = state.stocks.findIndex((stockObj => stockObj.id == payload.stock.id));
            console.log("index:", stockIndex)
            if(stockIndex >= 0){
                state.stocks[stockIndex].quantity += payload.quant;            
            } else {
                state.stocks.push(payload.stock);  
            }
        }
    }
})