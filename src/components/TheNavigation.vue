<template>
  <ul id="nav">
    <li class="links">
      <router-link to="/">Home</router-link>
    </li>

    <li v-for="destination in destinations" :key="destination.name" class="links">
      <router-link
        :to="{ name: 'DestinationDetails', params: { id: destination.id } }"
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
      destinationId: this.$route.params.id,
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