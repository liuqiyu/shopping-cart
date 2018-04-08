import { SET_CART } from './mutation-types';

// 默认的购物车产品
const defaultCart = ({ commit }) => {
  let cartData = [];
  let typeArr = [];
  let arr = {};
  if (sessionStorage.getItem('cartData')) {
    cartData = JSON.parse(sessionStorage.getItem('cartData'));
    typeArr = cartData.map((item) => item.type)
    typeArr = new Set(typeArr);
    typeArr.forEach((item) => {
      arr[item] = [];
      cartData.forEach((cell) => {
        if (cell.type === item) {
          arr[item].push(cell);
        }
      });
    })
    console.log(arr)
  }
  commit(SET_CART, cartData);
};

// 加入购物车
const addCart = ({ commit }, val) => {
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
        cartData[index].number += 1;
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
    cartData[0].number = 1;
    sessionStorage.setItem('cartData', JSON.stringify(cartData));
  }
  commit(SET_CART, cartData);
};

// 移除购物车
const deleteCart = ({ commit }, value) => {
  commit(SET_CART, value);
};

export default {
  addCart,
  deleteCart,
  defaultCart,
};
