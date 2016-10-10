<template>
  <header class="nav-header" 
  				id="navHeader" :class="{fixed: fixed}">
  	<!-- 导航左部分	 -->
	  <span class="nav-left">
	  	<i class="iconfont" v-if="title=='新灵伙伴'">&#xe600;</i><!-- 搜索图标 -->
	  	<a v-link="url" v-if="left=='return'">
	  		<i class="iconfont" style="font-size:0.9rem;color:#fff" >&#xe602;</i>
	  	</a><!-- 返回图标 -->
	  </span>
	  <span class="nav-right" v-if="right=='true'">
	  	<a class="btn-nav" v-if="title=='新灵伙伴'"
	  			v-link="{path: '/ask'}">提问</a>
	  	<a class="next-btn" v-if="title=='原手机号码'"
	  			v-link="url">下一步</a>
	  	<a class="next-btn" v-if="title=='我的评测'"
	  			v-link="url">重新评测</a>
	  	<input type="submit" class="next-btn" v-if="title=='编辑个人资料'" value="保存" name="">
	  	<i class="iconfont" style="float:right;color:#fff;font-size:0.9rem" v-if="title==''">&#xe62c;</i><!-- 分享图标 -->
	  	<i class="iconfont" style="float:right;color:#fff;font-size:0.9rem;margin-right:1.35rem;" v-if="title==''">&#xe606;</i>
	  	<!-- 收藏图标 -->
	  	<i class="iconfont" style="float:right;color:#fff;font-size:0.9rem" v-if="title=='问题详情'">&#xe62d;</i>
	  	<!-- 三个点 -->
	  </span>
	  <h1 class="nav-title">{{ title }}</h1>
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
			url:{type:String},
			right:{type:String,default:'true'},
			left:{type:String,default:'return'}
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
.next-btn
	border 0
	background-color $ztc
	color #fff
	font-size: 0.8rem
</style>
