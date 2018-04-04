<template>
  <header class="i-header">
    <div class="common-width">
      <div class="i-logo">
        <span>BELLE GO</span>
        <p>美丽生活 这里开始</p>
      </div>
      <div class="i-search-wrapper">
        <i-input size="large" v-model="keyword" class="m-input">
          <Button slot="append">搜索</Button>
        </i-input>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      keyword: '内衣，内裤',
    };
  },
};

</script>

<style lang="less">
  @import './../assets/css/base';
  .i-header {
    background: #fff;
    position: relative;
    border-bottom: @border-red;
    .common-width {
      position: relative;
      .i-logo {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        padding: 25px 0;
        text-align: center;
        span {
          font-size: 38px;
          font-family: 'main-title';
          font-weight: bolder;
          color: @main-color;
        }
        p {
          text-align: center;
          color: @main-color;
          letter-spacing: 2px;
        }
      }
    }
  }

  .i-search-wrapper {
    width: 600px;
    margin: 0 auto;
    padding: 45px 0;
    .ivu-input-group-append {
      height: 38px !important;
      border-radius: 0 !important;
      padding: 6px 20px !important;
      background: @main-color;
      border: none;
      color: #fff;
      button {
        font-size: 16px;
        letter-spacing: 5px;
      }
    }
  }

  .m-input {
    border: @border-red;
    input {
      height: 38px !important;
      border-radius: 0 !important;
      border: none;
    }
  }
</style>
