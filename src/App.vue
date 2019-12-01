<template>
  <div id="app" class="container">
    <app-navbar />
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
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

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 0.5s ease-out forwards;
  transition: opacity 0.5s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(20px);
  }
}
</style>
