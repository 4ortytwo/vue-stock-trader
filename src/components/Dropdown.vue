<template>
  <li class="nav-item dropdown" v-on-clickaway="close">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      @click.prevent="toggle"
    >Save &amp; Load</a>
    <div v-if="showDropdown" class="bg-light p-3" id="dropdown" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="#">Save</a>
      <a class="dropdown-item" href="#">Load</a>
    </div>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  props: {
    toggle: Function
  },
  computed: {
    ...mapGetters({ showDropdown: "showDropdown" })
  },
  methods: {
    close() {
      if (this.showDropdown) {
        this.toggle();
      }
    }
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