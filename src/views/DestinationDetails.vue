<template>
<div>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name"
      />
      <p>{{destination.description}}</p>
    </div>
  </section>

  <section class="experiences">
    <h2>Top experiences in {{destination.name}}</h2>

    <div class="cards">
        <div class="card"  v-for="experience in destination.experiences" :key="experience.slug">
          <router-link :to="{name:'experienceDetails',params:{experienceSlug: experience.slug}}">

          <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name">
          <p>
            {{experience.name}}
          </p>
          </router-link>
        </div>

      </div>
      <router-view :key="$route.path"></router-view>
  </section>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "DestinationDetails",
  props:{
    slug:{
      type: String,
      required: true,
    }
  },
 
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
  },
};
</script>

<style  scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

.destination-details {
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>