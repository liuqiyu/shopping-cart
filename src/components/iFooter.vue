<template>
    <div class="i-footer">
      <div class="i-guarantee">
        <div class="common-width">
          <div class="img">
            <img src="./../assets/images/guarantee.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="i-copyright">
        <div class="common-width">
          <span class="copyright">© 2008-2018 belle-go.COM 版权所有</span>
          <span class="contact">联系方式（QQ）：1064839051 </span>
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
  .i-footer {
    width: 100%;
    border-top: 1px solid #D1D7DC;
    background: #fff;
    .i-guarantee {
      width: 100%;
      position: relative;
      .img {
        padding: 25px 0 15px 0;
        text-align: center;
        border-bottom: 1px solid rgba(0,0,0,.08);
      }
    }
    .i-copyright {
      background: #000;
      border-top: 2px solid @main-color;
      line-height: 40px;
      text-align: center;
      .copyright, .contact {
        color: #999;
        letter-spacing: 0.5px;
        margin: 0 100px;
      }
    }
  }
</style>
