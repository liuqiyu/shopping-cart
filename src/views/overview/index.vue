<template>
  <div class="overview">
    <IHeader></IHeader>
    <div class="common-width">
      <ProPannel :title="item.title" v-for="(item, index) in dataList" :key="index"></ProPannel>
    </div>
  </div>
</template>

<script>
import IHeader from './../../components/iHeader';
import ProPannel from './../../components/pro-pannel';

export default {
  components: {
    IHeader,
    ProPannel,
  },
  data() {
    return {
      dataList: [
        {
          title: '美丽人生 口红',
        },
        {
          title: '女鞋',
        },
        {
          title: '女鞋',
        },
        {
          title: '女鞋',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>

</style>
