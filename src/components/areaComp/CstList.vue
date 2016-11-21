<template>
  <div class="zxs-list wrapper">
  	<div class="cst-item"  v-for="item in data" >
		 		<cst-item :data="item"></cst-item>
		</div>
  </div><!-- end zxs-list -->
</template>

<script>
  export default{
  	components: {
  		CstItem: require('components/areaComp/CstItem')
	  },
	  data(){
	  	return{
	  		collected:false,
	  		user_list:[],
	  	}
	  },
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  	}
	  	}
	  },
	  ready(){
	  	
	  	
	  },

  }
</script>

<style scoped lang="stylus">

	.cst-item
		margin-bottom: 1.0rem
	
</style>
