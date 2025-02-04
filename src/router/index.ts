import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Team from "../views/Team.vue";
import Projects from "../views/Projects.vue"; // Ensure this file exists at the specified path

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/team", name: "Team", component: Team },
  { path: "/projects", name: "Projects", component: Projects },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
