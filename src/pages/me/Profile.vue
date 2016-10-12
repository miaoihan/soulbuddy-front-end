<template>
<nav-header title="编辑个人资料" left="back"></nav-header>
<div class="far-bom">
<form action="http://xinling.songtaxihuan.com/user/edit_info" method="post">
  <div class="top wrapper">
    <div class="person-photo-pro wrapper" id="avator">
      <img :src="avator" alt="" class="avator">
    </div>
    <div class="nik-body wrapper">
      <div class="nikname wrapper">
      <input id="user-name" name="user_name" class="nikname-val" style="width:5.0rem" :value="myinfo.user_name">
        <!-- {{myinfo.user_name}} -->
      </div>
      <div class="border">   
      </div>
      <div class="nikname-make wrapper">
        <span style="color:#999999" @click="handleclick">修改昵称</span>
      </div>
    </div>
  </div>
  <div class="profile-list wrapper">
    <change-btn btntext="绑定手机" url="/me/profilephone" title-color="black" :placeholder="mobile" class="change-btn-pro"></change-btn>
    <select-btn class="change-btn-pro" name="borth_date" :values="age" title="年龄" ></select-btn>
    <select-btn class="change-btn-pro" name="sex" :values="sex" title="性别" ></select-btn>
    <select-btn class="change-btn-pro" name="education" :values="qualifications" title="学历" ></select-btn>
    <select-btn class="change-btn-pro" name="marital_status" :values="marriage" title="婚姻状况" ></select-btn>
    <!-- <change-btn btntext="年龄" title-color="black" placeholder="请选择" class="change-btn-pro"></change-btn>
    <change-btn btntext="性别" title-color="black" placeholder="请选择" class="change-btn-pro"></change-btn>
    <change-btn btntext="学历" title-color="black" placeholder="请选择" class="change-btn-pro"></change-btn>
    <change-btn btntext="婚姻状况" title-color="black" placeholder="请选择" class="change-btn-pro"></change-btn> -->
    <input-box title="工作" name="work" title-color="black" text-color="black" placeholder="请填写" class="input-box"></input-box>
    
  </div>
  <div class="textarea-pro">
      <textarea class="inputarea-pro" maxlength="150" name="intro" placeholder="请填写自我评价（最多150个字）"></textarea>
  </div>
  <!-- <div style="height:5.0rem;margin-top:1.0rem"> -->
    
  <!-- </div> -->
  </form>
  </div>
</template>

<script>
import InputBox from 'components/funComp/InputBox'
import ChangeBtn from 'components/funComp/ChangeBtn'
import SelectBtn from 'components/funComp/SelectBtn'
import NavHeader from 'components/funComp/NavHeader';
  export default{
    components: {
    	InputBox,ChangeBtn,SelectBtn,NavHeader
    },
    data(){
      return{
        myinfo: {},
        avator: '',
        age:[],
        sex:["男","女"],
        qualifications:["初中及以下","高中","大学及以上"],
        marriage:["单身","恋爱中","婚姻中","离异","分居","丧偶"],
        mobile:"",
        logo:""   
      }
    },
    props:{
      // values:{
      //   type:Array,
      //   default(){
      //     return["ada","asdf","adf"] 
      //   }      
      // },
    },
    created(){
      //获取微信js凭证
      $.ajax({
          url: global.domain +'/thirdparty/wechat',
          type:'get', 
          dataType: 'json',
          async: false,
          data:{
            url: location.origin + location.search
          },
          success: data => {this.weixin = data.data;console.log(data)},
          error: err => console.error(err)
        });
    },
    ready(){

      $.post(global.domain +'/user/get_my_info',
        { token: global.token },
        v => this.myinfo = v.data ,'json');

      // this.phonenum = global.user.mobile;
      this.mobile = global.user.mobile
      this.avator = global.user.logo

      
      console.log('wx: '+this.weixin)
      // 微信配置
      wx.config({
        debug: true,
        appId: this.weixin.appId,
        timestamp: this.weixin.timestamp,
        nonceStr: this.weixin.nonceStr,
        signature: this.weixin.signature,
        jsApiList: [
          'chooseImage',
        ]
      });
      wx.ready(function(){
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
          alert('成功')

          // 4 音频接口
          // 4.2 开始录音
          document.querySelector('#avator').onclick = function () {
            wx.chooseImage({
              count: 1, // 默认9
              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
              sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
              success: function (res) {
                  var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                  this.avator = localIds
              }
          });
          };
      });
    },
    compiled(){
      for (var i = 1; i <= 100; i++) {
        this.age.push(i);
      }
      // console.log("arr is",this.age);
    },
    methods:{
      handleclick(){
        // document.getElementById('user-name').focus();
        var obj=document.getElementById('user-name');
        obj.focus(); 
        var len = obj.value.length; 
        if (document.selection) { 
        var sel = obj.createTextRange(); 
        sel.moveStart('character',len); 
        sel.collapse(); 
        sel.select(); 
        } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') { 
        obj.selectionStart = obj.selectionEnd = len; 
        }
      }
    }
  }
</script>

<style>
.top{
  overflow: hidden;
  height: 5.4rem;
  background-color: #ffffff;
  padding-right: 0.75rem;
}
.person-photo-pro{
  float: left;
  border-radius :3.2rem;
  height: 3.2rem;
  width: 3.2rem;
  background-color: #efefef;
  margin-top: 1.05rem;
  margin-left: 0.75rem;
}
.nik-body{
  float: left;
  height: 3.2rem;
  margin-top:  1.05rem;
  margin-left: 0.75rem;
  width:69%;
}
.nikname{
  /*float: left;*/
  /*height: 0.7rem;*/
  margin-top: 0.35rem;
  font-size: 0.7rem;
  /*margin-left: 0.5rem;*/
}
.nikname-val{
  border:0;
  font-size: 0.85rem
}
.border{
  height: 0.05rem;
  margin-top: 0.3rem;
  background-color: #e3e3e3;
  width: 100%;
}
.nikname-make{
  margin-top: 0.3rem;
  font-size: 0.7rem;
}
.profile-list{
  margin-top: 1.0rem;
  /*height: 2.5rem;*/
  
}
.change-btn-pro{
  margin-bottom: 0.05rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.input-box{
  margin-top: 0.05rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.textarea-pro{
  margin-top: 1rem;
  width: 100%;
  height: 5.0rem;
  padding:0.75rem 1.0rem;
  background-color: #fff;
}
.inputarea-pro{
  width: 100%;
  height:100%;
  border:0;
  resize: none;
}
</style>
