<template>
  <div class="overview">
    <!-- 标题 + 搜索栏 -->
    <IHeader></IHeader>
    <!-- banner滚动 -->
    <iCarousel :bannerData="mainBanner" :height="500"></iCarousel>
    <!-- 分类 -->
    <div class="i-area">
      <div class="common-width">
        <!-- 标题 -->
        <iTitle :type="areaType" :title="areaTitle"></iTitle>
        <div class="areas clearfix">
          <div class="area-item" style="background: #cbe5f8">口红</div>
          <div class="area-item" style="background: #ffdadd">女包</div>
          <div class="area-item" style="background: #caecf7">高跟鞋</div>
          <div class="area-item" style="background: #d0defb">婚纱</div>
          <div class="area-item" style="background: #ffefae">项链</div>
        </div>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="pro-list">
      <div class="common-width">
        <ProPannel :data="lipstickData" :showPannel="showLipstickData"></ProPannel>
        <div class="pro-sec">
          <iLoading :showLoading="!showFemaleBagData"></iLoading>
          <ProPannel :data="femaleBagData" :showPannel="showFemaleBagData"></ProPannel>
        </div>

        <div class="pro-sec">
          <iLoading :showLoading="!showHighHeeledData"></iLoading>
          <ProPannel :data="highHeeledData" :showPannel="showHighHeeledData"></ProPannel>
        </div>

        <div class="pro-sec">
          <iLoading :showLoading="!showWeddingDressData"></iLoading>
          <ProPannel :data="weddingDressData" :showPannel="showWeddingDressData"></ProPannel>
        </div>

        <div class="pro-sec">
          <iLoading :showLoading="!showNeckLaceData"></iLoading>
          <ProPannel :data="necklaceData" :showPannel="showNeckLaceData"></ProPannel>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="u-may-like">
      <div class="common-width">
        <!-- 标题 -->
        <iTitle :type="likeType" :title="likeTitle"></iTitle>
        <iLoading :showLoading="likeLoading"></iLoading>
        <!-- 数据列表 -->
        <proList :list="uLikeList" v-if="!likeLoading"></proList>
      </div>
    </div>
    <!-- 底部 -->
    <iFooter></iFooter>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import IHeader from './../../components/iHeader';
import ProPannel from './../../components/pro-pannel';
import iCarousel from './../../components/iCarousel';
import iFooter from './../../components/iFooter';
import iTitle from './../../components/iTitle';
import proList from './../../components/pro-list';
import iLoading from './../../components/iLoading';

export default {
  data() {
    return {
      areaTitle: '专属分类',
      areaType: 'pound',
      likeTitle: '猜你喜欢',
      likeType: 'heart',
      likeLoading: true,
      timer: null,
      showLipstickData: true,
      showFemaleBagData: false,
      showHighHeeledData: false,
      showWeddingDressData: false,
      showNeckLaceData: false,
    };
  },
  components: {
    IHeader,
    ProPannel,
    iCarousel,
    iFooter,
    iTitle,
    proList,
    iLoading,
  },
  computed: {
    ...mapState({
      lipstickData: state => state.prolist.lipstickData,
      femaleBagData: state => state.prolist.femaleBagData,
      highHeeledData: state => state.prolist.highHeeledData,
      weddingDressData: state => state.prolist.weddingDressData,
      necklaceData: state => state.prolist.necklaceData,
      uLikeList: state => state.prolist.uLikeList,
      mainBanner: state => state.prolist.mainBanner,
    }),
  },
  created() {
    // （优化加载） 浏览器滚动到一定位置，使猜你喜欢加载显示
    document.addEventListener('scroll', this.getList);
  },
  methods: {
    // 获取猜你喜欢数据
    getList() {
      // 用于兼容各浏览器 计算浏览器滚动高度
      const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || 0;
      this.timer = setTimeout(() => {
        if (scrollTop > 500 && scrollTop < 1000) {
          this.showFemaleBagData = true;
        } else if (scrollTop >= 1000 && scrollTop < 1500) {
          this.showHighHeeledData = true;
        } else if (scrollTop >= 1500 && scrollTop < 2000) {
          this.showWeddingDressData = true;
        } else if (scrollTop >= 2000 && scrollTop < 2500) {
          this.showNeckLaceData = true;
        } else if (scrollTop >= 3200) {
          this.likeLoading = false;
        }
      }, 500);
    },
  },
  destroyed() {
    // 接触滚动事件绑定
    document.removeEventListener('scroll', this.getList);
    // 清除
    clearTimeout(this.timer);
  },
};
</script>

<style lang="less" scoped>
  @import './../../assets/css/base';
  // 分类图标
  .i-area {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
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
  // 商品列表
  .pro-list {
    padding-bottom: 10px;
    .pro-sec {
      min-height: 200px;
    }
  }
  // 猜你喜欢
  .u-may-like {
    min-height: 200px;
  }
</style>
