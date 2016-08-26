import Vue from 'vue'
import App from './App'
import Router from 'vue-router'


// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
  // '/': {
  //   component: NewsView
  // },
  
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})


// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')
