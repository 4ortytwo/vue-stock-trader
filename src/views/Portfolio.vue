<template>
  <div class="container d-flex flex-wrap">
    <app-portfolio-card
      v-for="(brand, index) in ownedStocks"
      :key="index"
      :brand="brand"
      :sell="sell"
      :increaseFunds="increaseFunds"
    />
  </div>
</template>

<script>
import PorfolioCard from "../components/PortfolioCard";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "portfolio",
  components: {
    appPortfolioCard: PorfolioCard
  },
  computed: {
    ...mapGetters({
      stocks: "stocks"
    }),
    ownedStocks() {
      return this.stocks.filter(brand => brand.owned > 0);
    }
  },
  methods: {
    ...mapActions({ sell: "sell", increaseFunds: "increaseFunds" })
  }
};
</script>

<style>
</style>