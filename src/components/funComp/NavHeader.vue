<template>
  <header class="nav-header" 
  				id="navHeader" :class="{fixed: fixed}">
  	<!-- 导航左部分	 -->
	  <span class="nav-left">
	  	<i class="iconfont" v-if="title=='新灵伙伴'">&#xe600;</i><!-- 搜索图标 -->
	  </span>
	  <!-- 导航右部分	 -->
	  <span class="nav-right">
	  	<a class="btn-nav" v-if="title=='新灵伙伴'"
	  			v-link="{path: '/ask'}">提问</a>
	  </span>
	  <h1 class="nav-title" v-if="title">{{ title }}</h1>

		<div class="tag-wrap" v-if="iscst">
			<span class="btn-left" :class=" identity===1 ? 'active' : '' " 
						@click="click(1)"
						>咨询师</span>
			<span class="btn-right" :class="{ active: identity === 2 }"
						@click="click(2)"
						>经验达人</span>
		</div>
	</header>

</template>

<script>
  export default{
		props:{
			title:{
				type: String,
				default: ''
			},
			fixed:{
				type: Boolean,
				default: false
			},
			iscst:{ type: Boolean },
			identity: { type: Number, default: 1 }
		},

		methods:{
			click(i){
				console.log(this.identity)
				this.identity = i
			}
		},

    components: {}
  }

</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'

.nav-header
	height 2.2rem
	line-height: 2.2rem
	background-color: $ztc
	width 100%
	.nav-title
		text-align center
		// position absolute
		font-size: 16px
		color: #FFF

.nav-right
	position absolute
	right 0.7rem
	// top 0.45rem

.btn-nav
	color $ztc
	height 1.2rem
	line-height: 1.3rem
	width 2.25rem
	font-size: 0.65rem
	font-weight: 600
	text-align: center
	border-radius 0.3rem
	background-color: #FFF
	

.fixed{
	position: fixed;
}

.nav-left
	position:absolute;
	left:0.75rem
	color #fff	
	
.tag-wrapper
	text-align: center
	span
		display inline-block
		margin-top 7px
		height 1.5rem
		line-height: 1.5rem
		width 4.0rem
		border 1px solid #fff
		color #fff
		font-size: 14px
	.btn-left
		border-radius 6px 0 0 6px
		margin-right: -4px
	.btn-right
		border-radius 0px 6px 6px 0px
	.active
		background-color: #FFF
		color: $ztc

</style>
