<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="webLogo"><router-link to="/"></router-link></div>
        <div class="menuList">
          <ul>
            <li>
              <router-link class="viewLink" to="/allAdvisors"
                >Our Advisors</router-link
              >
            </li>
            <li>
              <router-link class="viewLink" to="/">Premium Service</router-link>
            </li>
            <li>
              <router-link class="viewLink" to="/">About US</router-link>
            </li>
            <li>
              <router-link class="viewLink" to="/">Articles</router-link>
            </li>
            <li>
              <router-link class="viewLink" to="/">Purchase</router-link>
            </li>
            <li>
              <router-link class="viewLink" to="/"
                >Student Discount</router-link
              >
            </li>
            <li>
              <router-link class="viewLink" to="/">Contact Us</router-link>
            </li>
            <li>
              <a href="#"><i></i></a>
            </li>
          </ul>
        </div>

        <a-popover placement="bottom">
          <template slot="content">
            <div class="hoverBox">
              <p><router-link to="/account">My Account</router-link></p>
              <p><router-link to="/orders">My Order</router-link></p>
              <p><router-link to="/">Sign out</router-link></p>
            </div>
          </template>
          <div class="profiles">
            <div @click="showDrawer" style="width: 8%" class="showDrawer">
              <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
            </div>
            <div class="avatar">
              <div class="avatarPic"></div>
            </div>
            <div class="avatarMsg">
              <div class="avatarName">Hi, {{ this.userInfo.name }}</div>
              <div class="avatarAssets">
                <div class="avatarAssetsNum">0$</div>
                <div class="avatarAssetsAdd">
                  <i class="iconfont icon-add"></i>
                </div>
              </div>
            </div>
            <div class="avatarChat">
              <a href="#">
                <div class="avatarChatPic"></div>
              </a>
            </div>
          </div>
        </a-popover>
        <a-drawer
          title="."
          placement="left"
          :visible="visible"
          @close="onClose"
          width="70%"
        >
          <div class="menuList showMenuList">
            <ul>
              <li>
                <router-link
                  @click.native="onClose()"
                  class="viewLink"
                  to="/allAdvisors"
                  ><img src="./assets/imgs/mobileMenulist/ourAdvisors.png" />Our
                  Advisors</router-link
                >
              </li>
              <li>
                <router-link @click.native="onClose()" class="viewLink" to="/"
                  ><img src="./assets/imgs/mobileMenulist/premiService.png" />
                  Premium Service</router-link
                >
              </li>
              <li>
                <router-link @click.native="onClose()" class="viewLink" to="/"
                  ><img src="./assets/imgs/mobileMenulist/about.png" />About
                  US</router-link
                >
              </li>
              <li>
                <router-link @click.native="onClose()" class="viewLink" to="/"
                  ><img
                    src="./assets/imgs/mobileMenulist/about.png"
                  />Articles</router-link
                >
              </li>
              <li>
                <router-link @click.native="onClose()" class="viewLink" to="/"
                  ><img
                    src="./assets/imgs/mobileMenulist/purchase.png"
                  />Purchase</router-link
                >
              </li>
              <li>
                <router-link @click.native="onClose()" class="viewLink" to="/"
                  ><img
                    src="./assets/imgs/mobileMenulist/studentAccount.png"
                  />Student Discount</router-link
                >
              </li>
              <li>
                <router-link @click.native="onClose()" class="viewLink" to="/"
                  ><img src="./assets/imgs/mobileMenulist/contact.png" />Contact
                  Us</router-link
                >
              </li>
              <li>
                <router-link
                  @click.native="onClose()"
                  class="viewLink"
                  to="/account"
                  ><img src="./assets/imgs/mobileMenulist/mine.png" />My
                  Account</router-link
                >
              </li>
              <li>
                <router-link
                  @click.native="onClose()"
                  class="viewLink"
                  to="/orders"
                  ><img src="./assets/imgs/mobileMenulist/mine.png" />My
                  Order</router-link
                >
              </li>
            </ul>
          </div>
        </a-drawer>
      </div>
    </header>
    <div class="content">
      <router-view />
    </div>
    <footer>
      <ul>
        <li>
          <ul class="footerInfo">
            <li>
              <h3>Explore Soulight</h3>
              <p>All Advisors</p>
              <p>Premium Service</p>
              <p>Articles</p>
              <p>Purchase</p>
              <p>Student Discount</p>
              <p>About Us</p>
            </li>
            <li>
              <h3>Explore Soulight</h3>
              <p>All Advisors</p>
              <p>Premium Service</p>
              <p>Articles</p>
              <p>Purchase</p>
              <p>Student Discount</p>
              <p>About Us</p>
            </li>
            <li>
              <h3>Explore Soulight</h3>
              <p>All Advisors</p>
              <p>Premium Service</p>
              <p>Articles</p>
              <p>Purchase</p>
              <p>Student Discount</p>
              <p>About Us</p>
            </li>
            <li>
              <h3>Explore Soulight</h3>
              <p>All Advisors</p>
              <p>Premium Service</p>
              <p>Articles</p>
              <p>Purchase</p>
              <p>Student Discount</p>
              <p>About Us</p>
            </li>
            <li>
              <h3>Get Soulight Mobile App</h3>
              <div class="appStoreLogo">
                <span></span>
                <span></span>
              </div>
              <h3>Follow us</h3>
              <div class="appLogo">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
          </ul>
        </li>
        <li class="webInformation">
          2023 Best Psychic, Inc © All rights reserved
        </li>
      </ul>
      <div class="footColorBar"></div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      visible: false,
      collapsed: false,
    };
  },
  mounted() {
    this.initUserInfo();
  },
  methods: {
    initUserInfo() {
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      console.log("侦听到点击事件");
      this.visible = false;
    },
  },
};
</script>

