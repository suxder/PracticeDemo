import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    advisorFavState: [
      {
        id: 0,
        favState: false,
      },
      {
        id: 1,
        favState: false,
      },
      {
        id: 2,
        favState: false,
      },
      {
        id: 3,
        favState: false,
      },
      {
        id: 4,
        favState: false,
      },
      {
        id: 5,
        favState: false,
      },
      {
        id: 6,
        favState: false,
      },
      {
        id: 7,
        favState: false,
      },
    ],
    orderList: [],
  },
  getters: {},
  mutations: {
    initStorage(state, localStorageData) {
      /* 
        localStorage只能存放字符串
      */
      state.advisorFavState = localStorageData;
    },
    changeData(state, id) {
      state.advisorFavState[id].favState = !state.advisorFavState[id].favState;
      localStorage.setItem(
        "advisorFavState",
        JSON.stringify(state.advisorFavState)
      );
    },
    getDataStorage() {
      return JSON.parse(localStorage.getItem("advisorFavState"));
    },
    /* 添加订单至订单列表 */
    addOrdersItem(state, orderItemData) {
      state.orderList.push(orderItemData);
      localStorage.setItem("orderList", JSON.stringify(state.orderList));
    },
    /* 页面刷新时，拉取localStorage中的数据到Vuex中，进行数据同步 */
    dataSyc(state) {
      const cacheOrderList = JSON.parse(localStorage.getItem("orderList"));
      if (cacheOrderList === null) {
        state.orderList = [];
      } else {
        state.orderList = cacheOrderList;
      }
    },
  },
  actions: {},
  modules: {},
});
