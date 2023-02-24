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
        <div class="profiles">
          <div class="avatar">
            <div class="avatarPic"></div>
          </div>
          <div class="avatarMsg">
            <div class="avatarName">UserName</div>
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
      </div>
    </header>
    <div class="content">
      <router-view />
    </div>
    <footer>
      <ul>
        <li>
          <ul>
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
                <span>苹果商店</span>
                <span>Googel Play</span>
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
        <li></li>
        <li></li>
      </ul>
    </footer>
  </div>
</template>

<style>
/* 
  通过媒体查询来控制html的字体大小，
  从而达到控制rem的效果
*/
@media (max-width: 1200px) {
  :root {
    font-size: 0.5em;
  }
}

@media (min-width: 1600px) {
  :root {
    font-size: 1em;
  }
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
  height: 100%;
  width: 100%;
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

.content {
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
  height: 30%;
}

footer > ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;
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
  flex-flow: 1;
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
</style>
