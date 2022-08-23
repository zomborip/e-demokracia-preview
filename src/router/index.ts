import { createRouter, createWebHistory } from "vue-router";
import LoginViewVue from "@/views/LoginView.vue";
import ColorsView from "@/views/ColorsView.vue";
import DashBoard from "@/views/DashBoardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LoginViewVue,
    },
    {
      path: "/colors",
      name: "colors",
      component: ColorsView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashBoard,
    },
    /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } */
  ],
});

export default router;
