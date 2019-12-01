import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueResource);

Vue.http.options.root = "https://vue-stock-trader-226b4.firebaseio.com/";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
