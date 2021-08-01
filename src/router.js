import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home.vue';

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
      component: () =>
        import(/* webpackChunkName: "brazil" */ "./views/Brazil.vue"),
    },
    {
      path: "/panama",
      name: "panama",
      component: () =>
        import(/* webpackChunkName: "panama" */ "./views/Panama.vue"),
    },
    {
      path: "/jamaica",
      name: "jamaica",
      component: () =>
        import(/* webpackChunkName: "jamaica" */ "./views/Jamaica.vue"),
    },
    {
      path: "/hawaii",
      name: "hawaii",
      component: () =>
        import(/* webpackChunkName: "hawaii" */ "./views/Hawaii.vue"),
    },
  ],
});

