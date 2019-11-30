<template>
  <div class="container d-flex flex-wrap">
    <app-card v-for="(brand, index) in stocks" :key="index" :brand="brand" :index="index" :buy="buy" />
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
    ...mapActions({ buy: "buy" })
  }
};
</script>

<style>
</style>