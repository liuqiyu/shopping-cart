import Vue from 'vue';
import Vuex from 'vuex';
import common from './common';
import prolist from './prolist';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    prolist,
  },
});
