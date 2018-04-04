<template>
  <div class="i-top-bar">
    <div class="common-width clearfix">
      <div class="left">
        <span>嗨，欢迎来百丽购</span>
        <span class="please-login">请登录</span>
      </div>
      <div class="right">
        <ul class="clearfix">
          <li class="top-li">
            <div class="cart"><Icon type="ios-cart" class="icon"></Icon>购物车&nbsp;<span class="no-cart">0</span>&nbsp;件</div>
          </li>
        </ul>
      </div>
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
      font-size: 13px;
      height: 40px;
      line-height: 40px;
      color: #888;
      .left {
        float: left;
        span.please-login {
          margin-left: 20px;
          cursor: pointer;
        }
      }
      .right {
        float: right;
        .top-li {
          float: left;
          cursor: pointer;
          .cart{
            .icon {
              font-size: 16px;
              margin-right: 5px;
              color: @main-color;
            }
            .no-cart {
              color: #333;
            }
          }
          &:hover {
            color: @main-color;
            .no-cart {
              color: @main-color;
            }
          }
        }
      }
    }
  }
</style>
