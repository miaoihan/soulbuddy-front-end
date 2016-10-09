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
  '/me': {
    component: require('pages/me/MinePage.vue')
  },
  '/me/questions': {
    name:'myque',
    component: require('pages/me/MyQuestion.vue')
  },
  '/me/profile': {
    component: require('pages/me/Profile.vue')
  },
  '/me/favorite': {
    component: require('pages/me/favorite.vue')
  },
  '/me/balance': {
    component: require('pages/me/Balance.vue')
  },
  '/me/cash': {
    component: require('pages/me/Cash.vue')
  },
  '/me/cash/ali': {
    component: require('pages/me/CashAlipay.vue')
  },
  'me/personedit':{
    component:require('pages/me/PersonMsg.vue')
  },
  'me/apply':{
    component:require('pages/me/Apply.vue')
  },
  'me/applyjydr':{
    component:require('pages/me/ApplyJydr.vue')
  },
  'me/history':{
    component:require('pages/me/History.vue')
  },
  '/setting/profile': {
    name: 'setme',
    component: require('pages/me/Profile.vue')
  },
  '/consultants': {
    component: require('pages/consultant/Consultant.vue')
  },
  '/consultants': {
    component: require('pages/consultant/Consultant.vue')
  },
  '/user/:id': {
    name: 'user',
    component: require('pages/consultant/About.vue')
  },
  '/evaluation/:id': {
    name: 'eva',
    component: require('pages/home/SelfEva.vue')
  },
  '/question/:id': {
    name: 'question',
    component: require('pages/home/QuestionDetail.vue')
  },


  




  
  
}

export default routes