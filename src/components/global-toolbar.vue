<template>
  <div class="i-global-toolbar clearfix" :style="{height: innerHeight + 'px'}">
    <div class="i-strip">
      <div class="i-cart" @click="controlCart">
        <Icon type="bag" class="icon"></Icon>
        <span class="word">购物车</span>
      </div>
    </div>
    <div class="i-cart-wrap">
      <div class="i-cart-top">
        全屏查看
      </div>
      <div class="i-cart-list-wrap">
        <div class="i-cart-list-row">
          <div class="i-cart-list-cell">
            <div class="i-cell-header">
              <div class="left-h">口红</div>
              <div class="right-h">￥3100</div>
            </div>
            <div class="i-cell-list">
              <div class="i-cell-list-item">
                <div class="i-img"></div>
                <div class="i-desc">
                  <p>321321321321</p>
                  <p>312312312312</p>
                </div>
                <div class="i-number">
                  32
                </div>
                <div class="i-price">
                  ￥520011111
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="i-cart-settlement">
        <p class="settlement-header">
          <span>已选 <b>8</b> 件</span>
          <span class="price">￥208222.00</span>
        </p>
        <div class="settlement-btn">结算 <Icon type="ios-arrow-forward"></Icon></div>
      </div>
    </div>
  </div>
</template>

<script>
import { hasClass } from './../utils/utils';

export default {
  props: {
    innerHeight: null,
  },
  methods: {
    // Mini版购物车的控制
    controlCart() {
      const toolbar = document.querySelector('.i-global-toolbar');
      if (hasClass(toolbar, 'open')) {
        toolbar.classList.remove('open');
      } else {
        toolbar.classList.add('open');
      }
    },
  },
};
</script>

<style lang="less" scoped>
  @import './../assets/css/base';
  .i-global-toolbar {
    position: fixed;
    right: -250px;
    top: 0;
    width: 285px;
    height: 400PX;
    background: #e6e6e6;
    z-index: 8888;
    transition: right 0.5s;
    /* Firefox 4 */
    -moz-transition: right 0.5s;
    /* Safari 和 Chrome */
    -webkit-transition: right 0.5s;
    /* Opera */
    -o-transition: right 0.5s;

    .i-strip {
      width: 35px;
      height: 100%;
      float: left;
      background: #000;
      .i-cart {
        width: 35px;
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

    .i-cart-wrap {
      position: relative;
      float: left;
      width: 250px;
      height: 100%;
      .i-cart-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 28px;
        line-height: 28px;
        background: #e6e6e6;
        padding: 0 10px;
      }
      .i-cart-list-wrap {
        padding: 29px 0 85px 0;
        overflow-y: auto;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        visibility: visible;
        .i-cart-list-row {
          .i-cart-list-cell {
            background: #fff;
            padding: 0 10px;
            margin-bottom: 15px;
            .i-cell-header {
              overflow: hidden;
              height: 28px;
              line-height: 28px;
              border-bottom: 1px solid #e6e6e6;
              .left-h {
                float: left;
              }
              .right-h {
                float: right;
              }
            }
            .i-cell-list {
              width: 100%;
              .i-cell-list-item {
                padding: 5px 0;
                overflow: hidden;
                .i-img {
                  overflow: hidden;
                  float: left;
                  width: 50px;
                  height: 50px;
                  background: red;
                  img {
                    width: 100%;
                    vertical-align: middle;
                  }
                }
                .i-desc {
                  overflow: hidden;
                  width: 60px;
                  float: left;
                  margin-left: 5px;
                  p {
                    line-height: 25px;
                    .sigleEllipsis;
                  }
                }
                .i-number {
                  overflow: hidden;
                  width: 60px;
                  float: left;
                  line-height: 50px;
                  text-align: center;
                }
                .i-price {
                  overflow: hidden;
                  width: 55px;
                  float: right;
                  line-height: 50px;
                }
              }
            }
          }
        }
      }
      .i-cart-settlement {
        width: 100%;
        height: 85px;
        background: #e6e6e6;
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 10px 20px;
        .settlement-header {
          margin-bottom: 5px;
          position: relative;
          -webkit-justify-content: space-between;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-align-content: stretch;
          -ms-flex-line-pack: stretch;
          align-content: stretch;
          overflow: hidden;
          display: -webkit-flex;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          .price {
            color: @main-color;
            font-weight: bolder;
          }
        }
        .settlement-btn {
          width: 100%;
          height: 40px;
          line-height: 40px;
          letter-spacing: 5px;
          font-size: 15px;
          background: @main-color;
          color: #fff;
          text-align: center;
          cursor: pointer;
        }
      }
    }
    &.open {
      right: 0;
    }
  }

  // 浏览器滚动条样式
  .i-cart-list::-webkit-scrollbar,
  .i-cart-list::-webkit-scrollbar,
  .i-cart-list::-webkit-scrollbar {
    width: 5px;
  }
  .i-cart-list::-webkit-scrollbar-thumb,
  .i-cart-list::-webkit-scrollbar-thumb,
  .i-cart-list::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: #616161;
  }
  .i-cart-list::-webkit-scrollbar-track,
  .i-cart-list::-webkit-scrollbar-track,
  .i-cart-listmbarp-favor-detail-bd::-webkit-scrollbar-track {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background-color: transparent;
  }
</style>
