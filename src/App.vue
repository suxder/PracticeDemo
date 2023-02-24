<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="webLogo">1</div>
        <div class="menuList">
          <ul>
            <li><a href="#">Advisors</a></li>
            <li><a href="#">Premium Service</a></li>
            <li><a href="#">About US</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Purchase</a></li>
            <li><a href="#">Student Discount</a></li>
            <li><a href="#">Contact Us</a></li>
            <li>
              <a href="#"><i></i></a>
            </li>
          </ul>
        </div>
        <div class="profiles">3</div>
      </div>
    </header>
    <div class="content">
      <router-view />
    </div>
    <footer>Footer</footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

:root {
  font-size: 1em;
}

body {
  font-size: 1rem;
  width: 100vw;
  height: 100vh;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
}

header {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 10%;
}

.container {
  height: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container div {
  height: 100%;
}

.container ul {
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
}

.menuList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menuList ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
}

.menuList a {
  font-family: "poppins";
  font-size: 1.125rem;
  color: #300e55;
  text-decoration: none;
}

.menuList a:hover {
  color: #8f389d;
}

.webLogo {
  background-image: url("./assets/imgs/soulightNav@3x.png");
  
}

.content {
  background-color: #ccc;
  width: 100%;
  height: 200%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.webLogo {
  flex: 1;
}

.menuList {
  flex: 7.25;
}

.profiles {
  flex: 1.66;
}

footer {
  background-color: deepskyblue;
  width: 100%;
  height: 30%;
}
</style>
