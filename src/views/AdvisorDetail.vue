<template>
  <div class="advisorDetail">
    <div class="advisorDetailContainer">
      <!-- 面包屑 -->
      <div class="breadcrumbContainer">
        <a-breadcrumb separator=">" class="breadcrumb">
          <a-breadcrumb-item
            ><router-link to="/" class="breadcrumbLink">
              Home
            </router-link></a-breadcrumb-item
          >
          <a-breadcrumb-item class="breadcrumbLink">
            {{ itemAdvisorMsg.name }}</a-breadcrumb-item
          >
        </a-breadcrumb>
      </div>
      <div class="advisorMsg">
        <div
          class="advisorAvatar"
          v-bind:style="{
            backgroundImage:
              'url(' +
              require('../assets/imgs/avatars' + itemAdvisorMsg.avatarUrl) +
              ')',
          }"
        ></div>
        <div class="advisorMsgSim">
          <h3>{{ itemAdvisorMsg.name }}</h3>
          <p>Intuitive Advisor</p>
          <span
            @click="changeAdvisorFavState()"
            class="collectBtn"
            v-bind:style="{
              backgroundImage:
                'url(' + require('../assets/imgs/' + advisorItemFavURL) + ')',
            }"
          ></span>
        </div>
        <div class="advisorDetailPrice">
          <ul>
            <li>
              <router-link
                v-bind:to="{
                  path: '/placeOrders',
                  query: { id: this.advisorItemID },
                }"
                ><p>Text Reading</p></router-link
              >
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
              <router-link
                v-bind:to="{
                  path: '/chatPay',
                  query: { id: this.advisorItemID },
                }"
                ><p>Live Text Chat</p></router-link
              >
            </li>
            <li>
              <p>Live Audio Chat</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="advisorAbout">
        <div class="advisorAboutContainer">
          <h3>About</h3>
          <p><span class="quotaMark"></span></p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            aspernatur facere nisi sunt esse, quidem laborum architecto
            voluptates id aliquam, cum consequuntur provident beatae, dolore
            dignissimos! Animi nostrum consequatur nam aperiam illo non
            exercitationem corporis at earum molestiae totam, accusantium nobis
            quasi ex sequi illum perspiciatis vel laboriosam dicta maiores?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            facilis tenetur blanditiis, debitis non omnis totam animi laborum
            quibusdam molestiae esse fugit laboriosam fugiat, commodi dicta
            asperiores amet at quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            qui reprehenderit nostrum quaerat consequuntur, molestias hic ullam
            sapiente asperiores ad commodi consequatur reiciendis velit optio
            esse illum beatae quis earum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAdvisorListAPI } from "@/api/advisorList.js";

export default {
  data() {
    return {
      advisorItemFavState: false,
      advisorItemFavURL: "heart.png",
      advisorItemID: 0,
      itemAdvisorMsg: {
        avatarUrl: "/avatar03.webp",
        name: null,
      },
    };
  },
  mounted() {
    this.initData();
    this.advisorItemFavState = JSON.parse(
      localStorage.getItem("advisorFavState")
    )[this.advisorItemID].favState;
    this.favURlByState;
  },
  methods: {
    initData() {
      this.advisorItemID = this.$route.query.id;
      this.getItemByID();
    },
    async getItemByID() {
      const { data: res } = await getAdvisorListAPI();
      this.itemAdvisorMsg = res.data.advisorList[this.advisorItemID];

      this.favURlByState();
    },
    changeAdvisorFavState() {
      this.$store.commit("changeData", this.advisorItemID);
      this.favURlByState();
    },
    favURlByState() {
      this.advisorItemFavState = JSON.parse(
        localStorage.getItem("advisorFavState")
      )[this.advisorItemID].favState;
      if (this.advisorItemFavState === false) {
        this.advisorItemFavURL = "heart.png";
      } else {
        this.advisorItemFavURL = "redHeart.png";
      }
    },
  },
};
</script>

<style>
.advisorDetail {
  width: 100%;
  height: 100%;
}

.advisorDetailContainer {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.advisorMsg {
  margin: 0 auto;
  width: 1200px;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.advisorMsgSim {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 1rem;
}

.advisorMsgSim h3 {
  font-family: "poppins-Bold";
  font-size: 1.5rem;
  color: #291149;
}

.advisorMsgSim p {
  font-family: "poppins-Medium";
  font-size: 1rem;
  color: #291149;
}

.collectBtn {
  display: block;
  width: 40px;
  height: 36px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.advisorDetailPrice {
  position: fixed;
  top: 20vh;
  right: 2rem;
}

.advisorAbout {
  flex: 1 0 auto;
  width: 100%;
  background-color: #fcf8ff;
  padding: 2rem 0;
}

.quotaMark {
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  margin: 1.5625rem 0px 0.6875rem;
  background-image: url("../assets/imgs/quotationMarks.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.advisorDetailPrice li {
  background-color: #fff;
  list-style-type: none;
  width: 300px;
  height: 80px;
  margin: 1rem 0;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0 3px 8px #d3ddeb;
}

.advisorDetailPrice li p {
  font-family: "poppins-Bold";
  font-size: 1rem;
  color: #4d1398;
  text-align: start;
  margin: 0;
}

.advisorDetailPrice li i {
  display: block;
  width: 100%;
  font-family: "poppins-medium";
  font-size: 0.85rem;
  font-style: normal;
  color: #4d1398;
  text-align: start;
}

.advisorAboutContainer {
  width: 1200px;
  margin: 0 auto;
}

.advisorAboutContainer h3,
.advisorAboutContainer p {
  text-align: start;
}

.advisorAboutContainer h3 {
  font-size: 1.5rem;
  color: #291149;
}

.advisorAboutContainer p {
  font-size: 0.875rem;
  color: #291149;
}

.advisorAvatar {
  height: 160px;
  width: 160px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
}

@media screen and (max-width: 767px) {
  .advisorAvatar {
    width: 8rem;
    height: 8rem;
  }
  .advisorMsg {
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
  .advisorDetailPrice {
    position: static;
  }
  .advisorDetailPrice > ul {
    padding: 0;
  }
  .advisorDetailPrice > ul > li {
    width: 100%;
    height: 8rem;
    padding: 2rem;
  }
  div.breadcrumbContainer {
    width: 100%;
    padding: 2rem;
  }
  .advisorAboutContainer {
    width: 100%;
  }
  .advisorMsgSim {
    align-items: center;
  }
  .advisorMsg div {
    margin: 1rem 0;
  }
  div.ant-divider.ant-divider-horizontal {
    height: 2px;
    background-color: #f7f7f7;
  }
  .advisorAboutContainer {
    padding: 2rem;
  }
  .advisorAboutContainer h3 {
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
  .breadcrumbContainer {
    width: 100%;
  }
}
</style>
