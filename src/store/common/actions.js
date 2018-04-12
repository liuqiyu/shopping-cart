import { INNERHEIGHT, USER_INFO } from './mutation-types';

const getInnerHeight = ({ commit }) => {
  commit(INNERHEIGHT, window.innerHeight);
};

// 登录
const logining = ({ commit }, value) => {
  sessionStorage.setItem('userInfo', JSON.stringify(value));
  commit(USER_INFO, value);
};

// 注销
const logouting = ({ commit }) => {
  sessionStorage.removeItem('userInfo');
  commit(USER_INFO, null);
};

// 默认登录状态
const defaultLoginStatus = ({ commit }) => {
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  commit(USER_INFO, userInfo);
};

export default {
  getInnerHeight,
  logining,
  logouting,
  defaultLoginStatus,
};
