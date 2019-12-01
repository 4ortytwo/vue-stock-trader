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
      <a class="dropdown-item" href="#" @click.prevent="save">Save</a>
      <a class="dropdown-item" href="#" @click.prevent="load">Load</a>
    </div>
  </li>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  computed: {
    ...mapGetters({ showDropdown: "showDropdown", stocks: "stocks" })
  },
  methods: {
    ...mapActions({ toggle: "toggleDropdown", loadState: "load" }),
    close() {
      if (this.showDropdown) {
        this.toggle();
      }
    },
    save() {
      this.$http.put("data.json", this.stocks);
      this.toggle();
    },
    load() {
      this.loadState();
      this.toggle();
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