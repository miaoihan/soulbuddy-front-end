<template>
<nav-header v-if="this.$route.params.id==0" title="编辑个人资料" left="back" right=""></nav-header>
<nav-header v-if="this.$route.params.id==1" title="申请成为咨询师" left="back" right=""></nav-header>
  <div class="wrapper">
    <div class="person-photo1" id="per-photo">
    	<img class="photo-img" :src="real_logo" id="logo" >
    	<div class="sub-photo" id="avator">
    		<i class="iconfont craicon">&#xe60c;</i>
    		<span class="sub-text">上传真实头像</span>
    	</div>
    </div>
    <form action="" method="post" id="editmsg">
    <!-- 若有seri，则上传 -->
	  <input type="hidden" name="real_logo" :value="serverId" id="real_logo" v-if="serverId!=''">
	  <input type="hidden" name="logo_flag" value="1" v-if="serverId!=''">
	  <!-- 没有serid，保持不变 -->
	  <input type="hidden" name="real_logo"  :value="old_real_logo" id="real_logo" v-if="serverId==''">
	  <input type="hidden" name="logo_flag" value="0" v-if="serverId==''">

    <input type="hidden" name="certificate"
     :value="ceid" v-if="this.$route.params.id==1" >
    <input type="hidden" name="token" :value="token">
    <input type="hidden" name="identity" :value="identity">
    <input-box title="真实姓名" name="true_name"
    	placeholder='请填写' :value="true_name" 
    	title-color="black" text-color="black"
    	style="padding:0 1rem">
   	</input-box>
   	<div class="part top-20 wrapper" style="padding:0 1rem" v-if="this.$route.params.id==1">
   		<card-photo :ceid.sync="ceid"></card-photo>
   	</div>
   	<span class="lab-name">
   		擅长标签
   	</span>
   	<div class="textarea">
   		<textarea class="inputarea" name="skill" v-model="skill" placeholder="输入我的擅长标签（用分号隔开，如：抑郁症；焦虑症；自杀倾向）"></textarea>
   	</div>
   	<span class="lab-name">
   		简介
   	</span>
   	<div class="textarea">
   		<textarea class="inputarea" maxlength="150" name="intro" v-model="intro" placeholder="请填写自我评价（最多150个字）"></textarea>
   	</div>
    <div class="tbar">
      <span class="ask-gold" name="gold">咨询费（￥）</span>
      <input name="answer_fee" type="text" placeholder="0" class="input-gold" 
             v-model="price" maxlength="4">
    </div>
    <!-- <change-btn class="button-top-15 container-20-lr" btntext="心理咨询费设定" :url="url" v-if="this.$route.params.id==0" :placeholder="answer_fee" place-color="#29ABE2"></change-btn> -->
   	<div class="save-box" style="margin-bottom:0rem">
   		<input class="save-body" type="button" value="保存" name="savemsg" v-if="this.$route.params.id==0" @click="subme1">
      <input class="save-body" type="button" value="提交申请" name="savemsg" v-if="this.$route.params.id==1" @click="subme2">
   	</div>
   	</form>
   	<!-- <div style="height:5.0rem"></div> -->
   	<!-- <input type="submit" name="" value="保存"> -->
  </div>
</template>

