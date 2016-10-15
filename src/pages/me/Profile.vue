<template>
<nav-header title="编辑个人资料" left="back" :method="subAndCheck2"></nav-header>
<div class="far-bom">
<form method="post" id="editform">
  <input type="hidden" name="token" :value="token">
  <input type="hidden" name="logo" :value="serverId" id="sid">
  <div class="top wrapper">
  <!-- 头像 -->
    <div class="person-photo-pro wrapper" id="avator" >
      <img :src="logo" alt="" class="avator" id="logo" name="logo2">
    </div>
    <div class="nik-body wrapper">
      <div class="nikname wrapper">
      <input id="user-name" name="user_name" class="nikname-val" style="width:5.0rem" :value="user.user_name">
        
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
        user: {},
        serverId: '',
        age:[],
        sex:["男","女"],
        qualifications:["初中及以下","高中","大学及以上"],
        marriage:["单身","恋爱中","婚姻中","离异","分居","丧偶"],
        mobile:"",
        logo: '',
        token: '', 
        index: 2
      }
    },
    ready(){
      // console.log(global.user.mobile)
      this.user = global.user
      this.mobile = global.user.mobile
      this.logo = global.user.logo
      this.token = localStorage.token
      var that = this
      document.querySelector('#avator').onclick = function () {
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // alert(3333)
                let localId = res.localIds.toString();
                $('#logo').attr('src',res.localIds);
                // alert(this.localId)
                // alert('chenggong:' +that.serverId)
                setTimeout(function () {
                    wx.uploadImage({
                        localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                        isShowProgressTips: 1, // 默认为1，显示进度提示
                        success: function (res) {
                            console.log(res.serverId);// 返回图片的服务器端ID
                            that.serverId = res.serverId
                            // alert('zhi: ' +this.serverId)

                        }
                    });
                }, 100);
            }
        });
      }
    },
    compiled(){
      for (var i = 1; i <= 100; i++) {
        this.age.push(i);
      }
      // console.log("arr is",this.age);
    },
    methods:{
      // chose(){
      //   // alert(2111)
      //   // 指向this
      //   let that = this
      //   wx.chooseImage({
      //       count: 1, // 默认9
      //       sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      //       sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      //       success: function (res) {
      //           // alert(3333)
      //           let localId = res.localIds.toString();
      //           $('#logo').attr('src',res.localIds);
      //           // alert(this.localId)
      //           // alert('chenggong:' +that.serverId)
      //           setTimeout(function () {
      //               wx.uploadImage({
      //                   localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
      //                   isShowProgressTips: 1, // 默认为1，显示进度提示
      //                   success: function (res) {
      //                       console.log(res.serverId);// 返回图片的服务器端ID
      //                       that.serverId = res.serverId
      //                       // alert('zhi:' +this.serverId)
      //                       // $('#sid').val(res.localIds);
      //                   }
      //               });
      //           }, 100);
      //       }
      //   });
      //   // setTimeout(function(){this.serverId = serverId;alert(this.serverId)},180)
      // },
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
      },
      subAndCheck2(){
        if($('[name="user_name"]').val()===''){
          alert('昵称不能为空！')
          return false 
        }
        if($('#sid').val()===''){
          alert('头像不能为空！')
          return false 
        }

        if($('[name="borth_date"]').val()===''){
          alert('年龄不能为空！')
          return false 
        }
        if($('[name="sex"]').val()===''){
          alert('性别不能为空！')
          return false 
        }
        if($('[name="education"]').val()===''){
          alert('学历不能为空！')
          return false 
        }
        if($('[name="marital_status"]').val()===''){
          alert('婚姻不能为空！')
          return false 
        }
        else{
        $.ajax({
            url: global.domain +"/user/edit_info",
            type:'post', 
            dataType: 'json',
            cache: true,
            data: $('#editform').serialize(),//序列化
            success: function(data) {
              // console.log( data);  
              this.$router.go('/me')
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(err.toString())
            }.bind(this)
          });
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
