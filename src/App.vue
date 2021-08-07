<template>
  <div id="app">
    <TheNavigation></TheNavigation>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
  margin-bottom: 10px;
}

#nav a {
  padding: 30px;
}

#nav a.router-link-exact-active {
  color: #42b983;
  font-weight: 900;
}
</style>
