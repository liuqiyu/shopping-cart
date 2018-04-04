<template>
  <div class="layout">
    <IHeader></IHeader>
    <router-view></router-view>
    <GlobalToolbar :innerHeight="innerHeight"></GlobalToolbar>
    <BackTop :right="50"></BackTop>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import IHeader from '../../components/iTopbar';
import GlobalToolbar from '../../components/global-toolbar';

export default {
  components: {
    IHeader,
    GlobalToolbar,
  },
  created() {
    this.getInnerWidth();
  },
  computed: {
    innerHeight() {
      return this.$store.state.common.innerHeight;
    },
  },
  methods: {
    ...mapActions([
      'getInnerWidth',
    ]),
  },
};
</script>

<style scoped>

</style>
