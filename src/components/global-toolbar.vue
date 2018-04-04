<template>
  <div class="i-global-toolbar" :style="{height: innerHeight + 'px'}">
    <!--<div class="i-back-top iconfont icon-fanhuidingbu"></div>-->
    <div class="i-cart">
      <Icon type="bag" class="icon"></Icon>
      <span class="word">购物车</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    innerHeight: null,
  },
};
</script>

<style lang="less" scoped>
  @import './../assets/css/base';
  .i-global-toolbar {
    position: fixed;
    right: 0;
    top: 0;
    width: 35px;
    height: 400PX;
    background: #000;
    z-index: 8888;

    /*.i-back-top {*/
      /*position: absolute;*/
      /*left: 0;*/
      /*bottom: 20px;*/
      /*width: 100%;*/
      /*height: 35px;*/
      /*line-height: 35px;*/
      /*text-align: center;*/
      /*color: #f1f1f1;*/
      /*font-size: 18px;*/
      /*cursor: pointer;*/
    /*}*/

    .i-cart {
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -50px;
      padding: 0 10px;
      height: 100px;
      cursor: pointer;
      .icon {
        color: @main-color;
        font-size: 18px;
        margin-bottom: 5px;
      }
      .word {
        font-size: 14px;
        color: #f1f1f1;
      }
    }
  }
</style>
