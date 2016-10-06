/**
* 路由配置
*/
var routes = {
  '/foo': {
    component: require('pages/BindPhone.vue')
  },
  '/': {
    component: require('pages/home/Home.vue')
  },
  'search/get_search_list': {
    component: require('pages/home/SerchList.vue')
  },
  '/home': {
    component: require('pages/home/Home.vue')
  },
  '/home/evaluation': {
    component: require('pages/home/Evaluation.vue')
  },
  '/home/science': {
    component: require('pages/home/Science.vue')
  },
  '/ask': {
    component: require('pages/home/Ask.vue')
  },
  '/home/selfeva': {
    component: require('pages/home/SelfEva.vue')
  },
  '/home/serchlist': {
    component: require('pages/home/SerchList.vue')
  },
  '/home/questiondetail': {
    component: require('pages/home/QuestionDetail.vue')
  },
  '/article/:art_id' : {
    name: 'article',
    component: require('pages/home/ArticleDetail.vue')
  },
  '/user': {
    component: require('pages/me/MinePage.vue')
  },
  '/me/profile': {
    component: require('pages/me/Profile.vue')
  },
  '/consultants': {
    component: require('pages/consultant/Consultant.vue')
  },

  
  
}

export default routes