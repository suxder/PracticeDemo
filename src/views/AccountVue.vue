<template>
  <div class="accountContainer">
    <!-- 面包屑 -->
    <div class="breadcrumbContainer">
      <a-breadcrumb separator=">" class="breadcrumb">
        <a-breadcrumb-item
          ><router-link to="/" class="breadcrumbLink">
            Home
          </router-link></a-breadcrumb-item
        >
        <a-breadcrumb-item class="breadcrumbLink">
          {{ this.$router.currentRoute.name }}</a-breadcrumb-item
        >
      </a-breadcrumb>
    </div>

    <a-divider></a-divider>
    <h2>User Information</h2>
    <div class="formContainer"></div>
  </div>
</template>

<style>
.accountContainer {
  width: 1200px;
  min-height: 58vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.accountContainer h2 {
  font-family: "poppins-Bold";
  font-size: 1.5rem;
  color: #4d1398;
}

.formContainer {
  background-color: rgb(251, 251, 253);
  width: 100%;
  height: 40vh;
}
</style>
