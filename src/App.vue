<template>
<div id="app">
    <div v-if="token">
     <router-view :identityb.sync="identity" :bind.sync="bind"></router-view>
     <nav-bottom :identityb.sync="identity" v-if="bind"></nav-bottom>
    </div>
    <!-- <eva-result></eva-result> -->
  </div>
</template>

<script>
export default {
  components: {
    NavHeader:require('components/funComp/NavHeader.vue'),
    NavBottom:require('components/funComp/NavBottom.vue'),
    BindPhone:require('pages/BindPhone.vue'),
    EvaResult:require('pages/home/EvaResult.vue'),
  },
  data(){
    return{
      currentPage: 'eva-card',
      // is_login: false,
      // is_new: true,
      // weixin: [],
      bind: null,
      token: '', //做判断用，有了token才渲染
      identity: 0,
      // host: 'http://120.27.122.131',
      // host: 'http://han.s3.natapp.cc',
      host: 'http://m.soulbuddy.cn',
      // 测试开关
      // test:false,
      test:true,
      uid: 2
    }
  },
  watch:{

  },
  methods:{
  // 得到地址栏参数值
    getUrlParam(name){
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg);  //匹配目标参数
      if (r!=null) return unescape(r[2]); return null; //返回参数值
    } 
  },
  created(){
  	var code = this.getUrlParam('code');
    //storage存储全局数据
    var ku = window.localStorage
    ku.domain = 'http://xinling.songtaxihuan.com'
    this.token = ku.token
    global.token = ku.token
    global.domain = 'http://xinling.songtaxihuan.com'
      
      //测试环境
      if (this.test) {
        $.get(global.domain +'/test/test?uid='+this.uid,
        v => {ku.token = v.data; global.token = v.data;this.token = v.data} 
        ,'json');
      }
      
      // 微信登录部分
      //第二次页面没有code，全局user失效,可以调用
      else {
      $.ajax({
        url: localStorage.domain +'/register/reguser',
        type:'POST', dataType: 'json',async:'false',
        data:{ code:code },success: v => {
          if(v.msg=='获取code失败') return
          // console.log(v)
          // alert('ajax:'+code)
          // global.user = v.data.userinfo;
          // console.log(global.user+'*******')
          // alert(global.user)
          // 登陆后存储用户信息
          ku.token = v.data.token;
          // 判断是否绑定了手机
          let phone = v.data.userinfo.mobile
          // 如果没有绑定，跳转到绑定手机页面
          if(!phone) {
            // this.bind = false;
            // console.log(this.$router)
            // this.$router.go({path:url})
            location.href = this.host +'/#!/bind'
          }
          // 绑定过，直接登录
          else {
            this.bind = true;
            this.userinfo = v.data.userinfo;
            location.href = this.host +'/#!/home'
            // this.is_new = v.data.is_new;
          }
          
          // this.token = true
        },
            error: err => console.log(err.toString())
        });
      }
      // };
      //定义域名，跳转需要
    
      // 配置微信jssdk
      $.post( global.domain +'/thirdparty/wechat', 
          {'url': location.href.split('#')[0]},function (res) {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: res.data.appId, // 必填，公众号的唯一标识
                timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                signature: res.data.signature,// 必填，签名，见附录1
                jsApiList: ['chooseImage', 'previewImage', 'uploadImage',
                'startRecord',
                'stopRecord',
                'playVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
        }, 'json');

  },
  ready(){
      // console.log(this.$el+'**********')

    // $.ajax({
    //     url: localStorage.domain +'/user/get_my_info',
    //     type:'POST', dataType: 'json',
    //     data:{ token:localStorage.token },success: v => {
    //       global.user = v.data.userinfo
    //     },
    //         error: err => console.log(err.toString())
    //     });
    
      
    // alert(this.$route.path)
    // 微信配置

      
  }

}
</script>

<style lang="stylus">
@import 'assets/stylus.styl'
@import 'assets/init.css'
/*
* 公共样式部分
*
**/
.margin-right-10{
  margin-right:0.5rem
}
.fixed-bot{
  position fixed
  margin-bottom 2.5rem
}
.text-center{
  text-align: center //文字水平居中
}
.float-left{
  float:left
}
.float-right{
  float:right
}
.top-20{
  margin-top:1.0rem
  overflow hidden
}
.container-6{
  padding 6px 6px
}
.container-16{
  padding 16px 16px
}
.container-18{
  padding 18px 18px
}
.container-20{
  padding 20px 20px
}
.container-20-lr{
  padding 0px 20px  
}
.part{
  background:#fff;
  font-size: 15px;
  overflow hidden
}
.font-center{
  text-align: center;
}
// 外套
.wrapper{
  overflow hidden
  display relative
}
.btn{
}
.btn .btn-default{
  background-color: $ztc
  color: #fff
}
/*背景色加白色字体*/
.ztc{
  background-color: $ztc
  color: #fff
}
 // 两行文本溢出显示...
.over-2{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.over-3{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
//  标签
// label写的有点乱，后面再改
.label{
  display inline-block
  padding 0.05rem 0.4rem
  font-size: 0.6rem
  color #fff
  border-radius 0.25rem
  background $ztc;
}

.label-grey{
  display inline-block
  height 1.05rem 
  line-height: 1.05rem
  padding 0 0.3rem
  border-radius 0.25rem
  font-size: 0.65rem
  background-color: #f3f3f3
  color #999
}
.label-bg-grey{
  display inline-block
  height 0.8rem
  line-height: .8rem
  padding 1px 8px
  background: #F3F3F3;
  border-radius: 8px;
  font-size: 10px;
  color: #999999;
}
.label-big-border{
  display inline-block
  height 1.3rem
  line-height: 1.3rem
  padding 0 0.3rem
  border-radius 0.25rem
  border 1px solid #999
  font-size: 0.6rem
  color #999
}
  
// 白色边框标签
.label-border{
  border 1px solid #fff
  padding 0 0.2rem
}
// 灰色tip框
.tips{
  padding 0.9rem 0.8rem
  background-color: #f2f2f2
  color #999
}
// 横条框
.tbar
  height 2.5rem
  // line-height 2.5rem
  padding 0.75rem 1.0rem
  width 100%
  background-color: #FFF
  input
    width 100%
    // height 1.5rem
    border none
// 头像
.avator{
  display inline-block
  border-radius 50%
  // 部署的时候删除
  // border 1px solid #e7e7e7
}
// 底部固定条
.fixed-bom
  height 2.2rem
  line-height 2.2rem
  width 100%
  position fixed
  bottom 0
  background-color: $ztc
  text-align: center
  
//因为底部还有导航栏
.fixed-bottom
  height 2.2rem
  line-height 2.2rem
  width 100%
  margin-bottom 2.5rem
  // background-color: $ztc
  text-align: center

//tab导航
.nav-tab
  height 2.5rem
  line-height: 2.5rem
  font-size: 0.7rem
  color #999
  background-color: #FFF
  li
    float left
    display inline-block
    text-align center

.fixed{
  position: fixed
}

.far-bom{
  margin-bottom 4.0rem
}

.far-top{
  margin-top 2.2rem
}


</style>