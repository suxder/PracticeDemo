import axios from "axios";

// ：这里传入axiosConfig是？
function myAxios(axiosConfig) {
  const service = axios.create({
    baseURL: "http://localhost:8090", // Mock环境下请求基址
    timeout: 10000, // 设置统一的超时时间
  });

  return service(axiosConfig); // 返回一个promise对象，方便后续封装操作
}

export default myAxios;
