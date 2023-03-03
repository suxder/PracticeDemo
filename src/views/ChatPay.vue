<template>
  <div class="chatPayContainer">
    <!-- 面包屑 -->
    <div class="breadcrumbContainer placeBreadcrumb">
      <a-breadcrumb separator=">" class="breadcrumb">
        <a-breadcrumb-item
          ><router-link to="/" class="breadcrumbLink">
            Home
          </router-link></a-breadcrumb-item
        >
        <a-breadcrumb-item>
          <router-link
            v-bind:to="{
              path: '/advisorDetail',
              query: { id: advisorItemID },
            }"
            class="breadcrumbLink placeLink"
          >
            {{ itemAdvisorMsg.name }}
          </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item class="breadcrumbLink">
          Live Text Chat</a-breadcrumb-item
        >
      </a-breadcrumb>
    </div>
    <div class="chatPayCard">
      <!-- 顾问信息卡片 -->
      <div class="advisorInfoCard">
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
              <span class="ant-rate-text">4.9</span>
              <a-rate size="small" :default-value="5" disabled />
            </div>
            <!--  -->
            <div class="placeAdvisorPrice">
              <span></span>
              <p><i class="pricePerMinute">$5.99</i> /min</p>
              <div class="discountPrice">
                <p>
                  <i class="discountPricePerMinute">$11.99</i> <span>-50%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 选择聊天时间 -->
      <div class="chatTimeSelector">
        <a-form-model-item label="Select Chat Time">
          <a-select :default-value="this.chatTime" class="selectTimeHead">
            <a-select-option :value="3">
              <div class="chatTimeItem">
                <span>3 Minutes Chat</span>
                <span><i>$17.97</i></span>
              </div>
            </a-select-option>
            <a-select-option :value="5">
              <div class="chatTimeItem">
                <span>5 Minutes Chat</span>
                <span><i>$29.97</i></span>
              </div>
            </a-select-option>
            <a-select-option :value="10">
              <div class="chatTimeItem">
                <span>10 Minutes Chat</span>
                <span><i>$59.97</i></span>
              </div>
            </a-select-option>
            <a-select-option :value="15">
              <div class="chatTimeItem">
                <span>15 Minutes Chat</span>
                <span><i>$89.97</i></span>
              </div>
            </a-select-option>
            <a-select-option :value="20">
              <div class="chatTimeItem">
                <span>20 Minutes Chat</span>
                <span><i>$119.97</i></span>
              </div>
            </a-select-option>
            <a-select-option :value="25">
              <div class="chatTimeItem">
                <span>25 Minutes Chat</span>
                <span><i>$149.97</i></span>
              </div>
            </a-select-option>
          </a-select>
        </a-form-model-item>
      </div>
      <div class="breakDown"></div>
      <div class="paymentMethodSelect"></div>
      <div class="cardForm"></div>
    </div>
  </div>
</template>

<script>
import { getAdvisorListAPI } from "@/api/advisorList.js";

export default {
  components: {},
  props: {},
  data() {
    return {
      advisorItemID: 0,
      itemAdvisorMsg: {
        avatarUrl: "/avatar01.webp",
      },
      chatTime: 3,
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getItemByID() {
      const { data: res } = await getAdvisorListAPI();
      this.itemAdvisorMsg = res.data.advisorList[this.advisorItemID];
    },
    initData() {
      this.advisorItemID = this.$route.query.id;
      this.getItemByID();
    },
  },
  created() {},
  mounted() {
    this.initData();
  },
};
</script>
<style scoped>
.chatPayContainer {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.chatPayCard {
  padding: 0 2rem;
}
.placeAdvisorMsgContainer {
  width: 100%;
  border: 1px solid rgba(26, 144, 255, 0.3);
}
ul.ant-rate.ant-rate-disabled {
  font-size: 2rem;
}
span.ant-rate-text {
  margin: 0;
  margin-right: 0.5rem;
}
.placeAdvisorSimMsg h3 {
  font-size: 2rem;
}
div.placeAdvisorPrice {
  justify-content: space-evenly;
}
i.pricePerMinute {
  font-style: normal;
  font-size: 2.5rem;
}
.placeAdvisorPrice p {
  font-family: "poppins-Medium";
}
.placeAdvisorPrice {
  height: 80px;
}
.placeAdvisorPrice > span {
  background-image: url("../assets/imgs/messageIcon@3x.e7d5eb0.png");
  width: 3rem;
  height: 3rem;
}
.discountPrice {
  text-align: center;
}
.discountPricePerMinute {
  font-style: normal;
  color: #aaa;
  text-decoration: line-through;
}
.discountPrice span {
  display: inline-block;
  width: 4rem;
  height: 2rem;
  background-color: orange;
  color: #fff;
  background-image: none;
  font-size: 0.75rem;
  border-radius: 0.5rem;
}
.mediumAvatar {
  width: 60px;
  height: 60px;
}
div.ant-select.ant-select-enabled {
  width: 100%;
}
li.ant-select-dropdown-menu-item {
  display: flex;
  justify-content: space-between;
}
div.chatTimeItem {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
:global(
    div.selectTimeHead
      > div.ant-select-selection
      > div.ant-select-selection__rendered
      > div.ant-select-selection-selected-value
  ) {
  float: none;
}
</style>

<style>
div.chatPayCard > div {
  margin-top: 2rem;
}
</style>
