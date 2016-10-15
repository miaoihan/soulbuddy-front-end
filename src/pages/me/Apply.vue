<template>
	<nav-header title="申请" left="back" right=""></nav-header>
  <div class="top-20 part">
	<i class="iconfont float-left">&#xe618;</i>
  	<change-btn class="float-right" btntext="申请成为咨询师" url="/me/personedit/1"></change-btn>
  </div>
  <div class="top-20 part">
  	<i class="iconfont float-left">&#xe619;</i>
  	<change-btn class="float-right" btntext="申请成为经验答人" url="/me/applyjydr"></change-btn>
  </div>
</template>

<script>
import ChangeBtn from 'components/funComp/ChangeBtn'
import NavHeader from 'components/funComp/NavHeader'
export default {
	components:{
		ChangeBtn,NavHeader
	},
	props:{
		btntext:{type:String},//功能名称
		TextColor:{type:String,default:"black"},//控制文字颜色
		IconColor:{type:String,default:"#bbb"},//箭头icon颜色
		href:{type:String,default:null}//是否需要跳转 
	},
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'
.float-right{
	width:92%
	// float:right
}
.part{
	padding:0 0.75rem
	height:2.5rem
	line-height:2.5rem
}
.iconfont{
	color $ztc
	font-size 0.9rem
}
</style>