<script>
import InputBox from 'components/funComp/InputBox'
import ChangeBtn from 'components/funComp/ChangeBtn'
import CardPhoto from 'components/areaComp/CardPhoto'
import NavHeader from 'components/funComp/NavHeader';
export default {
	components:{
		InputBox,CardPhoto,NavHeader,ChangeBtn
	},
	props:{
		PersonPhoto:{type:String},
		UserType:{type:String}
	},
  data () {
    return {
      person:{},
      serverId:'',
      ceid:'',
      certificate:'',
      true_name:'',
      real_logo:'',
      skill:'',
      intro:'',
      token:'',
      identity:1,
      answer_fee:'',
      user:{},
      price: null,
      old_real_logo:''
    }
  },
  ready:function(){
    this.user=global.user
    this.answer_fee='￥ '+this.user.answer_fee
    this.skill=user.skill.split(" ").join("；");
    this.intro=user.intro
    this.true_name=user.true_name
    this.real_logo=user.real_logo
    this.old_real_logo=user.old_real_logo
    this.token=localStorage.token
    this.price = user.answer_fee;
	  	$.post(global.domain +'/user/get_my_info',
        { token: global.token },
        v => this.person = v.data ,'json');

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
  methods:{
      addPhoto(){ 
        var prevDiv = document.getElementById("photos");        
        var fileInput = document.getElementById('tt');
        // console.log(fileInput);
        var reader = new FileReader();
        reader.onload = function(evt){
                console.log(prevDiv)
                var child=document.createElement("div");
                // console.log(evt.target.result)
              child.innerHTML = '<div style="overflow:hidden;height:3.0rem;width:3.0rem;border-radius: 0.3rem;background-color:#eee;margin-right:1rem;margin-bottom:0.5rem;float:left"><img src="' + evt.target.result + '" /></div>';
              prevDiv.appendChild(child)
            
            }
      reader.readAsDataURL(fileInput.files[0]);
        this.num=this.num+1;
      },
      //咨询师保存
      subme1(){
      	var logo_src=''
        logo_src = $("#logo").attr("src")
        if(logo_src===''){
          alert('真实头像不能为空')
          return false
        }
        // if($('[name="certificate"]').val()===''){
        //   alert('相关证件不能为空')
        //   return false
        // }
        if($('[name="skill"]').val()===''){
          alert('擅长标签不能为空')
          return false
        }
        if($('[name="intro"]').val()===''){
          alert('简介不能为空')
          return false
        }
        else{
          $.ajax({
                url: global.domain +"/user/edit_consultant_info",
                type:'post', 
                dataType: 'json',
                async:false,
                data:$('#editmsg').serialize(),//序列化
                success: function(data) {
                  this.$router.go('/me')
                }.bind(this),
                error: function(xhr, status, err) {
                  console.err(err.toString())
                }.bind(this)
              });
          // 设置资费
          $.post(global.domain +'/user/set_serivce_fee',
            { answer_fee: this.price, 
              token: global.token,},
            v => {} ,'json');
          }
      },
      //申请成为咨询师
      subme2(){
        // var logo_src='123'
        // logo_src = $("#logo").attr("src")
        // alert(logo_src)
        if($('#real_logo').val()===''){
          alert('真实头像不能为空！')
          return false 
        }
        if($('[name="true_name"]').val()===''){
          alert('真实姓名不能为空')
          return false
        }
        if($('[name="certificate"]').val()===''){
          alert('相关证件不能为空')
          return false
        }
        if($('[name="skill"]').val()===''){
          alert('擅长标签不能为空')
          return false
        }
        if($('[name="intro"]').val()===''){
          alert('简介不能为空')
          return false
        }
        if($('[name="answer_fee"]').val()==0){
          alert('咨询费必须大于0')
          return false
        }
        else{        
            $.ajax({
                url: global.domain +"/user/auth",
                type:'post', 
                dataType: 'json',
                async:false,
                data: $('#editmsg').serialize(),//序列化
                success: function(data) {
                  if(data.code==1){
                    alert('提交成功')
                    this.$router.go('/me')
                  }
                  else{
                    // alert(data.msg)
                  }
                }.bind(this),
                error: function(xhr, status, err) {
                  console.err(err.toString())
                  alert('提交失败')
                }.bind(this)
              });
        }
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../assets/stylus.styl'
input::-webkit-input-placeholder {text-align:right}
.person-photo1{
	position: relative;
	height:10.0rem;
	width: 100%;
	margin-bottom: 1.7rem;
}
.photo-img{
	width: 100%;
	height: 100%;
}
.sub-photo{
	position:absolute;
	height:1.25rem;
	width:6.15rem;
	border:0.1rem solid #fff;
	border-radius:1.25rem;
	bottom:0.5rem;
	right:0.75rem;
	// display:block;
	
}
.getphoto{
  position:absolute;
  opacity:0; 
  width:100%;
}
.sub-text{
	float:right
	font-size:0.6rem
	margin-right:0.5rem
	color:#fff
	line-height:1rem;
}
.craicon{
	line-height:1rem;
	display:block;
	float:left;
	color:#fff;
	margin-left:0.5rem;
	font-size:0.85rem;
}
.lab-name{
	display: block;
	font-size: 0.7rem;
	margin-top: 1.4rem;
	margin-left: 1rem;
	margin-bottom: 0.55rem;
	color: #999;
}
.textarea{
	width: 100%;
	height: 5.0rem;
	padding:0.75rem 1.0rem;
	background-color: #fff;
  margin-bottom:1.0rem 
}
.inputarea{
	width: 100%;
	height:100%;
	border:0;
	resize: none;
}
.save-body{
	width: 100%;
	height: 2.25rem;
	border:0;
	background-color: $ztc;
	color:#fff;
	font-size:0.8rem;
	margin-top:1.5rem;
	margin-bottom:2.5rem
}

.input-gold{
  display inline-block
  width 1.8rem
  float right
  text-align center
}
.ask-gold{
  color $ztc
}
</style>
