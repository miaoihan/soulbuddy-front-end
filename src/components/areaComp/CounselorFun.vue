<!-- 咨询师身份时我的页面中的功能选项 -->
<template>
	<div class="counselor">
  		<div class="person-msg-fun part">
    		<div class="function-body font-center">
	    		<a href="#">
	    			<i class="iconfont fun-img">&#xe609;</i>
	    			<span class="fun-text">余额</span>
	    		</a>
    		</div>
    		<div class="function-body font-center">
	    		<a href="/foo">
	    			<i class="iconfont fun-img">&#xe608;</i>
	    			<span class="fun-text">我的回答</span>
	    		</a>
    		</div>
    		<div class="function-body font-center">
	    		<a href="#">
	    			<i class="iconfont fun-img">&#xe607;</i>
	    			<span class="fun-text">设置</span>
	    		</a>
    		</div>
    	</div>
    	
    </div>
</template>

<script>
import ChangeBtn from '../funComp/ChangeBtn'
export default {
	components:{
		ChangeBtn,
	},
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person-msg-fun{
	height:4.45rem;
	width: 100%;
	padding-top: 1.0rem;
	overflow: hidden;
}
.function-body{
	position: relative;
	width: 33.33%;
	overflow: hidden;
	float: left;
}
.fun-img{
	font-size: 1.2rem;
	overflow: hidden;
	color: #29abe2;
}
.fun-text{
	display: block;
	font-size: 0.6rem;
	color: #000;
}
</style>
