<template>
  <div class="overview">
    <IHeader></IHeader>
    <div class="i-area">
      <div class="common-width">
        <header class="area-header">
          <span class="title"><Icon type="pound"></Icon> 专属分类</span>
        </header>
        <div class="areas clearfix">
          <div class="area-item" style="background: #cbe5f8">口红</div>
          <div class="area-item" style="background: #ffdadd">女包</div>
          <div class="area-item" style="background: #caecf7">鞋子</div>
          <div class="area-item" style="background: #d0defb">眼镜</div>
          <div class="area-item" style="background: #ffefae">婚纱</div>
        </div>
      </div>
    </div>
    <div class="common-width">
      <ProPannel :data="lipstickData"></ProPannel>
      <ProPannel :data="femaleBagData"></ProPannel>
      <ProPannel :data="highHeeledData"></ProPannel>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import IHeader from './../../components/iHeader';
import ProPannel from './../../components/pro-pannel';

export default {
  data() {
    return {
      value2: 0,
      height: 400,
      arrow: 'never',
    };
  },
  components: {
    IHeader,
    ProPannel,
  },
  computed: {
    ...mapState({
      lipstickData: state => state.prolist.lipstickData,
      femaleBagData: state => state.prolist.femaleBagData,
      highHeeledData: state => state.prolist.highHeeledData,
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
