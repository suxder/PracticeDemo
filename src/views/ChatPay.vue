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
          <a-select
            :default-value="this.chatTime"
            class="selectTimeHead"
            @change="handleChange"
          >
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
      <div class="breakDown">
        <h3>Breakdown</h3>
        <div class="costItems">
          <p>
            <span>{{ this.chatTime }} Minutes Chat</span>
            <span>${{ this.chatTime * 6 - 0.23 }}</span>
          </p>
          <p>
            <span>Current Balance</span>
            <span>$0.00</span>
          </p>
        </div>
        <div class="allCost">
          <p>
            <span>Additional Credits Required</span>
            <span>${{ this.chatTime * 6 - 0.23 }}</span>
          </p>
        </div>
      </div>
      <div class="paymentMethodSelect">
        <h3>Select Payment Method</h3>
        <div class="methodSelectBox">
          <div
            class="payMethods ActiveSelected"
            @click="togglePayMethods($event)"
          >
            Bank Card
          </div>
          <div class="payMethods" @click="togglePayMethods($event)">PayPal</div>
        </div>
      </div>
      <div class="cardForm">
        <a-form-model>
          <!-- Card Number -->
          <a-form-model-item label="CardNumber">
            <a-input
              placeholder="Please enter the card number"
              v-model="payCardMsg.cardName"
              style="width: 100%"
            >
              <a-icon slot="suffix" type="credit-card" />
            </a-input>
          </a-form-model-item>

          <!-- Expiration Day -->
          <a-form-model-item label="ExpirationDay">
            <a-month-picker
              placeholder="Please enter the expiration date"
              type="date"
              v-model="payCardMsg.expirationDate"
              style="width: 100%"
              ><a-icon slot="suffixIcon" type="caret-down" />
            </a-month-picker>
          </a-form-model-item>

          <!-- Name on Card -->
          <a-form-model-item label="NameOnCard">
            <a-input
              placeholder="Please enter the name on card"
              v-model="payCardMsg.nameOnCard"
              style="width: 100%"
            />
          </a-form-model-item>

          <!-- CVC -->
          <a-form-model-item label="CVCName">
            <a-input
              placeholder="Please enter the name on card"
              v-model="payCardMsg.CVCName"
              style="width: 100%"
            />
          </a-form-model-item>

          <a-form-model-item>
            <a-button
              type="primary"
              @click="onSubmit"
              size="large"
              style="width: 100%"
            >
              Use This Card
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
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
      payCardMsg: {
        cardName: "",
        expirationDate: "",
        nameOnCard: "",
        CVCName: "",
      },
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
    handleChange(value) {
      this.chatTime = value;
    },
    togglePayMethods(e) {
      const btns = document.querySelectorAll(".payMethods");
      btns.forEach((item) => {
        item.classList.remove("ActiveSelected");
      });
      e.target.classList.add("ActiveSelected");
    },
    onSubmit() {},
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
  border: 2px solid rgba(26, 144, 255, 0.3);
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
.breakDown {
  background-color: rgb(204, 204, 204, 0.1);
  padding: 2rem;
  border-radius: 1rem;
}
.costItems {
  border-bottom: 1px dashed rgb(0, 191, 255, 0.4);
}
.allCost p {
  margin-top: 1rem;
  margin-bottom: 0;
}
.breakDown div p {
  display: flex;
  justify-content: space-between;
}
.paymentMethodSelect h3 {
  font-family: "poppins-Bold";
  font-size: 2rem;
  color: #4d1398;
}
.methodSelectBox {
  width: 100%;
  box-shadow: 0 3px 8px #d3ddeb;
  border-radius: 1rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.methodSelectBox div {
  width: 50%;
  height: 4rem;
  line-height: 4rem;
  color: #4d1398;
  font-family: "poppins-Medium";
}
div.ActiveSelected {
  background-image: linear-gradient(90deg, #8f389d, #7653c5);
  border-radius: 1rem;
  color: #fff;
}
:global(div.cardForm div.ant-form-item-label > label) {
  font-family: "poppins-Medium";
  color: #111 !important;
}
:global(div.cardForm div.ant-form-item) {
  margin: 1rem 0;
}
</style>

<style>
div.chatPayCard > div:nth-child(2),
div.chatPayCard > div:nth-child(4) {
  margin-top: 2rem;
}
</style>
