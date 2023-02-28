import Vue from "vue";
import VueRouter from "vue-router";
import AdvisorList from "../views/AdvisorList.vue";
import HomeVue from "@/views/HomeVue.vue";
import AdvisorDetail from "@/views/AdvisorDetail.vue";
import AccountVue from "@/views/AccountVue.vue";
import OrderVue from "@/views/OrderVue.vue";
import PlaceOrders from "@/views/PlaceOrders.vue";
import OrderDetail from "@/views/OrderDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVue,
  },
  {
    path: "/allAdvisors",
    name: "advisors",
    component: AdvisorList,
  },
  {
    path: "/advisorDetail",
    name: "advisorsDetail",
    component: AdvisorDetail,
  },
  {
    path: "/account",
    name: "accountInfo",
    component: AccountVue,
  },
  {
    path: "/orders",
    name: "orders",
    component: OrderVue,
  },
  {
    path: "/placeOrders",
    name: "placeOrders",
    component: PlaceOrders,
  },
  {
    path: "/orderDetails",
    name: "orderDetails",
    component: OrderDetail,
  },
];

const router = new VueRouter({
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    /* 注意这里的写法！ */
    return {
      x: 0,
      y: 0,
      behavior: "smooth",
    };
  },
});

export default router;
