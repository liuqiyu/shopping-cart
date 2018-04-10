<template>
  <Carousel
    :autoplay="autoplay"
    v-model="bannerValue"
    :loop="loop"
    :height="height"
    :arrow="arrow"
    :autoplay-speed="speed">
    <CarouselItem v-for="(item, key) in bannerData" :key="key">
      <div class="carousel-item">
        <img :src="item.imageUrl" alt="">
      </div>
    </CarouselItem>
  </Carousel>
</template>

<script>
export default {
  props: {
    bannerData: {
      type: Array,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    bannerValue: 0,
    loop: {
      type: Boolean,
      default: false,
    },
    height: 0,
    arrow: {
      type: String,
      default: 'never',
    },
    speed: {
      type: Number,
      default: 2000,
    },
  },
};
</script>

<style lang="less" scoped>
  .carousel-item {
    width: 100%;
    img {
      vertical-align: top;
    }
  }
</style>
