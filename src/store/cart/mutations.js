import { SET_CART } from './mutation-types';

const mutations = {
  [SET_CART](state, value) {
    if (value.length > 0) {
      state.cartData = value[0];
      state.carDataNumber = value[1];
      state.totalPrice = value[2];
    }
  },
};

export default mutations;
