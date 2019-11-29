import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stocks: [
      {
        name: "SAMSUNG",
        currentPrice: 100
      },
      {
        name: "GOOGLE",
        currentPrice: 100
      },
      {
        name: "APPLE",
        currentPrice: 100
      },
      {
        name: "TESLA",
        currentPrice: 100
      }
    ],
    ownedStocks: []
  },
  getters: {
    stocks: state => {
      return state.stocks;
    },
    ownedStocks: state => {
      return state.ownedStocks;
    }
  },
  mutations: {
    buyStock: (state, payload) => {
      state.ownedStocks.push(payload);
    }
  },
  actions: {},
  modules: {}
});
