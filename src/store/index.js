import Vue from 'vue';
import Vuex from 'vuex';
import common from './common';
import prolist from './prolist';
import cart from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    prolist,
    cart,
  },
});
