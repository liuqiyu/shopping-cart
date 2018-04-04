import { SET_CART } from './mutation-types';

const mutations = {
  [SET_CART](state, value) {
    let carDataNumber = 0;
    if (value.length > 0) {
      value.forEach((item) => {
        console.log(item.number);
        carDataNumber = carDataNumber + item.number;
      });
      state.cartData = value;
      state.carDataNumber = carDataNumber;
    }
  },
};

export default mutations;
