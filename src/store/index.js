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
  },
  getters: {},
  mutations: {
    initData(state, data) {
      console.log("初始化数据");
      state.advisorFavState = data;
    },
    changeData(state, id) {
      state.advisorFavState[id].favState = !state.advisorFavState[id].favState;
    },
  },
  actions: {},
  modules: {},
});
