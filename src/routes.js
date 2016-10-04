/**
* 路由配置
*/
var routes = {
  '/foo': {
    component: require('pages/BindPhone.vue')
  },
  // '/': {
  //   component: require('pages/Login.vue')
  // },
  '/': {
    component: require('./pages/home/Home.vue')
  },
  'search/get_search_list': {
    component: require('pages/home/SerchList.vue')
  },
  
}

export default routes