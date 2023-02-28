<template>
  <div class="orderDetailContainer">
    <!-- 面包屑 -->
    <div class="OrderDetailBreadcrumbContainer">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item
          ><router-link to="/" class="breadcrumbLink">
            Home
          </router-link></a-breadcrumb-item
        >
        <a-breadcrumb-item class="breadcrumbLink">
          <router-link to="/orders" class="breadcrumbLink">
            My Order
          </router-link></a-breadcrumb-item
        >
        <a-breadcrumb-item class="breadcrumbLink">
          {{ this.$router.currentRoute.name }}</a-breadcrumb-item
        >
      </a-breadcrumb>
    </div>
    <div class="orderDetailBox">
      <div class="orderDetail">
        <div class="orderDetailCard">
          <a-collapse expandIconPosition="right" :bordered="false">
            <a-collapse-panel
              key="1"
              style="
                background: #f7f7f7;
                border-radius: 4px;
                margin-bottom: 24px;
                border: 0;
                overflow: hidden;
              "
            >
              <div class="timeTitle">
                <h3>Order Time</h3>
                <h3>End Time</h3>
              </div>
              <div class="timeDetail">
                <span>{{ this.orderDetail.orderTime }}</span>
                <span>{{ this.orderDetail.orderTime }}</span>
              </div>
              <a-divider class="smallDivider"></a-divider>
              <div class="orderID">Order ID:{{ this.orderDetail.orderID }}</div>
            </a-collapse-panel>
          </a-collapse>
        </div>
        <div class="RequestDetailCard">
          <a-collapse expandIconPosition="right" :bordered="false">
            <a-collapse-panel
              key="1"
              class=" "
              style="
                background: #fff;
                border-radius: 4px;
                margin-bottom: 24px;
                border: 0;
                overflow: hidden;
              "
              header="Request Details"
            >
              <div class="RequestName">
                <h3>Name</h3>
                <span>{{ this.userInfo.name }}</span>
              </div>
              <div class="RequestBirth">
                <h3>Date of Birth</h3>
                <span>{{ this.userInfo.BirthDay }}</span>
              </div>
              <div class="RequestGender">
                <h3>Gender</h3>
                <span>{{ this.getUserGender(this.userInfo.Gender) }}</span>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
        <div class="GeneralSituation">
          <a-collapse
            expandIconPosition="right"
            :bordered="false"
            default-active-key="1"
          >
            <a-collapse-panel
              key="1"
              class="collapseItem"
              style="
                background: #fff;
                border-radius: 4px;
                margin-bottom: 24px;
                border: 0;
                overflow: hidden;
              "
              header="Request Details"
              :showArrow="false"
            >
              <p>测试</p>
            </a-collapse-panel>
          </a-collapse>
        </div>
        <div class="SpecificSituation">
          <a-collapse
            expandIconPosition="right"
            :bordered="false"
            default-active-key="1"
          >
            <a-collapse-panel
              key="1"
              class="collapseItem"
              style="
                background: #fff;
                border-radius: 4px;
                margin-bottom: 24px;
                border: 0;
                overflow: hidden;
              "
              header="Specific Question"
              :showArrow="false"
            >
              <p>测试</p>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
      <div class="advisorDetailBox">
        <div class="OrderDetailAdvisorMsg">
          <div
            class="advisorAvatar mediumAvatar"
            v-bind:style="{
              backgroundImage:
                'url(' +
                require('../assets/imgs/avatars' + orderDetail.advisorAvatar) +
                ')',
            }"
          ></div>
          <div class="OrderDetailAdvisorSimMsg">
            <h3>{{ this.orderDetail.advisorName }}</h3>
            <p>Lorem, ipsum dolor.</p>
            <a-rate :default-value="5" disabled />
            <span class="ant-rate-text">4.9</span>
          </div>
        </div>
        <div class="orderDetailAdvisorData">
          <div>
            <h3>2449</h3>
            <span>READING</span>
          </div>
          <div>
            <h3>33.6hr</h3>
            <span>RESPONSE</span>
          </div>
          <div>
            <h3>95%</h3>
            <span>ACCURATE</span>
          </div>
          <div>
            <h3>81%</h3>
            <span>ON-TIME</span>
          </div>
        </div>
        <div class="advisorDetailPrice orderDetailPrice">
          <ul>
            <li class="toggleList">
              <div>Reading</div>
              <div>Service</div>
            </li>
            <li>
              <p>Text Reading</p>
              <i>Delivered within 24h</i>
            </li>
            <li>
              <p>Audio Reading</p>
              <i>Delivered within 24h</i>
            </li>
            <li>
              <p>Video Reading</p>
              <i>Delivered within 24h</i>
            </li>
            <li>
              <p>Live Text Chat</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      orderDetail: {
        advisorAvatar: "/avatar03.webp",
      },
      userInfo: {},
    };
  },
  watch: {},
  computed: {},
  methods: {
    changeCollapseHeader() {
      const collapseHeader = document.getElementsByClassName(
        "ant-collapse-header"
      );

      let newSpan = document.createElement("span");
      let newContent = document.createTextNode(
        this.getStatusText(this.orderDetail.orderStatus) + " "
      );
      newSpan.style.color = this.getStatusColor(this.orderDetail.orderStatus);

      newSpan.appendChild(newContent);

      let contentType = document.createTextNode("| Text Reading");

      collapseHeader[0].appendChild(newSpan);
      collapseHeader[0].appendChild(contentType);
    },
    getOrderDetailByID() {
      const orderID = this.$route.query.id;
      const orderList = JSON.parse(localStorage.getItem("orderList"));
      this.orderDetail = orderList.filter(
        (item) => item.orderID === orderID
      )[0];
      console.log(this.orderDetail);
    },
    getStatusColor(itemStatus) {
      switch (itemStatus) {
        case 1:
          return "Red";
        case 2:
          return "Gold";
        case 3:
          return "DeepSkyBlue";
        case 4:
          return "Green";
        default:
          return "Red";
      }
    },
    getStatusText(itemStatus) {
      switch (itemStatus) {
        case 1:
          return "Pending";
        case 2:
          return "Awaiting Receipt";
        case 3:
          return "Expired";
        case 4:
          return "Completed";
        default:
          return "Pending";
      }
    },
    getUserGender(userGenderCode) {
      switch (userGenderCode) {
        case 1:
          return "Male";
        case 2:
          return "Female";
        case 3:
          return "Others";
        default:
          return "Others";
      }
    },
    initUserInfo() {
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    },
  },
  created() {},
  mounted() {
    this.changeCollapseHeader();
    this.getOrderDetailByID();
    this.initUserInfo();
  },
};
</script>
<style>
.orderDetailContainer {
  width: 1200px;
  margin: 0 auto;
}

