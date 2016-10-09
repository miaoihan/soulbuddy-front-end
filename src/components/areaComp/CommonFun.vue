<template>
<!-- 普通用户身份时我的页面中的功能选项 -->
<div class="common">
	<div class="person-msg-fun part">
	    <div class="function-body font-center">
		    <a v-link="'/me/balance'">
		    	<i class="iconfont fun-img">&#xe609;</i>
		    	<span class="fun-text">余额</span>
		    </a>
	    </div>
	    <div class="function-body font-center">
		    <a v-link="'/me/evaluations'">
		    	<i class="iconfont fun-img">&#xe604;</i>
		    	<span class="fun-text">我的测评</span>
		    </a>
	    </div>
	    <div class="function-body font-center">
		    <a v-link="'/me/questions'">
		    	<i class="iconfont fun-img">&#xe608;</i>
		    	<span class="fun-text">我的提问</span>
		    </a>
	    </div>
	    <div class="function-body font-center">
		    <a  v-link="'/me/favorite'">
		    	<i class="iconfont fun-img">&#xe606;</i>
		    	<span class="fun-text">收藏</span>
		    </a>
	    </div>   
	</div>
	<div class="funbtn-body">
	    <change-btn btntext="我听过的问题" 
	    	style="border-bottom:0.05rem solid #eee">	    	
	    </change-btn>
	    <change-btn btntext="设置"></change-btn>	
	</div>
</div>
</template>

<script>
import ChangeBtn from '../funComp/ChangeBtn'
export default {
	components:{
		ChangeBtn,
	},
	props:{
		UserType:{type:String}
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
.person-msg-fun{
	height:4.45rem;
	width: 100%;
	padding-top: 1.0rem;
	overflow: hidden;
}
.function-body{
	position: relative;
	width: 25%;
	overflow: hidden;
	float: left;
}
.fun-img{
	font-size: 1.2rem;
	overflow: hidden;
	color: $ztc;
}
.fun-text{
	display: block;
	font-size: 0.6rem;
	color: #000;
}
.funbtn-body{
	padding-left:1rem;
	padding-right: 1rem; 
	width: 100%;
	height: 5.0rem;
	margin-top: 1rem;
	background-color: #fff;
}
.funbtn{
	background-color: #fff;
}
</style>
