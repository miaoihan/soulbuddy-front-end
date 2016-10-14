<template>
  <div>
	  <a v-link="{ name:'article', params:{ art_id: data.art_id }  }">
	  	<div class="a-l">
				<img :src="data.img_file" alt="">
			</div>
			<div class="a-r">
				<aside>
					<span class="label art-label" v-if="data.is_recommend">推荐</span>
					<span class="label-bg-grey" v-if="data.cat_id==1">科普</span>
					<span class="label-bg-grey" v-if="data.cat_id==2">放松</span>
					<span class="label-bg-grey" v-if="data.cat_id==3">案例</span>
				</aside>
				<h1 class="a-title over-2">
					{{data.title}}
				</h1>
				<div class="a-content over-2">
					<!-- content自带标签 -->
					{{{data.content | passAll}}}
				</div>
			</div>
		</a>
  </div>
</template>

<script>
  export default{
  	components: {

	  },
	  props:{
	  	article:{},
	  	data: {
	  		type: Object,
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

	.a-l
		float: left
		width 33.3%
		height 6rem
	.a-r
		// float left
		display table-cell
		vertical-align middle
		height 6.0rem
		width 66.6%
		padding 0.4rem 0.9rem 1.0rem 0.5rem
		.a-title
			font-size: 15px
			margin-bottom: 5px
		.a-content
			font-size: 11px
			color: #999

	.art-label
		height 0.85rem
		line-height: 0.76rem
		font-size: 10px
		background-color #316aa3
		
	a 
		color #444
</style>
