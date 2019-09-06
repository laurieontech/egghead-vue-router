<template>
  <div id="blog">
    <h1>This is blog number {{id}}</h1>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "blog",
  props: ["id"]
};
</script>

<style scoped>
div {
  background-color: purple;
}
</style>