<template>
  <div class="placeOrdersContainer">
    <!-- 面包屑 -->
    <div class="breadcrumbContainer placeBreadcrumb">
      <a-breadcrumb separator=">" class="breadcrumb">
        <a-breadcrumb-item>
          <router-link
            v-bind:to="{
              path: '/advisorDetail',
              query: { id: advisorItemID },
            }"
            class="breadcrumbLink placeLink"
          >
            <div
              class="advisorAvatar smallAvatar"
              v-bind:style="{
                backgroundImage:
                  'url(' +
                  require('../assets/imgs/avatars' + itemAdvisorMsg.avatarUrl) +
                  ')',
              }"
            ></div>
            {{ itemAdvisorMsg.name }}
          </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item class="breadcrumbLink">
          Text Reading</a-breadcrumb-item
        >
      </a-breadcrumb>
    </div>
    <a-divider></a-divider>
    <div class="placeOrders">
      <div class="ordersForm">
        <h2>Place Orders</h2>
        <div class="formContainer placeOrdersForm">
          <a-form-model :rules="rules" ref="orderInfoForm" :model="orderItem">
            <!-- 姓名 -->
            <a-form-model-item label="Name">
              <a-input
                disabled
                v-model="userInfoFormData.name"
                style="width: 60%"
              />
            </a-form-model-item>

            <!-- 生日 -->
            <a-form-model-item label="Date Of Birth">
              <a-date-picker
                disabled
                type="date"
                v-model="userInfoFormData.BirthDay"
                style="width: 60%"
                :format="this.dateFormat"
              />
            </a-form-model-item>

            <!-- 性别 -->
            <a-form-model-item label="Gender">
              <a-select
                disabled
                :default-value="userInfoFormData.Gender"
                :key="userInfoFormData.Gender"
                style="width: 60%"
              >
                <a-select-option :value="1"> Male </a-select-option>
                <a-select-option :value="2"> FeMale </a-select-option>
                <a-select-option :value="3"> Others </a-select-option>
              </a-select>
            </a-form-model-item>

            <!-- General Situation -->
            <a-form-model-item
              label="General Situation"
              prop="GeneralSituation"
            >
              <a-textarea
                v-model="orderItem.GeneralSituation"
                :autoSize="{ minRows: 3, maxRows: 6 }"
                placeholder="Basic usage"
                :rows="3"
                :allowClear="true"
                style="width: 60%"
              />
            </a-form-model-item>

            <!-- Specific Question -->
            <a-form-model-item
              label="Specific Question"
              class="speQuestion"
              prop="SpecificQuestion"
            >
              <a-textarea
                v-model="orderItem.SpecificQuestion"
                :autoSize="{ minRows: 1, maxRows: 3 }"
                placeholder="Basic usage"
                :rows="3"
                :allowClear="true"
                style="width: 60%"
              />
              <!-- 上传图片 -->
              <a-upload
                class="avatar-uploader"
                name="avatar"
                :multiple="true"
                :file-list="fileList"
                @change="handleChange"
              >
                <div class="uploadIcon">
                  <a-icon type="plus" />
                </div>
              </a-upload>
            </a-form-model-item>
            <a-form-model-item>
              <a-button type="primary" @click="onSubmit" size="large">
                Submit
              </a-button>
            </a-form-model-item>
          </a-form-model>
        </div>
      </div>
      <div class="advisorTips">
        <div class="placeAdvisorMsgContainer">
          <div class="placeAdvisorMsg">
            <div
              class="advisorAvatar mediumAvatar"
              v-bind:style="{
                backgroundImage:
                  'url(' +
                  require('../assets/imgs/avatars' + itemAdvisorMsg.avatarUrl) +
                  ')',
              }"
            ></div>
            <div class="placeAdvisorSimMsg">
              <h3>{{ itemAdvisorMsg.name }}</h3>
              <p>Lorem, ipsum dolor.</p>
              <a-rate :default-value="5" disabled />
              <span class="ant-rate-text">4.9</span>
            </div>
            <!--  -->
            <div class="placeAdvisorPrice">
              <span></span>
              <p>$5.99/reading</p>
            </div>
          </div>
          <div class="advisorSlogan">Lorem, ipsum dolor.</div>
        </div>
        <div class="placeAdvisorAbout"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAdvisorListAPI } from "@/api/advisorList.js";

