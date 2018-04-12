<p align="center">
  <img src="https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/blog/logo.png"/>
</p>


## 前言

`Belle go`是一个电商网站【声明：部分功能仿照天猫】。前端采用vue为基础搭建的框架。对于vue初学者来说，这是一个不错的学习实例。本项目使用了`vue`全家桶（`vue + vue-router + vuex`）,如何使用路由，如何管理状态。本项目都会涉及。当我们了解了`Vue`以及周边的插件。便需要去考虑优化的东西了。记得第一次使用vue打包出一个巨大的怪物老板大发雷霆的模样。。。之后就使用路由懒加载，按需引入对应的`js`，避免文件过大导致页面加载过慢。
学习vuex是一个艰难的过程，因为之前为接触过`redux`,`flux`等状态管理工具。所以对`vuex`陌生又恐惧。之后慢慢的在项目中使用才喜欢上了`vuex`，原来`vuex`如此的强大。不仅这些，初次使用脚手架便在`eslint`上摔了跟头，每一行代码都报错，会不会让程序员回忆人生呢？
答案是肯定的。于是我把`eslint`给关了（小朋友前往不要学习，保持`es6`的规范是一个很好的习惯哦）。。。为了避免重复的造轮子，我们会选择一款前端UI框架。组件按需加载也是一个知识点。

### 功能实现

* 首页
* mini购物车
  * 加入购物车
  * 删除商品
  
## 技术栈

`vue2` `vue-router` `vuex` `es6` `webpack` `iview` `less`

## 规范

* ESLint Airbnb ES6 base

## 文件结构

shopping-cart

```
├── build
├── config
├── dist         打包后文件
├── src          
    ├── assets   样式/字体/图片
        ├── css
             ├── base.less    基本样式
        ├── font
             ├── iconfont.css ...   阿里字体图标
        ├── images
    ├── components    组件
    ├── my-theme      定制主题
    ├── router        路由
    ├── store         vuex
    ├── utils         公有的工具
    ├── views
        ├── layout    布局
        ├── overview  首页
    ├── App.vue
    ├── main.js
├── static
    ├── images

```

## 浏览

* 效果 [录制工具-- ScreenToGif]

<img src="https://github.com/liuqiyu/shopping-cart/blob/master/blog/show-1.gif" width="965"/>

* 地址

[预览](https://liuqiyu.github.io/shopping-cart/dist/#/)

## 安装使用

```
git clone https://github.com/liuqiyu/shopping-cart.git

cd shopping-cart

npm install

npm run dev
```

## License

[MIT](https://github.com/liuqiyu/shopping-cart/blob/master/LICENSE)

