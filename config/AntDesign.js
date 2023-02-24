import { Card, List } from "ant-design-vue";

const ant = {
  install: function (Vue) {
    Vue.use(Card);
    Vue.use(List);
  },
};
export default ant;
