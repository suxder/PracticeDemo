import {
  List,
  Avatar,
  Pagination,
  Divider,
  Breadcrumb,
  Popover,
  FormModel,
  Input,
  DatePicker,
} from "ant-design-vue";

const ant = {
  install: function (Vue) {
    Vue.use(List);
    Vue.use(Avatar);
    Vue.use(Pagination);
    Vue.use(Divider);
    Vue.use(Breadcrumb);
    Vue.use(Popover);
    Vue.use(FormModel);
    Vue.use(Input);
    Vue.use(DatePicker);
  },
};
export default ant;
