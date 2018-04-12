<template>
  <div class="layout">
    <IHeader></IHeader>
    <router-view></router-view>
    <GlobalToolbar :innerHeight="innerHeight"></GlobalToolbar>
    <BackTop :right="50"></BackTop>
    <loginModal></loginModal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import IHeader from '../../components/iTopbar';
import GlobalToolbar from '../../components/global-toolbar';
import loginModal from './loginModal';

export default {
  components: {
    IHeader,
    GlobalToolbar,
    loginModal,
  },
  created() {
    this.getInnerHeight();
    this.defaultCart();
    this.defaultLoginStatus();
  },
  computed: {
    innerHeight() {
      return this.$store.state.common.innerHeight;
    },
  },
  methods: {
    ...mapActions([
      'getInnerHeight',
      'defaultCart',
      'defaultLoginStatus',
    ]),
  },
};
</script>

<style scoped>

</style>
