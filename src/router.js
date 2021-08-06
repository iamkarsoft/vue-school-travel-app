import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

//tell vue to use router
Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
        props: true,
    },
    {
      path: "/details/:slug",
      name: "DestinationDetails",
      component: () =>
        import(
          /* webpackChunkName: "DestinationDetails" */ "./views/DestinationDetails.vue"
        ),
        props: true,
    },
  ],
});
