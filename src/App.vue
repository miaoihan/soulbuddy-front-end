<template>
  <component :is="currentPage"></component> 
  <!-- <mine-page :is="currentPage"></mine-page> -->
  <!--<radius-btn :is="currentPage"></radius-btn>-->
  <!--<top-bar :is="currentPage"></top-bar>-->
  <!--<person-msg :is="currentPage"></person-msg>-->
  <!-- <soul-mate :is="currentPage"></soul-mate> -->
  <!--<question-con :is="currentPage"></question-con>-->
  <!-- <roll-card :data="rolldata"></roll-card> -->
  <!--<home :is="currentPage"></home>-->
  <!--<evaluation :is="currentPage"></evaluation>-->
  <!--<mine-page :is="currentPage"></mine-page>-->
  <!--<self-eva :is="currentPage"></self-eva>-->
  <!--<science :data="data" :is="currentPage"></science>-->
  <!--<evaluation :is="currentPage"></evaluation>-->
  <!--<mine-page :is="currentPage"></mine-page>-->

</template>

<script>
import Login from './pages/Login'
import BindPhone from './pages/BindPhone'
import Home from './pages/home/Home'
import Evaluation from './pages/home/Evaluation'
import MinePage from './pages/me/MinePage.vue'
import SelfEva from './pages/home/SelfEva'
import Science from './pages/home/Science'
import PersonMsg from './pages/PersonMsg'
import HomeQue from './pages/HomeQue'
import QuestionCon from './pages/QuestionCon'
import History from './pages/me/History'
export default {
  data(){
    return{
      currentPage: 'history',
      rolldata:[{contitle:"标题1",imgurl:'',href:null},
               {contitle:"标题2",imgurl:'',href:null},
               {contitle:"标题3",imgurl:'',href:null}]    
    }
  },
  components: {
    Login,Home,Evaluation,BindPhone,SelfEva,Science,
    MinePage,PersonMsg,HomeQue,QuestionCon,History
  },
}
</script>

<style lang="stylus">
@import './assets/stylus.styl'

/*
* 公共样式部分
*
**/

.container{
  margin 0 auto
  width 98%
}
.part{
  background:#fff;
  font-size: 15px;
  overflow hidden
}
.font-center{
  text-align: center;
}

.wrapper{
  overflow hidden
}

.btn{

}

.btn .btn-default{
  background-color: $ztc
  color: #fff
}

.ztc{
  background-color: $ztc
}

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

.label{
  display inline-block
  padding 0.12rem 0.4rem
  font-size: 0.6rem
  color #fff
  border-radius 0.25rem
  background $ztc;
}

//浏览器初始化
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

