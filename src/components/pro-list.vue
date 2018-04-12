<template>
    <div class="pro-list clearfix">
      <div class="pro-cell"
           v-for="(cell, key) in list"
           :key="key" @click="toDetails(cell)">
        <div class="img">
          <img v-lazy="cell.url" :alt="cell.name">
        </div>
        <div class="description">
          <p class="describe">{{cell.brandName}} {{cell.title}} {{cell.tags}}</p>
          <p class="price">￥{{cell.price}}</p>
        </div>
      </div>
    </div>
</template>

<script>


export default {
  props: {
    list: {
      type: Array,
    },
  },
  methods: {
    toDetails(item) {
      this.$router.push({
        path: '/details',
        query: {
          type: item.type,
          id: item.id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
  @import './../assets/css/base';
  .pro-cell {
    width: 228px;
    height: 290px;
    margin-right: 15px;
    margin-bottom: 15px;
    border: 1px solid #fff;
    padding: 5px;
    background: #fff;
    float: left;
    // 鼠标进过商品小图时的效果
    &:hover {
      border-color: @main-color;
      .img img {
        opacity: 0.8;
      }
    }
    .img {
      width: 100%;
      img {
        width: 100%;
        vertical-align: top;
      }
    }
    .description {
      .describe {
        font-size: 14px;
        height: 42px;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-top: 5px;
      }
      .price {
        text-align: center;
        font-size: 15px;
        color: @main-color;
        font-weight: bolder;
      }
    }
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
</style>
