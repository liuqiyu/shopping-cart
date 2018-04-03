<template>
  <div class="i-top-bar">
    <div class="common-width">
      <div class="left">
        <span>嗨，欢迎来belle go</span>
        <span class="please-login">请登录</span>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
  @import './../assets/css/base';
  .i-top-bar {
    background: #f2f2f2;
    height: 40px;
    border-bottom: @border-e;
    .common-width {
      height: 40px;
      .left {
        float: left;
        line-height: 40px;
        font-size: 14px;
        span.please-login {
          margin-left: 20px;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
</style>
