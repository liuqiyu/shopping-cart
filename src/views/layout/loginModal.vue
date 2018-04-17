<template>
  <Modal v-model="loginModalStatus" width="360"
         :mask-closable="false" @on-cancel="closeModal" :closable="false">
    <div slot="header" class="l-header">
      <span class="title">Belle Go</span>
      <span class="l-close" @click="closeModal"><Icon type="ios-close-outline"></Icon></span>
    </div>
    <div class="l-body">
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <i-input type="text"
                   size="large"
                   v-model="formInline.user"
                   placeholder="Username">
            <Icon type="ios-person-outline" size="20" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem prop="password">
          <i-input type="password"
                   size="large"
                   v-model="formInline.password"
                   placeholder="Password">
            <Icon type="ios-locked-outline" size="20" slot="prepend"></Icon>
          </i-input>
        </FormItem>
      </Form>
    </div>
    <div slot="footer" class="l-footer">
      <Button class="submit"
              type="error" size="large"
              long :loading="modal_loading" @click="login('formInline')">登录</Button>
    </div>
  </Modal>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import oauth from './../../api/oauth';

export default {
  data() {
    return {
      modal_loading: false,
      formInline: {
        user: '学同刘',
        password: '123321',
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名！', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
        ],
      },
    };
  },
  computed: {
    ...mapState({
      loginModalStatus: state => state.common.loginModalStatus,
    }),
  },
  methods: {
    ...mapMutations([
      'LOGIN_MODAL_STATUS',
    ]),
    ...mapActions([
      'logining',
    ]),
    login(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.modal_loading = true;
          // setTimeout(() => {
          //   this.modal_loading = false;
          //   this.logining(this.formInline);
          //   this.LOGIN_MODAL_STATUS(false);
          //   this.$Message.success('登陆成功');
          // }, 2000);
          location.href = 'https://github.com/login/oauth/authorize?client_id=31dd281011969c0b33fc&scope=liuqiyu:1064839051@qq.com';
          // oauth.authorize('31dd281011969c0b33fc', 'liuqiyu:1064839051@qq.com').then((res) => {
          //   console.log(res);
          // });
          // axios.get('https://github.com/login/oauth/authorize?client_id=31dd281011969c0b33fc&scope=liuqiyu:1064839051@qq.com')
          //   .then((response) => {
          //     console.log(response);
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   })
        }
      });
    },
    closeModal() {
      this.LOGIN_MODAL_STATUS(false);
    },
  },
};
</script>

<style lang="less" scoped>
  @import './../../assets/css/base';
  .l-header {
    .title {
      font-family: item;
      font-weight: bolder;
      font-size: 34px;
      color: @main-color;
    }
    .l-close {
      position: absolute;
      top: 8px;
      right: 10px;
      font-size: 25px;
      cursor: pointer;
      &:hover {
        color: @main-color;
      }
    }
  }
  .l-body {
    padding-top: 20px;
  }
  .l-footer {
    .submit {
      background: @main-color;
      letter-spacing: 4px;
      font-size: 16px;
    }
  }
</style>
