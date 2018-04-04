// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import VueLazyload from 'vue-lazyload';
import App from './App';
import router from './router';
import store from './store';
import './my-theme/index.less';
import './assets/font/iconfont.css';

Vue.use(iView);
Vue.use(VueLazyload);

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/carslan.jpg',
  // loading: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/carslan.jpg',
  attempt: 1,
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
