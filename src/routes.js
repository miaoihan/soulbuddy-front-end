/**
* 路由配置
*/
var routes = {
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