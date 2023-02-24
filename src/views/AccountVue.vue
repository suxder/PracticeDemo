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
    <div class="formContainer">
      <!-- 姓名 -->
      <a-form-model>
        <a-form-model-item
          label="Name"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input v-model="userInfoFormData.name" style="width: 50%" />
        </a-form-model-item>
      </a-form-model>
      <!-- 生日 -->
      <a-form-model-item
        label="Date Of Birth"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-date-picker
          v-model="userInfoFormData.BirthDay"
          show-time
          type="date"
          :placeholder="userInfoFormData.BirthDay"
          style="width: 50%"
        />
      </a-form-model-item>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfoFormData: {
        name: "285768778",
        BirthDay: "2005-02-24",
        Gender: 2,
        email: "1439433131@qq.com",
        PhoneNumber: "+86 153770921076",
      },
    };
  },
};
</script>

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
