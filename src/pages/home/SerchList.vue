<template>
<!-- 搜索结果 -->
  <div>
  	<ul class="serch-list">
  		<li v-for="obj in data" class="ser-item">
	  		<a v-link="{name:'question', params:{ id: obj.id } }" style="display: block; color: #262626">
	  			<h1>{{obj.title}}</h1>
	  			<span class="item-meta">
	  				{{ obj.answer_num }} 个回答
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
	  props: {
	    data: {
	      type: Array, // String, Number, Boolean, Function, Object, Array
	      required: true,
	      default: null
	    }
	  }
	 
	  
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
