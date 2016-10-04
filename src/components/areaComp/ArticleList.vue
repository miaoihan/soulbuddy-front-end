<template>
<!-- 文章列表 -->
  <div class="art-list wrapper">
  	<section class="article-item part" v-for="art in data">
  		<article-item :data="art"></article-item>
  	</section> <!-- end article-item -->
  </div>
</template>

<script>
  export default{
  	components: {
  		ArticleItem: require('components/areaComp/ArticleItem')
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
					
	.art-label
		height 0.85rem
		line-height: 0.76rem
		font-size: 10px
		background-color #316aa3

</style>
