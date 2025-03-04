// @ts-ignore
import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"; // Single page containing all sections

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
