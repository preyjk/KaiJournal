import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Help from "@/views/Help.vue";
import Profile from "@/views/Profile.vue";
import Navbar from "@/components/Nav/Navbar.vue";
import JournalBuy from "@/views/JournalBuy.vue";
import Crumbs from "@/components/Nav/Crumbs.vue";
import Kind from "@/views/Kind.vue";
import alipay from "@/views/alipay.vue";
import Order from "@/views/Order.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    components: {
      Home,
    },
    meta: "wonderful journal",
  },
  {
    path: "/help",
    components: { Help },
    meta: "help",
  },
  {
    path: "/profile",
    components: { Profile },
    meta: "profile",
  },
  {
    name: "kind",
    path: "/kind/:type/:value",
    components: { Kind },
    beforeEnter: (to, from, next) => {
      document.title = "journal category: " + to.params.value;
      next();
    },
  },
  {
    path: "/journal",
    name: "journal",
    components: { JournalBuy },
  },
  {
    path: "/pay",
    components: { alipay },
  },
  {
    path: "/order",
    name: "order",
    components: { Order },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Global before guards
router.beforeEach((to, from, next) => {
  document.title = to.meta;
  next();
});
export default router;
