<template>
  <div class="i-top-bar">
    <div class="common-width clearfix">
      <div class="left">
        <span>嗨，欢迎来百丽购</span>
        <span v-if="!userInfo" class="please-login" @click="openModal">请登录</span>
        <span v-else>
          <span class="username">&nbsp;&nbsp;{{userInfo.user}}</span>
          <span class="logout" @click="logout">退出</span>
        </span>
        <span class="logoutLoading" v-if="logoutLoading">
          <Icon type="load-c" size=16 class="demo-spin-icon-load"></Icon>
        </span>
      </div>
      <div class="right">
        <ul class="clearfix">
          <li class="top-li">
            <div class="cart">
              <Icon type="ios-cart" class="icon"></Icon>
              购物车&nbsp;
              <span class="no-cart" v-if="carDataNumber === 0">{{ carDataNumber }}</span>
              <span class="has-cart" v-else>{{ carDataNumber }}</span>
              &nbsp;件
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      logoutLoading: false,
    };
  },
  computed: {
    ...mapState({
      carDataNumber: state => state.cart.carDataNumber,
      userInfo: state => state.common.userInfo,
    }),
  },
  methods: {
    ...mapMutations([
      'LOGIN_MODAL_STATUS',
    ]),
    ...mapActions([
      'logouting',
    ]),
    openModal() {
      this.LOGIN_MODAL_STATUS(true);
    },
    logout() {
      this.logoutLoading = true;
      setTimeout(() => {
        this.logoutLoading = false;
        this.logouting();
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
  @import './../assets/css/base';
  .i-top-bar {
    background: #f2f2f2;
    height: 40px;
    border-bottom: @border-e;
    .common-width {
      font-size: 13px;
      height: 40px;
      line-height: 40px;
      color: #888;
      .left {
        float: left;
        span.please-login {
          margin-left: 20px;
          cursor: pointer;
          &:hover {
            color: @main-color;
            text-decoration: underline;
          }
        }
        .username {
          margin: 0 5px;
          color: @main-color;
          cursor: pointer;
        }
        .logout {
          margin-left: 20px;
          font-size: 12px;
          cursor: pointer;
          &:hover {
            color: @main-color;
            text-decoration: underline;
          }
        }
        .logoutLoading {
          margin-left: 10px;
          line-height: 40px;
          .demo-spin-icon-load{
            color: @main-color;
            animation: ani-demo-spin 1s linear infinite;
          }
        }
      }
      .right {
        float: right;
        .top-li {
          float: left;
          cursor: pointer;
          .cart{
            .icon {
              font-size: 16px;
              margin-right: 5px;
              color: @main-color;
            }
            .no-cart {
              color: #333;
            }
            .has-cart {
              color: red;
              font-weight: bolder;
            }
          }
          &:hover {
            color: @main-color;
            .no-cart {
              color: @main-color;
            }
          }
        }
      }
    }
  }

  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
</style>
