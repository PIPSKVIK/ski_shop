import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/HomePage")
  },
  {
    path: "/catalog",
    name: "CatalogPage",
    component: () => import("../views/CatalogPage")
  },
  {
    path: "/news",
    name: "NewsPage",
    component: () => import("../views/NewsPage")
  },
  {
    path: "/comments",
    name: "CommentsPage",
    component: () => import("../views/CommentPage")
  },
  {
    path: "/cart",
    name: "CartPage",
    component: () => import("../views/CartPage")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
