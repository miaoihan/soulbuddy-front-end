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
<<<<<<< HEAD
				<a v-link="{ path: 'evaluation' }"><span>测评</span></a>
=======
				<i class="iconfont icon-pingce"></i>
				<span>测评</span>
>>>>>>> 43b799c1c494f8228e9c5722324ac10095b6ab11
			</div>
		</li>
		<li>
			<div class="item-txt">
<<<<<<< HEAD
				<a v-link="{ path: 'science' }"><span>科普</span></a>
=======
			<i class="iconfont icon-zhishiku"></i>
				<span>科普</span>
>>>>>>> 43b799c1c494f8228e9c5722324ac10095b6ab11
			</div>
		</li>
		<li>
			<div class="item-txt">
<<<<<<< HEAD
				<a v-link="{ path: 'evaluation' }"><span>放松</span></a>
=======
			<i class="iconfont icon-yinlesongchi"></i>
				<span>放松</span>
>>>>>>> 43b799c1c494f8228e9c5722324ac10095b6ab11
			</div>
		</li>
		<li>
			<div class="item-txt">
<<<<<<< HEAD
				<a v-link="{ path: 'sciencedetail' }"><span>案例</span></a>
=======
				<i class="iconfont icon-anli"></i>
				<span>案例</span>
>>>>>>> 43b799c1c494f8228e9c5722324ac10095b6ab11
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
