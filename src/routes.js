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
  '/home': {
    component: require('./pages/home/Home.vue')
  },
  '/home/evaluation': {
    component: require('./pages/home/Evaluation.vue')
  },
  '/home/science': {
    component: require('./pages/home/Science.vue')
  },
  '/home/sciencedetail': {
    component: require('./pages/home/ScienceDetail.vue')
  },
  '/me/profile': {
    component: require('./pages/me/Profile.vue')
  },
  
}

export default routes