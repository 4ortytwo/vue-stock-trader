<template>
  <div class="container d-flex flex-wrap">
    <app-card v-for="(brand, index) in stocks" :key="index" :brand="brand" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../components/Card.vue";
export default {
  components: { appCard: Card },
  computed: {
    ...mapGetters({ stocks: "stocks" })
  }
};
</script>

<style>
</style>