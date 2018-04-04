<template>
  <div class="overview">
    <IHeader></IHeader>
    <div class="common-width">
      <ProPannel :data="lipstickData"></ProPannel>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import IHeader from './../../components/iHeader';
import ProPannel from './../../components/pro-pannel';

export default {
  components: {
    IHeader,
    ProPannel,
  },
  computed: {
    ...mapState({
      lipstickData: state => state.prolist.lipstickData,
    }),
  },
};
</script>

<style lang="less" scoped>

</style>
