/**
* 路由配置
*/
var routes = {
  // '/': {
  //   component: require('pages/home/Home.vue')
  // },
  '/bind': {
    component: require('pages/BindPhone.vue')
  },
  '/newbind': {
    component: require('pages/me/NewPhone.vue')
  },
  '/abuotus': {
    component: require('pages/AboutUs.vue')
  },
  '/connect': {
    component: require('pages/Connect.vue')
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
  '/home/search': {
    component: require('pages/home/Search.vue')
  },
  '/science': {
    component: require('pages/home/Science.vue')
  },
  '/relax': {
    component: require('pages/home/Relax.vue')
  },
  '/case': {
    component: require('pages/home/Case.vue')
  },
  '/reading': {
    component: require('pages/home/TypeRead.vue')
  },
  '/ask': {
    component: require('pages/home/Ask.vue')
  },
  '/askto': {
    component: require('pages/home/Askto.vue')
  },
  '/home/selfeva': {
    component: require('pages/home/SelfEva.vue')
  },
  '/home/serchlist': {
    component: require('pages/home/SerchList.vue')
  },
  '/home/evaluation': {
    component: require('pages/home/Evaluation.vue')
  },
  '/article/:art_id' : {
    name: 'article',
    component: require('pages/home/ArticleDetail.vue')
  },
  '/me': {
    component: require('pages/me/MinePage.vue')
  },
  '/me/profilephone': {
    component: require('pages/me/ProfilePhone.vue')
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
  '/me/cash/alib': {
    component: require('pages/me/BankCash.vue')
  },
  'me/personedit/:id':{
    name:'perapply',
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
  '/me/answer': {
    component: require('pages/consultant/MyAnswer.vue')
  },
  '/me/eva': {
    component: require('pages/me/MyEva.vue')
  },
  'me/install': {
    component: require('pages/me/Install.vue')
  },
  'me/feedback': {
    component: require('pages/me/FeedBack.vue')
  },
  '/me/price': {
    component: require('pages/me/Price.vue')
  },
  '/me/pricep': {
    component: require('pages/me/Pricep.vue')
  },
  '/message': {
    component: require('pages/me/Message.vue')
  },
  '/setting/profile': {
    name: 'setme',
    component: require('pages/me/Profile.vue')
  },
  '/consultants': {
    component: require('pages/consultant/Consultant.vue')
  },
  // 语音回答界面
  '/consultant/question/:qid': {
    name: 'answer',
    component: require('pages/consultant/QuestionCon.vue')
  },
  '/wenda': {
    component: require('pages/consultant/HomeQue.vue')
  },
  '/user/:id': {
    name: 'user',
    component: require('pages/consultant/About.vue')
  },
  '/user_daren/:id': {
    name: 'user_daren',
    component: require('pages/consultant/AboutJydr.vue')
  },
  '/evaluation/:id': {
    name: 'eva',
    component: require('pages/home/SelfEva.vue')
  },
  '/otherevaluation/:id': {
    name: 'othereva',
    component: require('pages/home/OtherEva.vue')
  },
  '/evaluation/result/:id': {
    name: 'evaResult',
    component: require('pages/home/EvaResult.vue')
  },
  '/question/:id': {
    name: 'question',
    component: require('pages/home/QuestionDetail.vue')
  },
  '/me/question/:id': {
    name: 'myquestion',
    component: require('pages/me/MyQueDetail.vue')
  },
  '/consultant/otherfile/:id': {
    name: 'otherfile',
    component: require('pages/consultant/OtherProfile.vue')
  },





  
}

export default routes