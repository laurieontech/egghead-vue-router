<template>
  <div id="home">
    <h1>Home Page</h1>
    <router-link tag="button" :to="{ name: 'blog', params: {id: 1234} }">
      <h3>Check out my Egghead Videos</h3>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "home"
};
</script>

<style scoped>
div {
  background-color: green;
}
</style>