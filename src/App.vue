<template>
<div id="app">
    
  </div>
</template>

<script>
export default {
  components: {
    NavHeader:require('components/funComp/NavHeader.vue'),
    NavBottom:require('components/funComp/NavBottom.vue'),
    BindPhone:require('pages/BindPhone.vue'),
  },
  data(){
    return{
      currentPage: 'eva-card',
      // is_login: false,
      // is_new: true,
      bind: true,
      token: false, //做判断用，有了token才渲染
      weixin: [],
      identity: 0,
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
     //定义全局数据
    global.domain = 'http://xinling.songtaxihuan.com'
    //获取当前URL
    let url = document.URL
    // 1.获取code
    var code = this.getUrlParam('code');
    // alert(code)
    if(!code) {
      // alert('请在微信客户端打开应用');
      // document.body.innerHTML = '请在微信客户端打开此应用';
      return;
    }
    // 本地测试用token
    // $.ajax({
    //       url: global.domain +'/test/test?uid=3',
    //       type:'get', 
    //       dataType: 'json',
    //       // async: false,
    //       success: data => {global.token = data.data},
    //       error: err => console.error(err)
    //     });

    // 微信登录部分
    $.ajax({
      url: global.domain +'/register/reguser',
      type:'POST', dataType: 'json',
      data:{ code:code },success: v => {
        // console.log(v)
        global.user = v.data.userinfo;
        console.log(global.user)
        // 判断是否绑定了手机
        let phone = v.data.userinfo.mobile;
        // 如果没有绑定，跳转到绑定手机页面
        if(null == phone) {
          this.bind = false;
          // console.log(this.$router)
          // this.$router.go({path:'/bind'})
        }
        // 绑定过，直接登录
        else {
          this.bind = true;
          this.userinfo = v.data.userinfo;
          this.$router.go({path:'/home'})
          // this.is_new = v.data.is_new;
        }
        // 登陆后存储用户信息
        global.token = v.data.token;
        this.token = true
      },
          error: err => console.log(err.toString())
      });

      //获取微信js凭证
      // $.ajax({
      //     url: global.domain +'/thirdparty/wechat',
      //     type:'post', 
      //     dataType: 'json',
      //     async: false,
      //     data:{
      //       url: encodeURIComponent(location.href.split('#')[0])
      //       // 'url': location.href
      //     },
      //     success: data => {this.weixin = data.data;console.log(data)},
      //     error: err => console.error(err)
      //   });

  },
  ready(){
    // // 微信配置
    //   console.log('wx: '+this.weixin)
    //   wx.config({
    //     debug: true,
    //     appId: this.weixin.appId,
    //     timestamp: this.weixin.timestamp,
    //     nonceStr: this.weixin.nonceStr,
    //     signature: this.weixin.signature,
    //     jsApiList: [
    //       'chooseImage',
    //     ]
    //   });
    //   wx.ready(function(){
    //       // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    //       alert('成功')

    //       // 4 音频接口
    //       // 4.2 开始录音
    //       document.querySelector('#avator').onclick = function () {
    //         wx.chooseImage({
    //           count: 1, // 默认9
    //           sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //           sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //           success: function (res) {
    //               var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    //               this.avator = localIds
    //           }
    //       });
    //       };
    //   });
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
.margin-right-30{
  margin-right:1.5rem
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
.fixed-bottom
  height 2.2rem
  line-height 2.2rem
  width 100%
  position fixed
  bottom 0
  background-color: $ztc
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