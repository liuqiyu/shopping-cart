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
        <h3>我的购物车</h3>
        <span class="close"><Icon type="ios-close-outline" size="20"></Icon></span>
      </div>
      <div class="i-cart-list-wrap">
        <div class="i-cart-list-row">
          <div class="i-cart-list-cell" v-for="(item, index) in cartData" :key="index">
            <div class="i-cell-header">
              <div class="left-h">{{ item.type }}</div>
              <div class="right-h">￥{{ item.rowPrice }}</div>
            </div>
            <div class="i-cell-list">
              <div class="i-cell-list-item" v-for="(cell, key) in item.data" :key="key">
                <div class="i-img">
                  <img :src="cell.url" alt="">
                </div>
                <div class="i-desc">
                  <p>{{ cell.brandName }}</p>
                  <p>{{ cell.title }}</p>
                </div>
                <div class="i-number">
                  <span class="reduce" v-if="cell.number > 1" @click="reduceCart(cell)">
                    <Icon type="android-remove-circle"></Icon>
                  </span>
                  <span class="reduce-disabled" v-else>
                    <Icon type="android-remove-circle"></Icon>
                  </span>
                  <span class="number">{{cell.number}}</span>
                  <span class="add" @click="addCartDefault(cell)">
                    <Icon type="android-add-circle"></Icon>
                  </span>
                </div>
                <div class="i-price">
                  ￥{{ cell.cellPrice }}
                </div>
                <div class="i-delete" @click="deleteCart(cell)"><Icon type="trash-a"></Icon></div>
              </div>
            </div>
          </div>
        </div>
        <div class="no-cart-data" v-if="cartData.length <= 0">
          <div class="img">
            <img src="./../assets/images/no-cart-data.png" alt="">
          </div>
          <p>购物车为空~</p>
        </div>
      </div>
      <div class="i-cart-settlement">
        <p class="settlement-header">
          <span>共 <b>{{ carDataNumber }}</b> 件</span>
          <span class="price">￥{{ totalPrice }}</span>
        </p>
        <div class="settlement-btn" v-if="cartData.length > 0">
          结算 <Icon type="ios-arrow-forward"></Icon>
        </div>
        <div class="settlement-btn" style="background: #999" v-else>
          结算 <Icon type="ios-arrow-forward"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { miniCartControl } from './../utils/miniCart';

export default {
  props: {
    innerHeight: null,
  },
  computed: {
    ...mapState({
      cartData: state => state.cart.cartData,
      carDataNumber: state => state.cart.carDataNumber,
      totalPrice: state => state.cart.totalPrice,
    }),
  },
  methods: {
    ...mapActions([
      'addCartDefault',
      'reduceCart',
      'deleteCart',
    ]),
    // Mini版购物车的控制
    controlCart() {
      miniCartControl();
    },
  },
};
</script>

<style lang="less" scoped>
  @import './../assets/css/base';
  .i-global-toolbar {
    position: fixed;
    right: -280px;
    top: 0;
    width: 315px;
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
      width: 280px;
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
        .close {
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          display: block;
          position: absolute;
          right: 8px;
          top: 4px;
          cursor: pointer;
          &:hover {
            color: @main-color;
          }
        }
      }
      .i-cart-list-wrap {
        padding: 29px 0 85px 0;
        height: 100%;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        visibility: visible;
        overflow-y: auto;
        .i-cart-list-row {
          .i-cart-list-cell {
            &:last-child {
              margin-bottom: 0;
            }
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
                position: relative;
                padding: 5px 0;
                overflow: hidden;
                .i-img {
                  overflow: hidden;
                  float: left;
                  width: 50px;
                  height: 50px;
                  background: #f1f1f1;
                  img {
                    width: 100%;
                    vertical-align: middle;
                  }
                }
                .i-desc {
                  overflow: hidden;
                  width: 80px;
                  float: left;
                  margin-left: 5px;
                  p {
                    line-height: 25px;
                    .sigleEllipsis;
                  }
                }
                .i-number {
                  overflow: hidden;
                  width: 65px;
                  float: left;
                  line-height: 50px;
                  text-align: center;
                  .reduce, .add, .reduce-disabled {
                    visibility: hidden;
                    font-size: 20px;
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
                    text-align: center;
                    vertical-align: top;
                  }
                }
                .i-price {
                  overflow: hidden;
                  text-align: right;
                  width: 55px;
                  float: right;
                  line-height: 50px;
                }
                .i-delete {
                  position: absolute;
                  visibility: hidden;
                  right: 0;
                  top: -3px;
                  cursor: pointer;
                  font-size: 18px;
                  color: rgba(0,0,0,.3);
                  &:hover {
                    color: rgba(0,0,0,.8);
                  }
                }
                &:hover .i-number {
                  .reduce, .add, .reduce-disabled{
                    visibility: visible;
                  }
                }
                &:hover .i-delete {
                  visibility: visible;
                }
              }
            }
          }
        }
        // 购物车为空
        .no-cart-data {
          width: 100%;
          padding-top: 40px;
          text-align: center;
          .img {
            width: 100px;
            margin: 0 auto;
            img {
              width: 100%;
            }
          }
          p {
            font-size: 14px;
            margin-top: 10px;
            color: #777;
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
  .i-cart-list-wrap::-webkit-scrollbar {
    width: 5px;
  }
  .i-cart-list-wrap::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: #616161;
  }
  .i-cart-list-wrap::-webkit-scrollbar-track {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background-color: transparent;
  }
</style>
