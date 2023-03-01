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
  Radio,
  Select,
  Button,
  Message,
  Upload,
  Icon,
  Rate,
  Collapse,
  Empty,
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
    Vue.use(Radio);
    Vue.use(Select);
    Vue.use(Button);
    Vue.use(Message);
    Vue.prototype.$message = Message;
    Vue.use(Upload);
    Vue.use(Icon);
    Vue.use(Rate);
    Vue.use(Collapse);
    Vue.use(Empty);
  },
};
export default ant;
