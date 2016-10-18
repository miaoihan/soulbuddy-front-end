<template>
  <div>
  	<nav-header title="我的评测" left="back"></nav-header>
  </div>
</template>

<script>
  export default{
  	components: {
  		NavHeader:require('components/funComp/NavHeader.vue'),
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


</style>

