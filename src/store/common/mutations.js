import { INNERHEIGHT } from './mutation-types';

const mutations = {
  [INNERHEIGHT](state, value) {
    state.innerHeight = value;
  },
};

export default mutations;
