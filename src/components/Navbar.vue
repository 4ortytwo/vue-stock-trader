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
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="showDropdown = !showDropdown"
          >Save &amp; Load</a>
          <div
            v-if="showDropdown"
            class="bg-light p-3"
            id="dropdown"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item" href="#">Save</a>
            <a class="dropdown-item" href="#">Load</a>
          </div>
        </li>

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
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showDropdown: false
    };
  },
  computed: {
    ...mapGetters({ funds: "funds" })
  }
};
</script>

<style>
#navbarDropdown {
  position: relative;
}
#dropdown {
  position: absolute;
}
</style>