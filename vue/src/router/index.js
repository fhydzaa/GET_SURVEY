import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Surveys from "../views/Surveys.vue";
import Price from "../views/Price.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import AuthLayout from "../components/AuthLayout.vue";
import store from "../store";
import SurveyView from "../views/SurveyView.vue" ;
import Page404 from "../views/Page404.vue" ;
import SurveyPublicView from "../views/SurveyPublicView.vue" ;

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
        path: "/surveys",
        name: "Surveys",
        component: Surveys,
      },
      {
        path: "/surveys/create",
        name: "SurveyCreate",
        component: SurveyView,
      },
      {
        path: "/surveys/:id",
        name: "SurveyView",
        component: SurveyView,
      },
      {
        path: '/price',
        name: 'Price',
        component: Price,
      },
    ],
  },
  {
    path: "/view/survey/:slug",
    name: 'SurveyPublicView',
    component: SurveyPublicView
  },

  {
    path: '/page404',
    name: 'Page404',
    component: Page404,
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
