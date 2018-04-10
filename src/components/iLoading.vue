<template>
  <div class="i-loading" v-if="showLoading">
    <Spin fix>
      <Icon type="load-c" size=48 class="demo-spin-icon-load"></Icon>
      <div class="loading-text">Loading</div>
    </Spin>
  </div>
</template>

<script>
export default {
  props: {
    showLoading: true,
  },
};
</script>

<style lang="less" scoped>
  .i-loading {
    position: absolute;
    width: 100%;
    height: 500px;
    z-index: 99;
    .loading-text {
      font-size: 16px;
    }
  }

  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  .demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }
</style>
