const express = require("express");
const bodyParser = require("body-parser");
const Mock = require("mockjs");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const JSON5 = require("json5");

const app = express();
//配置body-parser
//只要加入这个配置，就会在req加一个属性body
//可以通过req.body获取post表单请求体数据
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// 工具方法
function getJsonFile(filePath) {
  let json = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
  return JSON5.parse(json);
}

app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(
  express.urlencoded({
    extended: true,
  })
); // for parsing application/x-www-form-urlencoded
app.get("/", (req, res) => {
  res.send("<h1>假后台已启动</h1>");
});

app.get("/api/advisorList", (req, res) => {
  const json = getJsonFile("./json/advisorList.json5");
  res.json(Mock.mock(json));
});

app.listen("8090", () => {
  console.log("MockServer已启动");
});

console.log("正在使用Mock");
