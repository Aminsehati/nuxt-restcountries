<template>
  <div>
    <div class="error404" v-if="error.statusCode === 404">
      <h2 class="text-20 font-800">Your page Not Found</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style>
.error404 {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>