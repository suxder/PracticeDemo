import { List, Avatar, Pagination, Divider } from "ant-design-vue";

const ant = {
  install: function (Vue) {
    Vue.use(List);
    Vue.use(Avatar);
    Vue.use(Pagination);
    Vue.use(Divider);
  },
};
export default ant;
