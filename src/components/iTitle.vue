<template>
  <header class="i-h-title">
    <span class="title"><Icon :type="type"></Icon> {{title}}</span>
  </header>
</template>

<script>
export default {
  props: {
    title: null,
    type: null,
  },
};
</script>

<style lang="less" scoped>
  @import './../assets/css/base';
  .i-h-title {
    position: relative;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, .08);
    margin: 25px 0;
    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -200px;
      margin-top: -15px;
      width: 400px;
      height: 30px;
      background: #f5f5f5;
      text-align: center;
      color: @main-color;
      font-size: 18px;
    }
  }
</style>
