<template>
  <div class="orderDetailContainer">
    <!-- 面包屑 -->
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
    <div class="orderDetailBox">
      <div class="orderDetail"></div>
      <div class="advisorDetail"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style>
.orderDetailContainer {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.orderDetailBox {
  flex: 1 0 auto;
  width: 100%;
}
</style>
