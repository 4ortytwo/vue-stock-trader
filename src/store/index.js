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
    funds: 10000,
    showDropdown: false
  },
  getters: {
    stocks: state => state.stocks,
    funds: state => state.funds.toLocaleString(),
    showDropdown: state => state.showDropdown
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
    },
    loadState: (state, payload) => {
      state.stocks = payload;
    },
    toggleDropdown: state => (state.showDropdown = !state.showDropdown),
    startNewDay: (state, payload) => {
      state.stocks = payload;
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
    },
    toggleDropdown: ({ commit }) => {
      commit("toggleDropdown");
    },
    load: async ({ commit }) => {
      await Vue.http.get("data.json").then(
        response => {
          commit("loadState", response.body);
        },
        err => console.warn(err)
      );
    },
    startNewDay: ({ commit, state }) => {
      const previousDay = [...state.stocks];
      console.log("previousDay: ", previousDay);
      previousDay.forEach(el => {
        el.currentPrice =
          Math.floor(Math.random() * el.currentPrice * 1.5) + 70;
      });
      commit("startNewDay", previousDay);
    }
  },
  modules: {}
});
