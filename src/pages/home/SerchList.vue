<template>
<!-- 搜索结果 -->
  <div>
  	<ul class="serch-list">
  		<li v-for="obj in data" class="ser-item">
	  		<a href="#" style="display: block; color: #262626">
	  			<h1>{{obj.title}}</h1>
	  			<span class="item-meta">
	  				{{ obj.answ_num }} 个回答
	  			</span>
	  		</a>
  		</li>
  	</ul>
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
		  				title:'最近经常感觉很郁闷怎么回事？',
		  				answ_num: 23
		  			},
		  			{
		  				title:'你印象深刻的误听歌词有哪些？',
		  				answ_num: 68
		  			},
		  			{
		  				title:'如果把杨永信的事情写成一部电影，剧本应该是怎样的？',
		  				answ_num: 43
		  			},
		  		]
		  	}
	  	}
	  },
	  
  }
</script>

<style scoped lang="stylus">
	.ser-item
		padding 1.15rem 2.15rem 1.15rem 1.0rem 
		border-bottom 1px solid #e7e7e7
		.item-meta
			margin-top: 0.85rem
			display inline-block
			color #999
			font-size: 12px
</style>
