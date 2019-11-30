import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stocks: [
      {
        name: "SAMSUNG",
        currentPrice: 100,
        owned: 10
      },
      {
        name: "GOOGLE",
        currentPrice: 100,
        owned: 0
      },
      {
        name: "APPLE",
        currentPrice: 100,
        owned: 0
      },
      {
        name: "TESLA",
        currentPrice: 100,
        owned: 10
      }
    ],
    funds: 10000
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
    buy: (state, payload) => {
      state.stocks[payload.index].owned += payload.qty;
    },
    sell: (state, payload) => {
      state.stocks[payload.index].owned -= payload.qty;
    }
  },
  actions: {
    buy: ({ commit }, payload) => {
      commit("buy", payload);
    },
    sell: ({ commit }, payload) => {
      commit("sell", payload);
    }
  },
  modules: {}
});
