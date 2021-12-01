<template>
  <header :class="['header', { 'dark-mode': darkMode }]">
    <div class="container">
      <div class="logo__area">
        <nuxt-link to="/">
          <h2 class="text-16 font-800">Where in the world ?</h2>
        </nuxt-link>
      </div>
      <div class="dark-mode">
        <span @click="activeDarkMode" class="cursor-pointer">
          <i class="fas fa-moon mr-10"></i>
          {{
            darkMode ? "Light Mode" : "Dark Mode"
          }}
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import "./style.scss";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      darkMode: "getDarkMode",
    }),
  },
  methods: {
    activeDarkMode() {
      this.$store.commit("setDarkMode", !this.darkMode);
    },
  },
};
</script>

<style>
</style>