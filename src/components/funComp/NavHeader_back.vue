<template>
  <header class="nav-header" 
  				id="navHeader" :class="{fixed: fixed}">
  	<!-- 导航左部分	 -->
	  <span class="nav-left">
	  	<i class="iconfont" v-if="headData.title=='新灵伙伴'">&#xe600;</i><!-- 搜索图标 -->
	  </span>
	  <span class="nav-right">
	  	<a class="btn-nav" v-if="headData.title=='新灵伙伴'"
	  			v-link="{path: '/ask'}">提问</a>
	  </span>
	  <h1 class="nav-title">{{ headData.title }}</h1>
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
			headData:{
				type: Object,
				default(){
					return{
						title: '' ,
						serch: false,
						ask: false,
						back: false ,
						like: false ,
						share: false ,
					
					}
				} 
			}
		},
		ready(){
			let path = this.$route.path
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
</style>
