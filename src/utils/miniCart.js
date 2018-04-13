import { hasClass } from './utils';

// 控制minicart的开启关闭状态
export const miniCartControl = (status) => {
  setTimeout(() => {
    const toolbar = document.querySelector('.i-global-toolbar');
    /**
     * status
     * -> undefined 根据已有状态去判断操作
     * -> 'open' 打开
     * -> 'close' 关闭
     */
    if (status === undefined) {
      if (hasClass(toolbar, 'open')) {
        toolbar.classList.remove('open');
      } else {
        toolbar.classList.add('open');
      }
    } else if (status === 'close') {
      toolbar.classList.remove('open');
    } else if (status === 'open') {
      toolbar.classList.add('open');
    }
  })
};
