// @ts-ignore
import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Projects from "../views/Projects.vue";
import Team from "../views/Team.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/projects", component: Projects },
  { path: "/team", component: Team },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
