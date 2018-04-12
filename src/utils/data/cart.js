/**
 *  返回商品数据
 *  如果`cartData`为空，则直接返回空数组
 *  反之返回商品列表、商品数量、总金额
 *
 * @returns {*}
 */

const setClassCart = () => {
  let cartData = [];
  let typeArr = [];
  let carDataNumber = 0;
  let totalPrice = 0;
  const arr = [];
  if (sessionStorage.getItem('cartData')) {
    cartData = JSON.parse(sessionStorage.getItem('cartData'));
    typeArr = cartData.map(item => item.type);
    typeArr = new Set(typeArr);
    typeArr = [...typeArr];
    typeArr.forEach((item, index) => {
      let rowPrice = 0;
      arr[index] = {
        type: item,
        rowPrice: 0,
      };
      arr[index].data = [];
      cartData.forEach((cell) => {
        if (cell.type === item) {
          // 单个商品金额
          cell.cellPrice = cell.price * cell.number;
          arr[index].data.push(cell);
          // 分类金额
          rowPrice += cell.cellPrice;
        }
      });
      arr[index].rowPrice = rowPrice;
      // 总金额
      totalPrice += arr[index].rowPrice;
    });
    // 总数
    cartData.forEach((item) => {
      carDataNumber += item.number;
    });
    return [arr, carDataNumber, totalPrice];
  } else {
    return [];
  }
};

export default setClassCart;
