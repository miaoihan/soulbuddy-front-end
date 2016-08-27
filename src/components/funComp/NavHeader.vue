<template>
  <header class="bar bar-nav" style="background-color: #29abe2" 
  				id="navHeader" :class="{fixed: fixed}">
	  <a class="icon pull-left"><i class="iconfont">&#xe600;</i></a>
	  <button class="btn-nav pull-right">提问</button>
	  <h1 class="title">{{ title }}</h1>
	</header>
	<div style="height: 2.2rem"></div>
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
			}
		},

    components: {}
  }

</script>

<style scoped lang="stylus">
#navHeader a, h1{
	color: #fff;
}

.btn-nav
	color #29abe2
	margin-top 0.45rem
	height 1.3rem
	width 2.25rem
	font-size: 0.7rem
	font-weight: 600
	line-height: 1.4rem
	text-align: center
	border-radius 0.3rem
	background-color: #FFF

.fixed{
	position: fixed;
}
	
</style>
