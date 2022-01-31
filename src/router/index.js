import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/coffee",
    name: "Coffee",
    component: () => import("../views/Coffee.vue"),
  },
  {
    path: "/coffee/:id",
    name: "CoffeeByID",
    component: () => import("../views/CoffeeID.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("../views/Game.vue"),
  },
  {
    path: "/game/:id",
    name: "GameByID",
    component: () => import("../views/GameID.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
