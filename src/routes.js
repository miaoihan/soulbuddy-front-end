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
  '/home/ask': {
    component: require('./pages/home/Ask.vue')
  },
  '/home/selfeva': {
    component: require('./pages/home/SelfEva.vue')
  },
  '/home/serchlist': {
    component: require('./pages/home/SerchList.vue')
  },
  '/home/questiondetail': {
    component: require('./pages/home/QuestionDetail.vue')
  },
  '/me/profile': {
    component: require('./pages/me/Profile.vue')
  },
  
}

export default routes