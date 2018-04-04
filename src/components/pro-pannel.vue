<template>
  <section class="pro-pannel">
    <header>
      <p class="title">{{title}}</p>
    </header>
    <div class="pro-body clearfix">
      <div class="big-banner">
        <img src="./../../static/images/big-banner/lipstick.jpg" alt="">
      </div>
      <div class="column clearfix">
        <div class="column-item"></div>
        <div class="column-item"></div>
        <div class="column-item"></div>
        <div class="column-item"></div>
        <div class="column-item"></div>
        <div class="column-item"></div>
        <div class="column-item"></div>
        <div class="column-item"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: null,
  },
};
</script>

<style lang="less" scoped>
  .pro-pannel {
    margin-bottom: 20px;
    width: 100%;
    header {
      height: 30px;
      line-height: 30px;
      position: relative;
      font-size: 18px;
      padding-left: 20px;
      margin-bottom: 10px;
      font-family: "Microsoft YaHei",SimSun,'\5b8b\4f53',sans-serif;

      p {
        &:before {
          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -10px;
          display: block;
          content: '';
          width: 6px;
          height: 20px;
          background: red;
        }
      }
    }

    .pro-body {
      width: 100%;
      height: 464px;
      overflow: hidden;
      .big-banner {
        width: 244px;
        height: 464px;
        float: left;
        background: #e1e1e1;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .column {
        width: 956px;
        float: left;
        .column-item {
          width: 225px;
          height: 225px;
          margin-bottom: 14px;
          float: left;
          margin-left: 14px;
          background: #e1e1e1;
        }
      }
    }
  }
</style>
