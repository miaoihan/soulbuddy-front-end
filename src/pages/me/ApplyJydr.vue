<template>
<nav-header title="申请成为经验答人" left="back"></nav-header>
  <div class="wrapper">
   	<div class="part top-20 wrapper" style="padding:0 1rem">
   		<card-photo></card-photo>
   	</div>
   	<span class="lab-name">
   		擅长标签
   	</span>
   	<div class="textarea">
   		<textarea class="inputarea" name="personlable" placeholder="输入我的擅长标签（用分号隔开，如：抑郁症；焦虑症；自杀倾向）"></textarea>
   	</div>
   	<span class="lab-name">
   		擅长标签
   	</span>
   	<div class="textarea">
   		<textarea class="inputarea" maxlength="150" name="evaluation" placeholder="请填写自我评价（最多150个字）"></textarea>
   	</div>
   	<div class="save-box far-bom">
   		<input class="save-body" type="submit" value="提交申请" name="savemsg">
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
		PersonPhoto:{type:String}
	},
  data () {
    return {
      
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
