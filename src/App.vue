<template>
  <!-- <router-view></router-view> -->
  <component :is="currentPage"></component>
</template>

<script>
// import routes from 'src/routes.js'
export default {
  data(){
    return{
      currentPage: 'mine-page',
    }
  },
  components: {
    Login: require('pages/Login'),
    BindPhone: require('pages/BindPhone'),
    Home: require('pages/home/Home'),
    Evaluation: require('pages/home/Evaluation'),
    SelfEva: require('pages/home/SelfEva'),
    Science: require('pages/home/Science'),
    ScienceDetail: require('pages/home/ScienceDetail'),
    SerchList: require('pages/home/SerchList'),
    Ask: require('pages/home/Ask'),
    QuestionDetail: require('pages/home/QuestionDetail'),
    QuestionCon: require('pages/consultant/QuestionCon'),
    Consultant: require('pages/consultant/Consultant'),
    History: require('pages/me/History'),
    HomeQue: require('pages/HomeQue'),
    PersonMsg: require('pages/me/PersonMsg'),
    MinePage: require('pages/me/MinePage'),
    QuestionCon: require('pages/consultant/QuestionCon'),
    Kol: require('pages/consultant/Kol'),
    About: require('pages/consultant/About'),
    Favorite: require('pages/me/Favorite'),
    Apply: require('pages/me/Apply'),
    ApplyJydr:require('pages/me/ApplyJydr'),
    Profile:require('pages/me/Profile')
  },

}
</script>

<style lang="stylus">
@import 'assets/stylus.styl'
/*
* 公共样式部分
*
**/
.text-center{
  text-align: center //文字水平居中
}
.float-left{
  float:left
}
.float-right{
  float:right
}
.top-20{
  margin-top:1.0rem
  overflow hidden
}
.container-6{
  padding 6px 6px
}
.container-16{
  padding 16px 16px
}
.container-18{
  padding 18px 18px
}
.container-20{
  padding 20px 20px
}
.part{
  background:#fff;
  font-size: 15px;
  overflow hidden
}
.font-center{
  text-align: center;
}
// 外套
.wrapper{
  overflow hidden
  display relative
}
.btn{
}
.btn .btn-default{
  background-color: $ztc
  color: #fff
}
/*背景色加白色字体*/
.ztc{
  background-color: $ztc
  color: #fff
}
 // 两行文本溢出显示...
.over-2{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.over-3{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
//  标签
.label{
  display inline-block
  padding 0.12rem 0.4rem
  font-size: 0.6rem
  color #fff
  border-radius 0.25rem
  background $ztc;
}
.label-grey{
  display inline-block
  height 1.05rem 
  line-height: 1.05rem
  padding 0 0.3rem
  border-radius 0.25rem
  font-size: 0.6rem
  background-color #f3f3f3
  color #999
}
  
// 白色边框标签
.label-border{
  border 1px solid #fff
  padding 0 0.2rem
}
// 灰色tip框
.tips{
  padding 0.9rem 0.8rem
  background-color: #f2f2f2
  color #999
}
// 横条框
.tbar
  height 2.5rem
  // line-height 2.5rem
  padding 0.75rem 1.0rem
  width 100%
  background-color: #FFF
  input
    width 100%
    // height 1.5rem
    border none
// 头像
.avator{
  display inline-block
  border-radius 50%
  // 部署的时候删除
  border 1px solid #e7e7e7
}
// 底部固定条
.fixed-bottom
  height 2.2rem
  line-height 2.2rem
  width 100%
  position fixed
  bottom 0
  background-color: $ztc
  text-align: center
  
//tab导航
.nav-tab
  height 2.5rem
  line-height: 2.5rem
  font-size: 0.7rem
  color #999
  background-color: #FFF
  li
    float left
    display inline-block
    text-align center

/*****************
*                 *
*   初始化浏览器     *
*                 *
******************/
  body {
    position: relative;
    margin: 0;
    background: $bg;
    font-size: 0.75rem
  }
  html {
    font-size: 20px;
  }
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: none;
    font-family: "Helvetica Neue", Arial, verdana, sans-serif;
  }
  a {
    display: inline-block;
  }
  /*
  KISSY CSS Reset
  理念：1. reset 的目的不是清除浏览器的默认样式，这仅是部分工作。清除和重置是紧密不可分的。
  2. reset 的目的不是让默认样式在所有浏览器下一致，而是减少默认样式有可能带来的问题。
  3. reset 期望提供一套普适通用的基础样式。但没有银弹，推荐根据具体需求，裁剪和修改后再使用。
  特色：1. 适应中文；2. 基于最新主流浏览器。
   */
  /** 清除内外边距 **/
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
  dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
  pre, /* text formatting elements 文本格式元素 */
  form, fieldset, legend, button, input, textarea, /* form elements 表单元素 */
  th, td /* table elements 表格元素 */
  {
    margin: 0;
    padding: 0;
  }
  // 取消聚焦和textarea放大
  input,button,select,textarea{
  outline:none
  }textarea{resize:none}
  /** 设置默认字体 **/
  body,
  button, input, select, textarea /* for ie */
  {
    font: 12px / 1.5 tahoma, arial, \5b8b\4f53, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
  }
  address, cite, dfn, em, var {
    font-style: normal;
  }
  /* 将斜体扶正 */
  code, kbd, pre, samp {
    font-family: courier new, courier, monospace;
  }
  /* 统一等宽字体 */
  small {
    font-size: 12px;
  }
  /* 小于 12px 的中文很难阅读，让 small 正常化 */
  /** 重置列表元素 **/
  ul, ol {
    list-style: none;
  }
  /** 重置文本格式元素 **/
  a {
    text-decoration: none;
    /** 去除阴影*/
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    &:hover, &:active {
      text-decoration: none;
    }
  }
  /** 重置表单元素 **/
  legend {
    color: #000;
  }
  /* for ie6 */
  fieldset, img {
    border: 0;
  }
  /* img 搭车：让链接里的 img 无边框 */
  button, input, select, textarea {
    font-size: 100%;
  }
  /* 使得表单元素在 ie 下能继承字体大小 */
  /* 注：optgroup 无法扶正 */
  /** 重置表格元素 **/
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
</style>