.OrderDetailBreadcrumbContainer {
  padding: 2rem 0;
}

.orderDetailBox {
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
}

.orderDetail {
  width: 50%;
  height: 500px;
}

.timeTitle {
  display: flex;
  justify-content: space-between;
}

.timeDetail {
  display: flex;
  justify-content: space-between;
  color: #ccc;
}

div.ant-divider-horizontal {
  margin: 1rem 0;
}

.orderID {
  color: #ccc;
}

.ant-collapse > .collapseItem > div.ant-collapse-header {
  color: #4d1398;
  font-family: "poppins-Bold";
  font-size: 1rem;
}

.RequestName,
.RequestBirth,
.RequestGender {
  display: flex;
  justify-content: space-between;
}

.advisorDetailBox {
  width: 40%;
  border: 2px dashed #1890ff;
  border-radius: 1rem;
  padding: 2rem;
}

.OrderDetailAdvisorMsg {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.OrderDetailAdvisorSimMsg h3,
.OrderDetailAdvisorSimMsg p {
  margin: 0;
}

.OrderDetailAdvisorSimMsg {
  padding-left: 1rem;
}

.orderDetailAdvisorData {
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  text-align: center;
}

.orderDetailAdvisorData h3 {
  color: #4d1398;
  font-family: "poppins-Bold";
  font-size: 1.5rem;
}

.orderDetailAdvisorData span {
  color: #ccc;
}

.orderDetailPrice {
  position: static;
}

.orderDetailPrice ul {
  padding: 0;
}

.orderDetailPrice li {
  width: 100%;
}

li.toggleList {
  display: flex;
  height: 100%;
  padding: 0;
  height: 40px;
}

li.toggleList div {
  width: 50%;
  height: 100%;
  font-family: "poppins-Bold";
  font-size: 1rem;
  text-align: center;
  line-height: 40px;
}

li.toggleList div:first-child {
  background-image: linear-gradient(90deg, #8f389d, #7653c5);
  color: #fff;
}

li.toggleList div:last-child {
  color: #4d1398;
}
</style>
