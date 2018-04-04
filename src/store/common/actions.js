import { INNERHEIGHT } from './mutation-types';

const getInnerWidth = ({ commit }) => {
  commit(INNERHEIGHT, window.innerHeight);
};

export default {
  getInnerWidth,
};
