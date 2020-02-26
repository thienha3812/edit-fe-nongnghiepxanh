import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dangnhap",
    component: () => import("../views/dangnhap/index.vue")
  },
  {
    path: "/dashboard",
    component: () => import("../views/dashboard/index.vue"),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("../views/dashboard/index/index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
