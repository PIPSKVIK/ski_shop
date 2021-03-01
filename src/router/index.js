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
    redirect: { name: "AllProducts" },
    component: () => import("../views/CatalogPage"),
    children: [
      {
        path: "allProducts",
        name: "AllProducts",
        component: () =>
          import("../views/homePageCatalogLinks/CatalogAllProducts")
      },
      {
        path: "catalogSki",
        name: "CatalogSki",
        component: () => import("../views/homePageCatalogLinks/CatalogSki")
      },
      {
        path: "catalogSkiBoots",
        name: "CatalogSkiBoots",
        component: () => import("../views/homePageCatalogLinks/CatalogSkiBoots")
      },
      {
        path: "catalogSkiPoles",
        name: "CatalogSkiPoles",
        component: () => import("../views/homePageCatalogLinks/CatalogSkiPoles")
      }
    ]
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
