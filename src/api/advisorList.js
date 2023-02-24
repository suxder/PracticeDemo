/* eslint-disable no-unused-vars */
import myAxios from "./axios";

export function getAdvisorListAPI(paramList) {
  return myAxios({
    url: "/api/advisorList",
    method: "get",
  });
}
