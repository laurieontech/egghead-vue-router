<template>
  <div id="failed">
    <h1>Proof that the router check failed</h1>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "failed"
};
</script>

<style scoped>
div {
  background-color: red;
}
</style>