import { SET_CART } from './mutation-types';
import setClassCart from './../../utils/data/cart';

// 默认的购物车产品
const defaultCart = async ({ commit }) => {
  const cartData = await setClassCart();
  commit(SET_CART, cartData);
};

// 加入购物车 -- 操作
const cartDataFuc = (val, type) => {
  let cartData = [];
  const arrId = [];
  const value = val;
  if ((sessionStorage.getItem('cartData')) && JSON.parse(sessionStorage.getItem('cartData')).length > 0) {
    // 购物车原本就有商品
    cartData = JSON.parse(sessionStorage.getItem('cartData'));
    cartData.forEach((item, index) => {
      arrId.push(item.id);
      // 属于重复商品，追加数量即可
      if (item.id === value.id) {
        // cartData[index].number += 1;
        if (type === 'default') {
          cartData[index].number += 1;
        } else {
          cartData[index].number += val.number;
        }
      }
    });
    // -> 不是重复商品，直接追加
    if (arrId.indexOf(value.id) < 0) {
      if (type === 'default' || !val.number) {
        value.number = 1;
      } else {
        value.number = val.number;
      }
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
};

// 加入购物车 默认加1
const addCartDefault = async ({ commit }, val) => {
  cartDataFuc(val, 'default');
  const data = await setClassCart();
  commit(SET_CART, data);
};

// 加入购物车
const addCart = async ({ commit }, val) => {
  cartDataFuc(val);
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
  addCartDefault,
  addCart,
  reduceCart,
  deleteCart,
  defaultCart,
};
