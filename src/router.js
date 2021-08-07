import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "@/store.js";

//tell vue to use router
Vue.use(Router);

export default new Router({
  mode: "history",
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
      children: [
        {
          path: ":experienceSlug",
          name: "experienceDetails",
          props: true,
          component: () =>
            import(
              /* webpackChunckName: "ExperienceDetails" */ "./views/ExperienceDetails.vue"
            ),
        },
      ],
      beforeEnter:(to,from,next)=>{
        const exists = store.destinations.find(
          destination =>destination.slug === to.params.slug
        )

        if(exists){
          next();
        }else{
          next({name:"notFound"});
        }
      },
    },
    {
      path: "404",
      alias: "*",
      name: "notFound",
      component: () =>
        import(/*webpackChunkName: "NotFound" */ "./views/NotFound"),
    },
  ],
});
