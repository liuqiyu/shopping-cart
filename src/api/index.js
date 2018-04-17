/**
 * index
 * create by lqy 2018/1/31
 */

import axios from 'axios';

const instance = axios.create({
  baseURL: `${location.protocol}//${location.host}/api/`,
});

export default instance;
