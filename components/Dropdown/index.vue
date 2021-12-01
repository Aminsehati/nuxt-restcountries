<template>
  <div class="dropdown-container" ref="slide">
    <div
      :class="['dropdown-title', { 'dark-mode': darkMode }]"
      @click="showSelectBox = !showSelectBox"
    >
      <span>
        {{ labelSelectBox }}
      </span>
    </div>
    <div
      :class="['dropdown-wrapper', { 'dark-mode': darkMode }]"
      v-if="showSelectBox"
    >
      <div
        v-for="item in dropdownItems"
        :key="item.id"
        class="dropdown-item"
        @click="chnageSelectBoxItem(item)"
      >
        <span class="font-500">
          {{ item.name }}
        </span>
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
      placeholder: "Filter by Region",
      showSelectBox: false,
      selectvalue: "",
      dropdownItems: [
        {
          id: 1,
          name: "Africa",
        },
        {
          id: 2,
          name: "Americas",
        },
        {
          id: 3,
          name: "Asia",
        },
        {
          id: 4,
          name: "Europe",
        },
        {
          id: 5,
          name: "Oceania",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      darkMode: "getDarkMode",
    }),
    labelSelectBox() {
      if (this.selectvalue) {
        return this.selectvalue;
      }
      return this.placeholder;
    },
  },
  mounted() {
    document && document.addEventListener("click", this.hideSelectBox);
  },
  destroyed() {
    document && document.removeEventListener("click", this.hideSelectBox);
  },
  methods: {
    chnageSelectBoxItem(item) {
      this.selectvalue = item.name;
      this.showSelectBox = !this.showSelectBox;
      this.$emit("onChnage", item);
    },
    hideSelectBox(e) {
      const slide = this.$refs.slide;
      if (slide.contains(e.target)) {
        //
      } else {
        this.showSelectBox = false;
      }
    },
  },
};
</script>

<style>
</style>