<style>
/* 
  通过媒体查询来控制html的字体大小，
  从而达到控制rem的效果
*/
:root {
  font-size: 1em;
}

* {
  box-sizing: border-box;
}

body {
  font-size: 1rem;
  width: 100vw;
  height: 100vh;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

header {
  z-index: 100;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid #e6e6e6;
  flex: 0 0 auto;
}

.container {
  height: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menuList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menuList ul {
  list-style-type: none;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
}
.viewLink {
  font-family: "poppins-Bold";
  font-size: 1.125rem;
  color: #300e55;
  text-decoration: none;
}

.viewLink:hover {
  color: #8f389d;
}

.webLogo {
  height: 50%;
  background-image: url("./assets/imgs/soulightNav@3x.png");
  background-size: 100%;
  background-repeat: no-repeat;
  /* 
    通过此例子来学习背景图片的常规写法：
    background-position：
  */
  background-position: center;
}

.webLogo {
  flex: 1;
}

.webLogo .router-link-active {
  display: block;
  width: 100%;
  height: 100%;
}

.menuList {
  flex: 7.25;
}

.profiles {
  height: 50%;
  flex: 1.66;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profiles div {
  padding: 0 0.3em;
  cursor: pointer;
}

.avatarPic {
  height: 54px;
  width: 54px;
  background-image: url("./assets/imgs/femaleAvatar.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
}

.avatarName {
  /* align-self: flex-start; */
  font-family: "poppins-Medium";
  font-size: 1.125rem;
  color: #291149;
}

.avatarAssets {
  width: 80%;
  display: flex;
  border: none;
}

.avatarAssetsNum {
  flex: 6;
  border: 1px solid #8f389d;
  border-radius: 1.25rem 0 0 1.25rem;
}

.avatarAssetsAdd {
  flex: 1;
  background-image: -webkit-linear-gradient(left, #8f389d, #7653c5);
  color: #fff;
  border-radius: 0 1.25rem 1.25rem 0;
}

.avatarChat {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatarChatPic {
  height: 30px;
  width: 30px;
  background-image: url("./assets/imgs/msgPic.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hoverBox {
  width: 10rem;
}

.hoverBox a {
  font-family: "poppins-Medium";
  font-size: 1rem;
  color: #291149;
}

.showDrawer {
  display: none;
}

.content {
  flex: 1 0 auto;
  width: 100%;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

footer {
  background-color: #f1e7ff;
  width: 100%;
  max-height: 40%;
  flex: 0 0 auto;
}

footer > ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  max-height: 100%;
  width: 1200px;
  margin: 0 auto;
}

footer li {
  list-style-type: none;
  cursor: pointer;
}

footer > ul > li {
  width: 100%;
}

footer > ul > li p {
  margin: 0;
  padding: 0.5rem 0;
  text-align: start;
  font-family: "poppins-Medium";
  font-size: 0.75rem;
  color: #300e55;
}

footer > ul > li h3 {
  text-align: start;
  font-family: "poppins-Medium";
  font-size: 0.875rem;
  color: #291149;
}

footer > ul > li:first-child {
  flex: 8;
}

footer > ul > li:first-child > ul {
  width: 100%;
  display: flex;
  padding: 2rem 0;
}

footer > ul > li:first-child > ul > li {
  flex: 1;
  padding-left: 2rem;
}

footer > ul > li:first-child > ul > li:last-child {
  flex: 1;
  flex-grow: 1;
  padding-left: 2rem;
}

footer > ul > li:nth-child(2) {
  flex: 1;
}

footer > ul > li:last-child {
  flex: 1;
}

.appStoreLogo {
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
}

.appStoreLogo span {
  display: block;
  width: 140px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
}

.appStoreLogo span:first-child {
  background-image: url("./assets/imgs/appStore@3x.png");
  margin-right: 0.5rem;
}

.appStoreLogo span:last-child {
  background-image: url("./assets/imgs/google@3x.png");
  margin-left: 0.5rem;
}

.appLogo {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.appLogo span {
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.appLogo span:first-child {
  background-image: url("./assets/imgs/icons8-instagram-48\ 2@3x.png");
}

.appLogo span:nth-child(2) {
  background-image: url("./assets/imgs/home_t.png");
}

.appLogo span:nth-child(3) {
  background-image: url("./assets/imgs/home_tictik.svg");
}

.appLogo span:nth-child(4) {
  background-image: url("./assets/imgs/home_fb.png");
}

.webInformation {
  font-family: "poppins-Medium";
  font-size: 0.875rem;
  padding-left: 2rem;
}

.footColorBar {
  display: flex;
  height: 2vh;
  width: 100%;
  background-image: url("./assets/imgs/horizontalBar@3x.94e4d8a.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/* 通过媒体查询，提供一套移动端样式 */
@media screen and (max-width: 767px) {
  :root {
    font-size: 0.5em;
  }
  header {
    height: 7vh;
  }
  .container {
    width: 100%;
  }

  footer > ul {
    width: 100%;
  }

  .footerInfo li {
    display: none;
  }

  .footerInfo li:last-child {
    display: block;
  }

  .appStoreLogo {
    height: 50%;
    justify-content: flex-start;
  }
  .appStoreLogo span {
    width: 25%;
    height: 100%;
  }
  .appLogo {
    width: 30%;
  }
  .webInformation {
    margin: 3rem auto;
    padding: 0 1rem;
    text-align: center;
  }
  .menuList {
    display: none;
  }
  .webLogo {
    display: none;
  }
  .avatarChat {
    justify-content: flex-end;
  }
  .avatarChatPic {
    width: 3rem;
    height: 3rem;
    margin: 0 2rem;
  }
  .avatarAssets {
    width: 100%;
    height: 40%;
  }
  .avatarPic {
    width: 5rem;
    height: 5rem;
  }
  .avatarMsg {
    width: 30%;
    text-align: center;
  }
  .avatarName {
    text-align: start;
  }
  .showDrawer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .showDrawer .anticon {
    font-size: 2rem;
    color: #4d1398;
  }
  /* div.ant-popover-inner {
    display: none;
  } */
  .ant-popover.ant-popover-placement-bottom {
    display: none;
  }
  .showMenuList {
    display: block;
  }
  .showMenuList > ul {
    flex-direction: column;
    align-items: flex-start;
  }
  div.showMenuList > ul > li {
    margin: 2rem 0;
  }
  /* 移动端时设置抽屉左端logo */
  div.ant-drawer-title {
    width: 55%;
    line-height: 4rem;
    background-image: url("./assets/imgs/soulightNav@3x.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: transparent;
  }
  div.footColorBar {
    height: 1.5vh;
  }
  div.content {
    padding-top: 7vh;
  }
}
</style>

<style scoped>
@media screen and (max-width: 767px) {
  .viewLink {
    font-family: "poppins-Medium";
    font-size: 1rem;
    color: #4d1398;
  }
  .viewLink img {
    width: 2rem;
    margin-right: 1rem;
  }
}
</style>
