<template>
  <div class="overview">
    <IHeader></IHeader>
    <div class="banner">
      <iCarousel :bannerData="mainBanner" :height="500"></iCarousel>
    </div>
    <div class="i-area">
      <div class="common-width">
        <header class="area-header">
          <span class="title"><Icon type="pound"></Icon> 专属分类</span>
        </header>
        <div class="areas clearfix">
          <div class="area-item" style="background: #cbe5f8">口红</div>
          <div class="area-item" style="background: #ffdadd">女包</div>
          <div class="area-item" style="background: #caecf7">高跟鞋</div>
          <div class="area-item" style="background: #d0defb">婚纱</div>
          <div class="area-item" style="background: #ffefae">项链</div>
        </div>
      </div>
    </div>
    <ProPannel :data="proList"></ProPannel>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import IHeader from './../../components/iHeader';
import ProPannel from './../../components/pro-pannel';
import iCarousel from './../../components/iCarousel';

export default {
  components: {
    IHeader,
    ProPannel,
    iCarousel,
  },
  computed: {
    ...mapState({
      proList: state => state.prolist.proList,
      mainBanner: state => state.prolist.mainBanner,
    }),
  },
};
</script>

<style lang="less" scoped>
  @import './../../assets/css/base';
  .i-area {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    .area-header {
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
    .areas {
      .area-item {
        width: 228px;
        height: 130px;
        line-height: 130px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        font-weight: bolder;
        background: red;
        float: left;
        margin-left: 15px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
</style>
