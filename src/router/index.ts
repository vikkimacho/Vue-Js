import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/ProductsList",
    alias: "/Products",
    name: "Products",
    component: () => import("../components/ProductsList.vue")
  },
  {
    path: "/Products/:id",
    name: "Product-details",
    component: () => import("../components/Product.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddProduct.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;