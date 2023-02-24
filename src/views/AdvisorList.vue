<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div class="advisorList">
    <div class="navBarBgi"></div>
    <div class="advisorContainer">
      <div class="advisorItem" v-for="item in showData" :key="item.name">
        <div class="avatar">
          <div
            class="avatarImg"
            v-bind:style="{ backgroundImage: item.avatarUrl }"
          ></div>
        </div>
        <div class="advisorItemMsg">
          <router-link
            v-bind:to="{ path: '/advisorDetail', query: { id: item.id } }"
          >
            <h2>
              {{ item.name }}
            </h2>

            <span>{{ item.favState ? "已收藏" : "未收藏" }}</span>
          </router-link>
          <p>
            {{ item.introSim }}
          </p>
          <p>
            {{ item.intro }}
          </p>
        </div>
        <div class="advisorItemOperate">
          <div class="advisorItemOperateRow">
            <button class="readBtn">Get Reading</button>
            <div class="priceMsg">
              <p>$4.18/<i>reding</i></p>
              <p><i>$5.99</i></p>
            </div>
          </div>
          <div class="advisorItemOperateRow">
            <button class="chatBtn"><i></i>Chat Now</button>
            <div class="priceMsg">
              <p>$3.99/<i>min</i></p>
              <p><i>$7.99</i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <a-pagination
        v-model="current"
        :total="data.length"
        @change="onShowSizeChange"
        :page-size.sync="pageSize"
      ></a-pagination>
    </div>
  </div>
</template>

<script>
import { getAdvisorListAPI } from "@/api/advisorList.js";

export default {
  data() {
    return {
      showData: null,
      data: [],
      pageSize: 4,
      current: 1,
    };
  },
  mounted() {
    this.getList();
    this.onShowSizeChange(1, this.pageSize);
    this.pullFavStateData();
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      this.showData = this.data.slice(current - 1, current + pageSize - 1);
    },
    async getList() {
      const { data: res } = await getAdvisorListAPI();
      this.data = res.data.advisorList;
      console.log(this.data);
      this.pullFavStateData();
      this.onShowSizeChange(1, this.pageSize);
    },
    initFavData() {
      let favData = [];
      this.data.forEach((item) => {
        const itemFavState = {
          id: item.id,
          favState: false,
        };

        favData.push(itemFavState);
      });

      this.$store.commit("initData", favData);
    },
    pullFavStateData() {
      const favStateData = this.$store.state.advisorFavState;
      this.data.forEach((item, idx) => {
        item.favState = favStateData[idx].favState;
      });
      console.log(this.data);
    },
  },
};
</script>

<style>
.advisorList {
  width: 100%;
}

.navBarBgi {
  width: 100%;
  height: 50vh;
  background-image: url("../assets/imgs/soulightPsyBg@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.advisorContainer {
  max-height: 2300px;
  width: 1200px;
  margin: 0 auto;
}

.advisorItem {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0px;
}

.avatarImg {
  flex: 1;
  height: 160px;
  width: 160px;
  background-image: url("../assets/imgs/avatars/avatar01.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
}

.advisorItemMsg {
  font-family: "poppins-Bold";
  flex: 3;
  text-align: left;
  padding-left: 1rem;
}

.advisorItemMsg h2 {
  font-size: 1.375rem;
  color: #300e55;
}

.advisorItemMsg p {
  font-size: 1rem;
  color: #291149;
}

.advisorItemMsg p:last-child {
  /* 实现限制指定行数，超出部分用省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.advisorItemOperate {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.advisorItemOperateRow {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
}

.advisorItemOperateRow button {
  font-family: "poppins-Bold";
  font-size: 1rem;
  width: 189px;
  height: 48px;
  border-radius: 4px;
  border: none;
}

button.readBtn {
  background-color: #a6a6a6;
  color: #fff;
}

button.chatBtn {
  background-color: #fff;
  color: #a6a6a6;
  border: 2px solid #a6a6a6;
}

.priceMsg {
  height: 48px;
  padding-left: 1rem;
}

.priceMsg p {
  font-family: "poppins-Bold";
  font-size: 1rem;
  color: #a6a6a6;
  margin: 0;
  text-align: start;
}

.priceMsg i {
  font-size: 0.75rem;
  font-style: normal;
}

.priceMsg p:last-child {
  text-decoration: line-through;
}

.pagination {
  padding: 6rem;
  padding-top: 4rem;
}
</style>
