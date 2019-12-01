<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light rounded mt-4 mb-4 d-flex justify-content-between"
  >
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" tag="li" class="nav-item" active-class="active">
          <a class="nav-link" href="#">Portfolio</a>
        </router-link>
        <router-link to="/stocks" tag="li" class="nav-item" active-class="active">
          <a class="nav-link" href="#">Stocks</a>
        </router-link>
      </ul>
    </div>

    <div>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">End Day</a>
        </li>

        <app-dropdown :toggle="toggleDropdown" />

        <li class="nav-item">
          <strong>
            <a class="nav-link" href="#">Funds: ${{ funds }}</a>
          </strong>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Dropdown from "./Dropdown.vue";
export default {
  components: {
    appDropdown: Dropdown
  },
  computed: {
    ...mapGetters({ funds: "funds", showDropdown: "showDropdown" })
  },
  methods: {
    ...mapActions({ toggleDropdown: "toggleDropdown" })
  }
};
</script>

<style>
</style>