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
      <a-form-model>
        <!-- 姓名 -->
        <a-form-model-item
          label="Name"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input v-model="userInfoFormData.name" style="width: 50%" />
        </a-form-model-item>

        <!-- 生日 -->
        <a-form-model-item
          label="Date Of Birth"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-date-picker
            type="date"
            v-model="userInfoFormData.BirthDay"
            style="width: 50%"
            :format="this.dateFormat"
          />
        </a-form-model-item>

        <!-- 性别 -->
        <a-form-model-item
          label="Gender"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            name="radioGroup"
            :default-value="1"
            v-model="userInfoFormData.Gender"
          >
            <a-radio-button :value="1">
              <div class="radioItem">
                <span class="maleIcon"
                  ><i class="iconfont icon-gender-male"></i
                ></span>
                <span>Male</span>
              </div>
            </a-radio-button>
            <a-radio-button :value="2">
              <div class="radioItem">
                <span class="femaleIcon"
                  ><i class="iconfont icon-gender-female"></i
                ></span>
                <span>Female</span>
              </div>
            </a-radio-button>
            <a-radio-button :value="3">
              <div class="radioItem">
                <span class="OthersIcon"
                  ><i class="iconfont icon-icon_gender"></i
                ></span>
                <span>Others</span>
              </div>
            </a-radio-button>
          </a-radio-group>
        </a-form-model-item>

        <!-- Email -->
        <a-form-model-item
          label="Email Address"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input v-model="userInfoFormData.email" style="width: 50%" />
        </a-form-model-item>

        <!-- 电话号码（带不同国家的区号）-->
        <a-form-model-item
          label="Phone Number"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 16 }"
        >
          <!-- 区号选择器 -->
          <a-select
            show-search
            v-model="this.userInfoFormData.AreaCode"
            @change="handleChange"
            option-filter-prop="label"
          >
            <a-select-option
              v-for="item in this.countryIcons"
              :key="item.chineseName"
              :label="item.AreaCode + item.chineseName"
            >
              <span
                v-bind:style="{
                  backgroundImage:
                    'url(' +
                    require('../assets/imgs/countries/' + item.iconUrl) +
                    ')',
                }"
                class="countryIcon"
              ></span>
              +{{ item.AreaCode }} {{ item.chineseName }}
            </a-select-option>
          </a-select>

          <a-input
            class="phoneNumberInput"
            v-model="userInfoFormData.PhoneNumber"
            style="width: 33%"
          />
        </a-form-model-item>

        <!-- 提交表单信息按钮 -->
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" size="large" @click="onSubmit">
            Save Changes
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      userInfoFormData: {
        name: "张怡然",
        BirthDay: "2000-10-06",
        Gender: 2,
        email: "1439433131@qq.com",
        AreaCode: "86",
        PhoneNumber: "153770921076",
      },
      countryIcons: [
        {
          id: 0,
          chineseName: "中国",
          englishName: "China",
          iconUrl: "China.png",
          AreaCode: "86",
        },
        {
          id: 1,
          chineseName: "美国",
          englishName: "America",
          iconUrl: "American_Samoa.png",
          AreaCode: "1",
        },
        {
          id: 2,
          chineseName: "俄罗斯",
          englishName: "Russia",
          iconUrl: "Russia.png",
          AreaCode: "7",
        },
        {
          id: 3,
          chineseName: "法国",
          englishName: "France",
          iconUrl: "France.png",
          AreaCode: "33",
        },
      ],
    };
  },
  mounted() {
    this.pullData();
  },
  methods: {
    moment,
    handleChange(value) {
      this.userInfoFormData.AreaCode = value;
    },
    onSubmit() {
      localStorage.setItem("userInfo", JSON.stringify(this.userInfoFormData));
      this.$message.success("信息修改成功！");
    },
    pullData() {
      const cacheData = JSON.parse(localStorage.getItem("userInfo"));
      if (cacheData) {
        this.userInfoFormData = cacheData;
      }
    },
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
  margin-bottom: 2rem;
}

.accountContainer h2 {
  font-family: "poppins-Bold";
  font-size: 1.5rem;
  color: #4d1398;
}

.formContainer {
  background-color: rgb(251, 251, 253);
  width: 100%;
  min-height: 40vh;
  padding: 2rem 0;
}

.ant-form-item-label > label {
  color: #4d1398 !important;
  font-family: "poppins-Bold";
}

.ant-radio-group label {
  background-color: transparent !important;
  margin: 0 2rem;
  border: none !important;
  box-shadow: none !important;
  color: #ccc;
}

.ant-radio-group label::before {
  display: none !important;
}

.radioItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.radioItem span:first-child {
  display: block;
  width: 30px;
  height: 30px;
  border: 2px solid #ccc;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  font-size: 1.5rem;
}

.radioItem span:first-child i {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.ant-radio-button-wrapper-checked .radioItem span:first-child {
  border-color: #1890ff;
  background-color: #1890ff;
  color: #fff;
}

.countryIcon {
  display: inline-block;
  width: 20px;
  height: 10px;
}
/* 设置提交按钮背景色彩 */
button.ant-btn {
  background-image: linear-gradient(90deg, #8f389d, #7653c5);
}

@media screen and (max-width: 767px) {
  .accountContainer {
    width: 100%;
  }
  .accountContainer h2 {
    font-size: 3rem;
    padding-left: 2rem;
  }
  .formContainer {
    padding: 0 2rem;
  }
  div.ant-row.ant-form-item {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  div.ant-col {
    position: static !important;
  }
  div.ant-col-4 {
    width: 50%;
  }
  div.ant-col-16 {
    width: 100%;
  }
  div.ant-col-offset-4 {
    margin: 0;
  }
  div.ant-col-14 {
    width: 100%;
  }
}
</style>

<style scoped>
@media screen and (max-width: 767px) {
  input.ant-input,
  input.ant-calendar-picker-input,
  span.ant-calendar-picker,
  span.ant-input-affix-wrapper {
    width: 100% !important;
  }
  input.ant-input {
    display: inline-block;
  }
  input.phoneNumberInput.ant-input {
    width: 50% !important;
  }
  div.ant-select.ant-select-enabled {
    max-width: 50%;
  }
  button.ant-btn {
    width: 100%;
  }
}
div.ant-select.ant-select-enabled {
  max-width: 17%;
}
</style>
