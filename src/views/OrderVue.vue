<template>
  <div class="orderContainer">
    <!-- 面包屑 -->
    <a-breadcrumb separator=">">
      <a-breadcrumb-item
        ><router-link to="/" class="breadcrumbLink">
          Home
        </router-link></a-breadcrumb-item
      >
      <a-breadcrumb-item class="breadcrumbLink">
        {{ this.$router.currentRoute.name }}</a-breadcrumb-item
      >
    </a-breadcrumb>
    <a-divider></a-divider>
    <!-- 订单列表 -->
    <div class="orderListContainer">
      <div v-for="item in showData" :key="item.id">
        <router-link
          v-bind:to="{ path: '/orderDetails', query: { id: item.orderID } }"
        >
          <div class="orderItem">
            <div
              class="advisorAvatar smallAvatar"
              v-bind:style="{
                backgroundImage:
                  'url(' +
                  require('../assets/imgs/avatars' + item.advisorAvatar) +
                  ')',
              }"
            ></div>
            <div class="order">
              <h3>{{ item.advisorName }}</h3>
              <p>{{ item.SpecificQuestion }}</p>
              <p>
                <i
                  v-bind:style="{
                    color: getStatusColor(item.orderStatus),
                  }"
                  >{{ getStatusText(item.orderStatus) }} </i
                >| Text Reading
              </p>
            </div>
            <div class="orderTime">{{ item.orderTime }}</div>
          </div>
        </router-link>

        <a-divider></a-divider>
      </div>
    </div>
    <div class="pagination orderListPagination">
      <a-pagination
        v-model="current"
        :total="ordersList.length"
        @change="onShowSizeChange"
        :page-size.sync="pageSize"
      ></a-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ordersList: [],
      showData: [],
      pageSize: 5,
      current: 1,
    };
  },
  mounted() {
    this.initOrderList();
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      this.showData = this.ordersList.slice(
        (current - 1) * pageSize,
        (current - 1) * pageSize + pageSize
      );
    },
    initOrderList() {
      this.ordersList = JSON.parse(localStorage.getItem("orderList"));
      this.onShowSizeChange(1, this.pageSize);
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
  },
};
</script>

<style>
.orderContainer {
  min-height: 58vh;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.orderListContainer {
  flex: 1 0 auto;
}

.orderItem .smallAvatar {
  margin-bottom: 0;
}

.orderItem {
  display: flex;
  align-items: center;
  width: 100%;
}

.orderItem p,
.orderItem h3 {
  margin: 0;
}

.orderTime {
  flex-grow: 1;
  text-align: right;
}

.order {
  padding: 0 1rem;
}

.order h3 {
  font-family: "poppins-Bold";
  font-size: 1rem;
  color: #4d1398;
}

.order p {
  font-family: "poppins-Medium";
  font-size: 0.5rem;
  color: #ccc;
}

.order p i {
  font-style: normal;
  font-family: inherit;
  font-size: inherit;
  color: SPRINGGREEN;
}

.orderListPagination {
  padding: 1rem;
}
</style>
