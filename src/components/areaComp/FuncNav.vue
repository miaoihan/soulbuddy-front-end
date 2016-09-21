<template>
<nav class="wrapper part" >
	<ul class="func-nav">
		<li>
			<div class="item-txt">
				<i class="iconfont icon-wenda"></i>
				<span>问答</span>
			</div>
		</li>
		<li>
			<div class="item-txt">
				<i class="iconfont icon-pingce"></i>
				<span>测评</span>
			</div>
		</li>
		<li>
			<div class="item-txt">
			<i class="iconfont icon-zhishiku"></i>
				<span>科普</span>
			</div>
		</li>
		<li>
			<div class="item-txt">
			<i class="iconfont icon-yinlesongchi"></i>
				<span>放松</span>
			</div>
		</li>
		<li>
			<div class="item-txt">
				<i class="iconfont icon-anli"></i>
				<span>案例</span>
			</div>
		</li>
</ul>
	
	 
</nav>
</template>

<script>
  export default{
	  props:{

	  },
	  components: {

	  },
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'

.func-nav
	height: 3.7rem

ul
	overflow: hidden
	padding 1.0rem 0 0
	text-align center
	li
		float left
		width 20%
		.item-txt
			margin  0.3rem 0 0
			font-size: 0.7rem
			font-weight 500
			color $ztc

</style>
