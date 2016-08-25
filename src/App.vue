<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>
      Welcome to your Vue.js app!
    </p>
    <p>
      To get a better understanding of how this boilerplate works, check out
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
    </p>
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
    </p>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style lang="stylus">
  body {
    position: relative;
    margin: 0;
    background: #ebebeb;
  }

  html {
    font-size: 100px;
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

  .container {
    margin: 0 auto;
    max-width: 3rem;
  }

  .container-fluid {
    margin: 0 auto;
    width: 90%;
  }

  .btn-clear {
    padding: 0;
    border: none;
    background: none;
    color: #fff;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

</style>

