<template>
<nav class="wrapper part" style="height: 5rem">
	<ul class="func-nav">
		<li>
			<div class="img-wrap">
				<img src="../../assets/imgs/anli.png" alt="">
			</div>
			<div class="item-txt">
				<span>测评</span>
			</div>
		</li>
		<li>
			<div class="img-wrap">
				<img src="../../assets/imgs/anli.png" alt="">
			</div>
			<div class="item-txt">
				<span>科普</span>
			</div>
		</li>
		<li>
			<div class="img-wrap">
				<img src="../../assets/imgs/anli.png" alt="">
			</div>
			<div class="item-txt">
				<span>放松</span>
			</div>
		</li>
		<li>
			<div class="img-wrap">
				<img src="../../assets/imgs/anli.png" alt="">
			</div>
			<div class="item-txt">
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
.func-nav
	height: 5.0rem

ul
	overflow: hidden
	padding 1.0rem 0 0
	text-align center
	li
		float left
		width 25%
		.item-txt
			margin  0.5rem 0 0
			font-size: 0.7rem
			font-weight 700
			color #29abe2

.img-wrap{
	width 1.5rem
	margin 0 auto
}
	

</style>
