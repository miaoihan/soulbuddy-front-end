<template>
<nav-header v-if="this.$route.params.id==0" title="编辑个人资料" left="back" right=""></nav-header>
<nav-header v-if="this.$route.params.id==1" title="申请成为咨询师" left="back" right=""></nav-header>
  <div class="wrapper">
    <div class="person-photo1" id="per-photo">
    	<img class="photo-img" :src="PersonPhoto" id="logo" >
    	<div class="sub-photo" id="avator">
    		<i class="iconfont craicon">&#xe60c;</i>
    		<span class="sub-text">上传真实头像</span>
    	</div>
    </div>
    <form action="" method="post" id="editmsg">
    <input type="hidden" name="real_logo" :value="serverId" id="real_logo">
    <input type="hidden" name="certificate"
     :value="ceid" v-if="this.$route.params.id==1" >
    <input type="hidden" name="token" :value="token">
    <input-box title="真实姓名" name="true_name"
    	placeholder='请填写' 
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
import CardPhoto from 'components/areaComp/CardPhoto'
import NavHeader from 'components/funComp/NavHeader';
export default {
	components:{
		InputBox,CardPhoto,NavHeader
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

    }
  },
  ready:function(){
    this.token=localStorage.token
	  	$.post(global.domain +'/user/get_my_info',
        { token: global.token },
        v => this.person = v.data ,'json');

      $.ajax({
          url: 'http://xinling.songtaxihuan.com/user/get_user_info',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
            u_id: 1,
            token: this.token
          },
          success: data => this.user = data.data,
          error: err => err.toString(),
          
        });
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
        if($('#real_logo').val()===''){
          alert('真实头像不能为空')
          return false
        }
        if($('[name="true_name"]').val()===''){
          alert('真实姓名不能为空')
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
        }
      },
      //申请成为咨询师
      subme2(){
      // alert('dsfsfdfsdf')        
            $.ajax({
                url: global.domain +"/user/edit_consultant_info",
                type:'post', 
                dataType: 'json',
                async:false,
                data: {
                  token:localStorage.token,
                  identity:1,
                  true_name:this.true_name,
                  real_logo:this.serverId,
                  certificate:this.certificate,
                  skill:this.skill,
                  intro:this.intro,
                } ,//序列化
                success: function(data) {
                  // alert(this.title)
                  this.$router.go('/me')
                  // console.log( data);  
                }.bind(this),
                error: function(xhr, status, err) {
                  console.err(err.toString())
                }.bind(this)
              });
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
</style>
