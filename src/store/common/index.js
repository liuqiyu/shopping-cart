import mutations from './mutations';
import actions from './actions';

const state = {
  // 可见窗口高度
  innerHeight: '',
  // 登录弹窗状态
  loginModalStatus: false,
  // 用户信息
  userInfo: null,
};

export default {
  state,
  mutations,
  actions,
};
