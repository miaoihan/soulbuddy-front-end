/**
* 路由配置
*/
var routes = {
  '/': {
    component: require('./pages/home/Home.vue')
  },
  '/evaluation': {
    component: require('./pages/home/Evaluation.vue')
  },
  '/science': {
    component: require('./pages/home/Science.vue')
  },
  '/sciencedetail': {
    component: require('./pages/home/ScienceDetail.vue')
  },
  
}

export default routes