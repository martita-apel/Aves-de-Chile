import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
const List = () => import("../views/List.vue");
const NotFound = () => import("../views/NotFound.vue");

import firebase from "firebase";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/list",
      name: "List",
      component: List,
      meta: {
        login: true,
      },
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    next("/");
  } else {
    next();
  }
});

export default router;
