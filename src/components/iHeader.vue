<template>
  <div class="i-header">
    <div class="common-width">
      <div class="left">
        <span></span>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'i-header',
};
</script>

<style lang="less" scoped>
  @import './../assets/css/base';
  .i-header {
    background: @main-color;
    height: 40px;
    .common-width {
      height: 40px;
    }
  }
</style>
