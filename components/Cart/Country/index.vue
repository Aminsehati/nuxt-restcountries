<template>
  <div class="country_item">
    <nuxt-link :to="`/country/${countryInfo.name}`">
      <figure :class="['country-image', { 'dark-mode': darkMode }]">
        <img :src="countryInfo.image" />
      </figure>
      <div :class="['country_content', { 'dark-mode': darkMode }]">
        <div class="country-name">
          <span class="block text-16 font-800 text-dark1">
            {{ countryInfo.name }}
          </span>
        </div>
        <div class="country-population">
          <span class="font-700"> Population : </span>
          <span>
            {{ countryInfo.population }}
          </span>
        </div>
        <div class="country-region">
          <span class="font-700"> Region : </span>
          <span>
            {{ countryInfo.region }}
          </span>
        </div>
        <div class="country-region">
          <span class="font-700"> Capital : </span>
          <span>
            {{ countryInfo.capital }}
          </span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import "./style.scss";
import { mapGetters } from "vuex";
export default {
  props: {
    countryInfo: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters({
      darkMode: "getDarkMode",
    }),
  },
};
</script>

<style>
</style>