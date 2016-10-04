<template>
<nav class="wrapper part" >
	<ul class="func-nav">
		<li :class="{active: index == 1}"
  				@click="change(1)">
			<div class="item-txt">
				<i class="iconfont icon-jingxuan"></i>
				<span>精选</span>
			</div>
		</li>
		<li :class="{active: index == 2}"
  				@click="change(2)">
			<div class="item-txt">
				<i class="iconfont icon-wenda"></i>
				<span>问答</span> 
			</div>
		</li>
		<li :class="{active: index == 3}"
  				@click="change(3)">
			<div class="item-txt">
				<i class="iconfont icon-zhishiku"></i>
				<span>阅读</span>
			</div>
		</li>
		<li :class="{active: index == 4}"
  				@click="change(4)">
			<div class="item-txt">
				<i class="iconfont icon-pingce"></i>
				<span>测评</span>
			</div>
		</li>
</ul>
	 
</nav>
</template>

<script>
  export default{
	  props:{
	  	index:{
	  		default:1
	  	}
	  },
	  components: {

	  },
	  methods:{
	  	change(i){
	  		this.index = i
	  	}
	  },
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'

.func-nav
	height: 2.2rem
	// line-height: 2.2rem

ul
	overflow: hidden
	padding-top 0.60rem
	text-align center
	li
		float left
		width 25%
		height 100%
		.item-txt
			// margin  0.3rem 0 0
			font-size: 0.7rem
			font-weight 500
			color $ztc

.active
	border-bottom: 2px solid $ztc
	
</style>
