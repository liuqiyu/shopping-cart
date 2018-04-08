/**
 *  判断dom元素是否包含某个类
 *
 * @param element
 * @param cls
 * @returns {boolean}
 */
const hasClass = (element, cls) => {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1
}

// 百分比转化为小数
const toPoint = percent => {
  let str = percent.replace("%", "")
  str = str/100
  return str.toFixed(2)
}

const GetDateStr = (AddDayCount, time) => {
  let dd
  if (time) {
    dd = new Date(time);
  } else {
    dd = new Date();
  }
  dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
  let y = dd.getFullYear();
  let m = dd.getMonth()+1;//获取当前月份的日期
  let d = dd.getDate();
  return y+"-"+m+"-"+d;
}

/**
 * 日期
 * @param n
 * @returns {number}
 */
const getNDayAgoTimeStamp = (n) => {
  const timeStamp = new Date(new Date().setHours(0, 0, 0, 0));
  // 一天是86400秒   故n天前的时间戳为
  const dayAgo = timeStamp - 86400 * n;
  return dayAgo;
}

/**
 * 判断ua
 */

const browserType = () => {
  const sUserAgent = navigator.userAgent.toLowerCase();
  const bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  const bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  const bIsMidp = sUserAgent.match(/midp/i) == "midp";
  const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  const bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  const bIsAndroid = sUserAgent.match(/android/i) == "android";
  const bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  const bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return 'app'
  } else {
    return 'pc'
  }
}


/**
 * 进入详情页面body hidden 不滚动
 * @type {number}
 */
const bodyHeight = document.documentElement.clientHeight
const body = document.querySelector('body')

const addHidden = () => {
  setTimeout(() => {
    body.classList.add('hidden')
    body.style.height = bodyHeight + 'px'
  })
}
const removeHidden = () => {
  setTimeout(() => {
    body.classList.remove('hidden')
    body.style.height = 'auto'
  })
}

export {
  hasClass,
  toPoint,
  GetDateStr,
  getNDayAgoTimeStamp,
  browserType,
  addHidden,
  removeHidden
}
