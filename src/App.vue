<template>
  <div id="app" class="container">
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    appNavbar: Navbar
  },
  computed: {
    ...mapGetters({ showDropdown: "showDropdown" })
  },
  methods: {
    ...mapActions({ toggleDropdown: "toggleDropdown" })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
