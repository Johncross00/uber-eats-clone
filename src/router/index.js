import { default as Home } from "@/pages/Home.vue";
import Restaurant from "@/pages/Restaurant.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component: Restaurant,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
