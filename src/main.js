import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './routes.js'

// install router
Vue.use(Router)

// filter
Vue.filter('str2arr', function (value) {
	if(value)
		return value.split(';')
})

// equal to above
Vue.filter('str2arrLambal', (v)=>v&&v.split(';'))

// routing
var router = new Router()

router.map(routes)

router.beforeEach(function () {
  window.scrollTo(0, 0)
})


// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')
