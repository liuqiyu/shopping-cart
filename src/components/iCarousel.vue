<template>
  <div class="banner">
    <iLoading :showLoading="showLoading" :height="height"></iLoading>
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
  </div>
</template>

<script>
import iLoading from './iLoading';

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
      default: 4000,
    },
  },
  data() {
    return {
      showLoading: true,
      timer: null,
    };
  },
  components: {
    iLoading,
  },
  created() {
    this.timer = setTimeout(() => {
      this.showLoading = false;
    }, 500);
  },
  destroyed() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="less" scoped>
  .banner {
    width: 100%;
    position: relative;
    .carousel-item {
      width: 100%;
      overflow: hidden;
      img {
        vertical-align: top;
      }
    }

  }
</style>
