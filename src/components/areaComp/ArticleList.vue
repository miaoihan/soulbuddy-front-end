<template>
<!-- 文章列表 -->
  <div class="wrapper">
  	<section class="article-item part" v-for="art in data">
  			<div class="a-l">
  				<img src="" alt="">
  			</div>
  			<div class="a-r">
  				<aside>
  					<span class="label" v-if="art.isRec">推荐</span>
  				</aside>
  				<h1 class="a-title over-2">
  					{{art.title}}
  				</h1>
					<p class="a-content over-2">
						{{art.content}}
					</p>
  			</div>
  		</section> <!-- end article-item -->
  </div>
</template>

<script>
  export default{
  	components: {

	  },
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  		return[
		  			{
		  				
		  			},
		  		]
		  	}
	  	}
	  },
	  
  }
</script>

<style scoped lang="stylus">
	
	
		.article-item
			height 6.0rem
			margin-bottom: 0.5rem
			.a-l
				float: left
				width 33.3%
			.a-r
				// float left
				display table-cell
				vertical-align middle
				height 6.0rem
				width 66.6%
				padding 0.4rem 0.9rem 1.0rem 0.5rem
				.a-title
					font-size: 15px
				.a-content
					font-size: 12px
					
	.label
		height 0.85rem
		line-height: 0.76rem
		font-size: 10px
		background-color #316aa3

</style>