export default {
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      rules: {
        GeneralSituation: [
          {
            required: true,
            message: "Please input your general situation",
            trigger: "blur",
          },
        ],
        SpecificQuestion: [
          {
            required: true,
            message: "Please input your specific question",
            trigger: "blur",
          },
        ],
      },
      advisorItemID: null,
      itemAdvisorMsg: {
        avatarUrl: "/avatar03.webp",
        name: null,
      },
      userInfoFormData: {},
      fileList: [],
      // 订单信息
      orderItem: {
        GeneralSituation: "",
        SpecificQuestion: "",
      },
    };
  },
  mounted() {
    this.initData();
    this.pullUserData();
    this.$store.commit("dataSyc");
  },
  methods: {
    async getItemByID() {
      const { data: res } = await getAdvisorListAPI();
      this.itemAdvisorMsg = res.data.advisorList[this.advisorItemID];
    },
    initData() {
      this.advisorItemID = this.$route.query.id;
      this.getItemByID();
    },
    pullUserData() {
      this.userInfoFormData = JSON.parse(localStorage.getItem("userInfo"));
    },
    onSubmit() {
      this.$refs.orderInfoForm.validate((valid) => {
        if (valid) {
          /* 组织一个对象，减少代码冗余 */
          const orderOBJ = {
            orderID: this.createOrderNum(),
            advisorName: this.itemAdvisorMsg.name,
            GeneralSituation: this.orderItem.GeneralSituation,
            SpecificQuestion: this.orderItem.SpecificQuestion,
            orderTime: new Date().toLocaleString(),
            advisorID: this.advisorItemID,
            advisorAvatar: this.itemAdvisorMsg.avatarUrl,
            orderType: "Text Reading",
            /* Mock 一条数据 */
            orderStatus: this.getRandom(1, 4),
          };
          this.$store.commit("addOrdersItem", orderOBJ);
          this.$message.success("订单提交成功！");
          this.$refs.orderInfoForm.resetFields();
          /* 清空表单中的数据 */
          this.orderItem.GeneralSituation = "";
          this.orderItem.SpecificQuestion = "";
          this.fileList = [];
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    handleChange(info) {
      let fileList = [...info.fileList];

      // 1. Limit the number of uploaded files
      //    Only to show two recent uploaded files, and old ones will be replaced by the new
      fileList = fileList.slice(-2);

      // 2. read from response and show file link
      fileList = fileList.map((file) => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url;
        }
        return file;
      });

      this.fileList = fileList;
    },
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
    /* 根据时间生成随机订单ID */
    setTimeDateFmt(s) {
      // 个位数补齐十位数
      return s < 10 ? "0" + s : s;
    },
    createOrderNum() {
      const now = new Date();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      let hour = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      month = this.setTimeDateFmt(month);
      day = this.setTimeDateFmt(day);
      hour = this.setTimeDateFmt(hour);
      minutes = this.setTimeDateFmt(minutes);
      seconds = this.setTimeDateFmt(seconds);
      let orderCode =
        now.getFullYear().toString() +
        month.toString() +
        day +
        hour +
        minutes +
        seconds +
        Math.round(Math.random() * 1000000).toString();
      return orderCode;
      //基于年月日时分秒+随机数生成订单编号
    },
    /* JS生成指定范围内随机整数 */
    getRandom(n, m) {
      let num = Math.floor(Math.random() * (m - n + 1) + n);
      return num;
    },
  },
};
</script>

<style>
.placeOrdersContainer {
  min-height: 58vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
}

.placeBreadcrumb {
  padding-bottom: 2rem;
}

.placeOrders {
  min-height: 58vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.smallAvatar {
  height: 40px;
  width: 40px;
  display: inline-block;
  margin-bottom: -0.8rem;
}

.ordersForm {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
}

.placeOrdersForm {
  flex-grow: 1;
  background-color: #fff;
  padding: 0;
}

.ordersForm h2 {
  font-family: "poppins-Bold";
  font-size: 1.5rem;
  color: #4d1398;
}

.advisorTips {
  width: 50%;
}

.speQuestion {
  display: flex;
  flex-direction: column;
}

span.avatar-uploader {
  display: inline-block;
  width: 60%;
}

span.avatar-uploader .ant-upload {
  width: 64px;
  height: 64px;
  display: block;
  background-color: #ccc;
  border-radius: 4px;
  text-align: center;
  margin: 1rem 0;
}

.uploadIcon i {
  font-size: 2rem;
  line-height: 70px;
}

.ant-btn {
  width: 60%;
}

.mediumAvatar {
  height: 80px;
  width: 80px;
  display: inline-block;
}

.placeAdvisorMsgContainer {
  border: 2px dashed #1890ff;
  border-radius: 1rem;
  width: 70%;
}

.placeAdvisorMsg {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
}

.placeAdvisorMsg h3,
.placeAdvisorMsg p {
  margin: 0;
}

.placeAdvisorMsg h3 {
  font-family: "poppins-Bold";
  font-size: 1rem;
  color: #4d1398;
}

.placeAdvisorPrice span {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-image: url("../assets/imgs/24hourIcon.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.placeAdvisorPrice {
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: space-around;
}

.placeAdvisorPrice span {
  align-self: end;
}

ul.ant-rate {
  color: #1890ff;
}

.placeAdvisorPrice p {
  font-family: "poppins-Bold";
  color: #4d1398;
}

.advisorSlogan {
  width: 100%;
  background-color: #ebe1ff;
  padding: 0.625rem;
  border-radius: 1rem;
  position: relative;
}

.advisorSlogan::before {
  content: "";
  width: 0;
  height: 0;
  bottom: 100%;
  position: absolute;
  border: 5px solid transparent;
  border-bottom: 10px solid #ebe1ff;
  transform: translate(1.875rem);
}

.advisorTips {
  height: 100%;
}

.placeAdvisorAbout {
  margin-top: 1rem;
  height: 50%;
  width: 70%;
  background-image: url("../assets/imgs/nltext.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.5rem;
}

@media screen and (max-width: 767px) {
  .placeOrdersContainer {
    width: 100%;
  }
  .advisorTips {
    display: none;
  }
  div.ant-divider.ant-divider-horizontal {
    display: none;
  }
  .smallAvatar {
    display: none;
  }
  .ordersForm {
    width: 100%;
    padding: 2rem;
  }
  .ordersForm h2 {
    font-size: 3rem;
  }
}
</style>

<style scoped>
.breadcrumbContainer {
  height: 40px;
  width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
}
@media screen and (max-width: 767px) {
  input.ant-input,
  input.ant-calendar-picker-input,
  span.ant-calendar-picker,
  span.ant-input-affix-wrapper {
    display: block;
    width: 100% !important;
  }
  div.ant-select {
    width: 100% !important;
  }
  button.ant-btn {
    width: 100%;
  }
  .breadcrumbContainer {
    width: 100%;
  }
  .placeOrders {
    margin-top: 2rem;
  }
}
</style>
