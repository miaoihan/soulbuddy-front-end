/**
* 路由配置
*/
var routes = {
  '/foo': {
    component: require('./pages/BindPhone.vue')
  },
  '/': {
    component: require('./pages/home/Home.vue')
  },
  
}

export default routes