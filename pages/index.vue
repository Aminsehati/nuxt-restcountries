<template>
  <div :class="['Home', { 'dark-mode': darkMode }]">
    <div class="container">
      <div class="filters_wrapper">
        <div class="left__">
          <TextFeild
            placeholder="Search for a country... "
            :value="filters.keyword"
            @onchnage="updatekeyword"
          />
        </div>
        <div class="right__">
            <Dropdown @onChnage="changeDropdownItem"/>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-x-50 gap-y-70 list-country-items">
        <div v-for="(item, index) in listCountries" :key="index">
          <CartCountry :countryInfo="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.scss";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      filters: {
        keyword: "",
      },
      listCountries:[],
    };
  },
  computed: {
    ...mapGetters({
      darkMode: "getDarkMode",
    }),
  },
  mounted() {
    this.getListCountries();
  },
  methods: {
    updatekeyword(value) {
      setTimeout(() => {
        this.searchListCountries(value);
      }, 500);
    },
    async getListCountries() {
      try {
        if (!this.listCountries) {
        } else {
          const httpReponse = await this.$axios.$get(
            "https://restcountries.com/v2/all"
          );
          const data = httpReponse.map((item) => {
            return {
              name: item?.name,
              image: item?.flag,
              capital: item?.capital,
              population: item?.population,
              region: item?.region,
            };
          });
          this.listCountries = data ;
        }
      } catch (error) {}
    },
    async searchListCountries(name) {
      try {
        const httpResponse = await this.$axios.$get(
          `https://restcountries.com/v2/name/${name}`
        );
        const data = httpResponse.map((item) => {
          return {
            ...item,
            name: item?.name,
            image: item?.flag,
            capital: item.capital,
            population: item.population,
            region: item.subregion,
          };
        });
        this.listCountries = data ;
      } catch (error) {
        // this.$toast.error(error)
      }
    },
    changeDropdownItem(item){
      this.getRegionCountry(item.name)
    },
    async getRegionCountry(region){
      try {
        const httpResponse = await this.$axios.$get(`https://restcountries.com/v2/region/${region}`);
        const data = httpResponse.map(item=>{
          return {
            ...item,
            name:item?.name,
            population:item?.population,
            region:item?.region,
            capital: item?.capital,
            image: item?.flags?.svg
          }
        })
        this.listCountries = data;
      } catch (error) {
        
      }
    },
  },
};
</script>
