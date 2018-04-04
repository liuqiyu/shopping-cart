<template>
  <div class="overview">
    <IHeader></IHeader>
    <div class="banner">
      <Carousel autoplay v-model="value2" loop :height="height" :arrow="arrow">
        <CarouselItem>
          <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">4</div>
        </CarouselItem>
      </Carousel>
    </div>
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
  data() {
    return {
      value2: 0,
      height: 400,
      arrow: 'never',
    };
  },
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
