<template>
  <div class="common-width">
    <section class="pro-pannel" v-for="(item, index) in data" :key="index">
      <header>
        <p class="title">{{item.title}}</p>
      </header>
      <div class="pro-body clearfix">
        <div class="big-banner">
          <img :src="item.bannerUrl" alt="">
        </div>
        <div class="column clearfix">
          <div class="column-item"
               v-for="(cell, key) in item.list"
               :key="key" @click="addCart(cell)">
            <div class="img">
              <img v-lazy="cell.url" :alt="cell.name">
            </div>
            <div class="description">
              <p class="describe">{{cell.brandName}} {{cell.title}} {{cell.tags}}</p>
              <p class="price">￥{{cell.price}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    data: {
      type: Array,
    },
  },
  methods: {
    ...mapActions([
      'addCart',
    ]),
  },
};
</script>

<style lang="less" scoped>
  @import './../assets/css/base';
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
          margin-top: -9px;
          display: block;
          content: '';
          width: 5px;
          height: 18px;
          background: red;
        }
      }
    }
    .pro-body {
      width: 100%;
      height: 594px;
      overflow: hidden;
      .big-banner {
        width: 228px;
        height: 100%;
        float: left;
        background: #e1e1e1;
        overflow: hidden;
        img {
          width: 100%;
        }
        // 鼠标进过大图时的效果
        &:hover img {
          opacity: 0.8;
        }
      }
      .column {
        width: 972px;
        float: left;
        .column-item {
          width: 228px;
          height: 290px;
          border: 1px solid #fff;
          padding: 5px;
          margin-bottom: 14px;
          float: left;
          margin-left: 15px;
          background: #fff;
          // 鼠标进过商品小图时的效果
          &:hover {
            border-color: @main-color;
            .img img {
              opacity: 0.8;
            }
          }
          .img {
            width: 100%;
            img {
              width: 100%;
              vertical-align: top;
            }
          }
          .description {
            .describe {
              font-size: 14px;
              height: 42px;
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              margin-top: 5px;
            }
            .price {
              text-align: center;
              font-size: 15px;
              color: @main-color;
              font-weight: bolder;
            }
          }
        }
      }
    }
  }
</style>
