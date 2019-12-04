<template>
  <div class="container d-flex flex-wrap">
    <app-card
      v-for="(brand, index) in stocks"
      :key="index"
      :brand="brand"
      :buy="buy"
      :deductFunds="deductFunds"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import stockCard from "../components/StockCard.vue";
export default {
  components: { appCard: stockCard },
  computed: {
    ...mapGetters({ stocks: "stocks" })
  },
  methods: {
    ...mapActions({ buy: "buy", deductFunds: "deductFunds" })
  }
};
</script>

<style></style>
