<template>
<nav-header title="申请成为经验答人" left="back"></nav-header>
  <div class="wrapper">
   	<div class="part top-20 wrapper" style="padding:0 1rem">
   		<card-photo :ceid.sync="ceid"></card-photo>
   	</div>
   	<form method="post" id="applydr">
	   	<input type="hidden" name="certificate" :value="ceid">
	   	<input type="hidden" name="identity" :value="2">
	   	<input type="hidden" name="token" :value="token">
	   	<span class="lab-name">
	   		擅长标签
	   	</span>
	   	<div class="textarea">
	   		<textarea class="inputarea" name="skill" placeholder="输入我的擅长标签（用分号隔开，如：抑郁症；焦虑症；自杀倾向）"></textarea>
	   	</div>
	   	<span class="lab-name">
	   		简介
	   	</span>
	   	<div class="textarea">
	   		<textarea class="inputarea" maxlength="150" name="intro" placeholder="请填写自我评价（最多150个字）"></textarea>
	   	</div>
   	</form>
   	<div class="save-box far-bom">
   		<input class="save-body" type="button" value="提交申请" @click="subme">
   	</div>
   	<!-- <div style="height:5.0rem"></div> -->
  </div>
</template>

<script>
import InputBox from 'components/funComp/InputBox'
import CardPhoto from 'components/areaComp/CardPhoto'
import NavHeader from 'components/funComp/NavHeader'
export default {
	components:{
		InputBox,CardPhoto,NavHeader
	},
	props:{
		PersonPhoto:{type:String},
		
	},
  data () {
    return {
    	token:'',
    	ceid:''
    }
  },
  ready:function(){
  	this.token=global.token
  },
  methods:{
  	subme(){
      // alert('dsfsfdfsdf')
      	if($('[name="certificate"]').val()===''){
          alert('证件不能为空')
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
                url: global.domain +"/user/auth",
                type:'post', 
                dataType: 'json',
                async:false,
                data: $('#applydr').serialize(),//序列化
                success: function(data) {
                  // alert(this.title)
                  if(data.code==1){
                  	alert("提交成功")
                  	this.$router.go('/me')
                  }else{
                  	alert("提交失败")
                  }
                  
                  // console.log( data);  
                }.bind(this),
                error: function(xhr, status, err) {
                  console.err(err.toString())
                }.bind(this)
              });
      	}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../assets/stylus.styl'
input::-webkit-input-placeholder {text-align:right}
.person-photo{
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
}
</style>
>>>>>>> 9136681a5b37c122957ca3198a9ed192802bc3c1
