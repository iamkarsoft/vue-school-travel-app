import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home.vue';
import Brazil from './views/Brazil.vue'
import Jamaica from './views/Jamaica.vue'
import Hawaii from './views/Hawaii.vue'
import Panama from './views/Panama.vue'
//tell vue to use router
Vue.use(Router);


export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/brazil",
      name: "brazil",
      component: Brazil,
    },
    {
      path: "/panama",
      name: "panama",
      component: Panama,
    },
    {
      path: "/jamaica",
      name: "jamaica",
      component: Jamaica,
    },
    {
      path: "/hawaii",
      name: "hawaii",
      component: Hawaii,
    },
  ],
});

