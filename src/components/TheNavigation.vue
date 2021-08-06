<template>
  <ul slug="nav">
    <li class="links">
      <router-link to="/">Home</router-link>
    </li>

    <li v-for="destination in destinations" :key="destination.name" class="links">
      <router-link
        :to="{ name: 'DestinationDetails', params: { slug: destination.slug } }"
      >
        {{ destination.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      slug: this.$route.params.slug,
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
}
</style>