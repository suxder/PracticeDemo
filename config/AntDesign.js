import { List, Avatar, Pagination, Divider, Breadcrumb } from "ant-design-vue";

const ant = {
  install: function (Vue) {
    Vue.use(List);
    Vue.use(Avatar);
    Vue.use(Pagination);
    Vue.use(Divider);
    Vue.use(Breadcrumb);
  },
};
export default ant;
