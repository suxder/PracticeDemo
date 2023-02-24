import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ant from "../config/AntDesign"; // 拆分antd引入模块为单独文件
import "./assets/fonts/font.css";
import "./assets/fonts/iconfont.css";

Vue.use(ant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
