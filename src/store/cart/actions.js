import { SET_CART } from './mutation-types';
import setClassCart from './../../utils/data/cart';

// 默认的购物车产品
const defaultCart = async ({ commit }) => {
  const cartData = await setClassCart();
  commit(SET_CART, cartData);
};

// 加入购物车
const addCart = async ({ commit }, val) => {
  let cartData = [];
  const arrId = [];
  const value = val;
  if (sessionStorage.getItem('cartData')) {
    // 购物车原本就有商品
    cartData = JSON.parse(sessionStorage.getItem('cartData'));
    cartData.forEach((item, index) => {
      arrId.push(item.id);
      // 属于重复商品，追加数量即可
      if (item.id === value.id) {
        cartData[index].number += value.number;
      }
    });
    // -> 不是重复商品，直接追加
    if (arrId.indexOf(value.id) < 0) {
      value.number = 1;
      cartData.push(value);
    }
    sessionStorage.setItem('cartData', JSON.stringify(cartData));
  } else {
    // 购物车原本无商品
    cartData = [value];
    if (value.number) {
      cartData[0].number = value.number;
    } else {
      cartData[0].number = 1;
    }
    sessionStorage.setItem('cartData', JSON.stringify(cartData));
  }
  const data = await setClassCart();
  commit(SET_CART, data);
};

// 减少购物车
const reduceCart = async ({ commit }, value) => {
  const cartData = JSON.parse(sessionStorage.getItem('cartData'));
  cartData.forEach((item, index) => {
    // 商品id相同，直接减少数量
    if (item.id === value.id) {
      cartData[index].number -= 1;
    }
  });
  sessionStorage.setItem('cartData', JSON.stringify(cartData));
  const data = await setClassCart();
  commit(SET_CART, data);
};

// 移除购物车
const deleteCart = async ({ commit }, value) => {
  const arr = [];
  const cartData = JSON.parse(sessionStorage.getItem('cartData'));
  cartData.forEach((item) => {
    // 商品id相同，直接减少数量
    if (item.id !== value.id) {
      arr.push(item);
    }
  });
  sessionStorage.setItem('cartData', JSON.stringify(arr));
  const data = await setClassCart();
  commit(SET_CART, data);
};

export default {
  addCart,
  reduceCart,
  deleteCart,
  defaultCart,
};
