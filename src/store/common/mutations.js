import { INNERHEIGHT, LOGIN_MODAL_STATUS, USER_INFO } from './mutation-types';

const mutations = {
  [INNERHEIGHT](state, value) {
    state.innerHeight = value;
  },
  [LOGIN_MODAL_STATUS](state, value) {
    state.loginModalStatus = value;
  },
  [USER_INFO](state, value) {
    state.userInfo = value;
  },
};

export default mutations;
