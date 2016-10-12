<template>
<nav-header title="编辑个人资料" left="back" right=""></nav-header>
  <div class="wrapper">
    <div class="person-photo1" id="per-photo">
    	<img class="photo-img" :src="PersonPhoto" >
    	<div class="sub-photo">
        <input type="file" class="getphoto">
    		<i class="iconfont craicon">&#xe60c;</i>
    		<span class="sub-text">上传真实头像</span>
    	</div>
    </div>
    <form action="post">
    <input-box title="真实姓名" 
    	placeholder='请填写' 
    	title-color="black" text-color="black"
    	style="padding:0 1rem">
   	</input-box>
   	<div class="part top-20 wrapper" style="padding:0 1rem" v-if="person.identity==0">
   		<card-photo></card-photo>
   	</div>
   	<span class="lab-name">
   		擅长标签
   	</span>
   	<div class="textarea">
   		<textarea class="inputarea" name="personlable" placeholder="输入我的擅长标签（用分号隔开，如：抑郁症；焦虑症；自杀倾向）"></textarea>
   	</div>
   	<span class="lab-name">
   		自我评价
   	</span>
   	<div class="textarea">
   		<textarea class="inputarea" maxlength="150" name="evaluation" placeholder="请填写自我评价（最多150个字）"></textarea>
   	</div>
   	<div class="save-box far-bom">
   		<input class="save-body" type="submit" value="保存" name="savemsg">
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
      person:{}
    }
  },
  ready:function(){
	  	$.post(global.domain +'/user/get_my_info',
        { token: global.token },
        v => this.person = v.data ,'json');

	  	// 我的提问
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
      console.log("user:",this.person)
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
	margin-bottom:2.25rem
}
</style>
