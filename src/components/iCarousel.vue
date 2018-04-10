<template>
  <Carousel
    :autoplay="autoplay"
    :loop="loop"
    :height="height"
    :arrow="arrow"
    :autoplay-speed="speed">
    <CarouselItem v-for="(item, key) in bannerData" :key="key">
      <div class="carousel-item">
        <img :src="item.imageUrl" alt="" width="1920">
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
      default: 3000,
    },
  },
};
</script>

<style lang="less" scoped>
  .carousel-item {
    width: 100%;
    overflow: hidden;
    img {
      vertical-align: top;
    }
  }
</style>
