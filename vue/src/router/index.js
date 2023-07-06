import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Activity from "../views/Activity.vue";
import Test from "../views/Test.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import AuthLayout from "../components/AuthLayout.vue";
import store from "../store";
import ActivityView from "../views/ActivityView.vue" 

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: "/home",
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/activity",
        name: "Activity",
        component: Activity,
      },
      {
        path: "/activity/create",
        name: "ActivityCreate",
        component: ActivityView,
      },
      {
        path: "/activity/:id",
        name: "ActivityView",
        component: ActivityView,
      },
    ],
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: "/auth",
    redirect: "/login",
    name: "Auth",
    component: AuthLayout,
    meta: {isGuest: true},
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login" });
  } else if (store.state.user.token && to.meta.isGuest) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
