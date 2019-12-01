import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stocks: [
      {
        id: 0,
        name: "SAMSUNG",
        currentPrice: 100,
        owned: 10
      },
      {
        id: 1,
        name: "GOOGLE",
        currentPrice: 100,
        owned: 0
      },
      {
        id: 2,
        name: "APPLE",
        currentPrice: 100,
        owned: 0
      },
      {
        id: 3,
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
    funds: state => {
      return state.funds.toLocaleString();
    }
  },
  mutations: {
    buy: (state, payload) => {
      state.stocks[payload.id].owned += payload.qty;
    },
    sell: (state, payload) => {
      state.stocks[payload.id].owned -= payload.qty;
    },
    deductFunds: (state, payload) => {
      state.funds -= payload;
    },
    increaseFunds: (state, payload) => {
      state.funds += payload;
    }
  },
  actions: {
    buy: ({ commit }, payload) => {
      commit("buy", payload);
    },
    sell: ({ commit }, payload) => {
      commit("sell", payload);
    },
    deductFunds: ({ commit }, payload) => {
      commit("deductFunds", payload);
    },
    increaseFunds: ({ commit }, payload) => {
      commit("increaseFunds", payload);
    }
  },
  modules: {}
});
