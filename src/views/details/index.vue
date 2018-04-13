<template>
    <div class="details-wrapper">
      <!-- banner图 -->
      <div class="d-banner">
        <img src="./banner.jpg" alt="">
      </div>
      <div class="common-width-mini">
        <div class="main-details clearfix">
          <!-- 效果图 -->
          <div class="d-album">
            <div class="d-img">
              <img :src="bigBanner" alt="">
            </div>
            <div class="d-mini-img">
              <div class="mini-img-item"
                   v-for="(item, index) in proDetails.miniList"
                   :key="index" @mouseenter="hover(item)">
                <img :src="item.url"
                     alt="">
              </div>
            </div>
          </div>
          <div class="d-property">
            <h1>{{proDetails.brandName}}</h1>
            <p class="meta">{{proDetails.title}} {{proDetails.tags}}</p>
            <!-- 价格 -->
            <div class="prices">
              <span class="label">价格</span>
              <span class="price">￥{{Number(proDetails.price).toFixed(2)}}</span>
            </div>
            <!-- 运费 -->
            <div class="freight">
              <span class="label">运费</span>
              <span class="price">快递：18</span>
            </div>
            <!-- 数量 -->
            <div class="d-number clearfix">
              <span class="label">数量</span>
              <div class="i-number">
                  <span class="reduce" v-if="proDetails.number > 1" @click="reduceNum">
                    <Icon type="android-remove-circle"></Icon>
                  </span>
                <span class="reduce-disabled" v-else>
                    <Icon type="android-remove-circle"></Icon>
                  </span>
                <span class="number">
                  {{proDetails.number}}
                </span>
                <span class="add" @click="addNum">
                    <Icon type="android-add-circle"></Icon>
                  </span>
              </div>
            </div>
            <!-- 加入购物车 -->
            <div class="d-add-cart">
              <span class="to-buy" @click="toBuy">立即购买</span>
              <span class="add-cart" @click="addCart(proDetails)">
                <Icon type="ios-cart"></Icon> 加入购物车
              </span>
            </div>
          </div>
        </div>
        <div class="d-box">
          <Tabs>
            <TabPane label="图片" icon="images">
              <div class="tab-img">图片1</div>
              <div class="tab-img">图片2</div>
              <div class="tab-img">图片3</div>
            </TabPane>
            <TabPane label="详情" icon="ios-list-outline">
              <div class="tab-img">详情1</div>
              <div class="tab-img">详情2</div>
              <div class="tab-img">详情3</div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <!-- 底部 -->
      <iFooter></iFooter>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import background from './../../mixin/background';
import iFooter from './../../components/iFooter';

export default {
  mixins: [background],
  computed: {
    proData() {
      const type = this.$route.query.type;
      switch (type) {
        case 'lipstick':
          return this.$store.state.prolist.lipstickData;
        case 'femaleBag':
          return this.$store.state.prolist.femaleBagData;
        case 'highHeeled':
          return this.$store.state.prolist.highHeeledData;
        case 'weddingDress':
          return this.$store.state.prolist.weddingDressData;
        case 'necklace':
          return this.$store.state.prolist.necklaceData;
        default:
          return null;
      }
    },
  },
  data() {
    return {
      proDetails: null,
      bigBanner: null,
    };
  },
  components: {
    iFooter,
  },
  created() {
    this.getProItems();
  },
  methods: {
    ...mapActions([
      'addCart',
    ]),
    getProItems() {
      this.proData.list.forEach((item) => {
        if (this.$route.query.id === item.id) {
          this.proDetails = item;
          this.bigBanner = item.url;
          this.$set(this.proDetails, 'number', 1);
        }
      });
    },
    // 直接购买
    toBuy() {
    },
    // 增加
    addNum() {
      this.proDetails.number += 1;
    },
    // 减少
    reduceNum() {
      this.proDetails.number -= 1;
    },
    hover(item) {
      this.bigBanner = item.url;
    },
  },
};
</script>

<style lang="less" scoped>
  @import './../../assets/css/base';
  // 大效果图
  .d-banner {
    width: 100%;
    height: 150px;
    overflow: hidden;
  }
  // 商品详情
  .main-details {
    width: 100%;
    padding: 20px;
    // 效果图
    .d-album {
      float: left;
      /*width: 400px;*/
      .d-img {
        width: 320px;
        height: 320px;
        border: 1px solid #f1f1f1;
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
      .d-mini-img {
        text-align: center;
        margin-top: 10px;
        font-size: 0;
        .mini-img-item {
          display: inline-block;
          width: 60px;
          height: 60px;
          background: silver;
          margin: 0 10px;
          cursor: pointer ;
          img {
            width: 100%;
            vertical-align: middle;
            border: 1px solid #f1f1f1;
          }
        }
      }
    }
    // 属性 参数
    .d-property {
      float: left;
      width: 560px;
      background: #fff;
      margin-left: 30px;
      height: 400px;
      border-right: 1px solid #eee;
      padding-right: 20px;
      // 大标题
      h1 {
        font-size: 22px;
        color: #000;
        margin-bottom: 2px;
      }
      // 关键字
      .meta {
        color: @main-color;
        font-size: 14px;
      }
      // 金额
      .prices {
        width: 100%;
        padding: 25px 20px;
        background: rgba(0,0,0,.05);
        margin-top: 15px;
        .label {
          color: #999;
          margin-right: 20px;
          font-size: 14px;
        }
        .price {
          font-size: 28px;
          font-weight: bolder;
          color: @main-color;
        }
      }
      // 运费
      .freight {
        padding: 15px 20px;
        border-bottom: 1px dotted #c9c9c9;
        font-size: 14px;
        .label {
          margin-right: 20px;
          color: #999;
        }
      }
      .d-number {
        padding: 15px 20px;
        .label {
          margin-right: 20px;
          color: #999;
          float: left;
          font-size: 14px;
        }
        .i-number {
          float: left;
          line-height: 20px;
          text-align: center;
          font-size: 14px;
          .reduce, .add, .reduce-disabled {
            font-size: 22px;
            cursor: pointer;
            color: rgba(0,0,0,.3);
          }
          .reduce {
            &:hover {
              color: rgba(0,0,0,.6);
            }
          }
          .add {
            &:hover {
              color: rgba(0,0,0,.6);
            }
          }
          .reduce-disabled {
            color: rgba(0,0,0,.1);
          }
          .number {
            padding: 0 3px;
            vertical-align: top;
          }
        }
      }
      .d-add-cart {
        padding: 20px;
        span {
          display: inline-block;
          width: 180px;
          height: 40px;
          text-align: center;
          line-height: 36px;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          border: 2px solid red;
          margin-right: 8px;
        }

        .to-buy {
          background: #fff;
          color: red;
        }

        .add-cart {
          background: red;
        }
      }
    }
  }

  // d-box
  .d-box {
    width: 100%;
    padding: 10px 20px;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 20px;
    .tab-img {
      width: 100%;
      height: 200px;
      background: #eee;
      margin-bottom: 20px;
      text-align: center;
      line-height: 200px;
      font-size: 18px;
      color: #fff;
    }
  }
</style>
