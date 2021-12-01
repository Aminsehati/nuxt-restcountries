<template>
  <div :class="['form-group',{'dark-mode' : darkMode}]">
    <input
      :type="type"
      class="form-control"
      :placeholder="placeholder"
      :value="value"
      @input="updatevalue($event)"
    />
  </div>
</template>

<script>
    import './style.scss'
import { mapGetters } from 'vuex'
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  computed:{
    ...mapGetters({
      darkMode: "getDarkMode",
    })
  },
  methods:{
    updatevalue(e){
      const value = e.target.value ;
      this.$emit("input",value);
      this.$emit("onchnage",value);
    }
  }
};
</script>

<style>
</style>