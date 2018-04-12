// 定义一个混入对象
const myMixin = {
  created() {
    document.body.classList.add('whiteBg');
  },
  destroyed() {
    document.body.classList.remove('whiteBg');
  },
};

export default myMixin;
