<template>
<!-- 经验达人 -->
  <div class="wrapper">
  	<kol-list :data="data"></kol-list>	
  </div>
</template>

<script>
  export default{
  	components: {
  		KolList: require('components/areaComp/KolList')
	  },
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  		return[
		  			{
		  				name: '陈雪晴',
		  				desc: '经验达人',
		  				label: [
		  				{
		  					name: '自杀倾向',
		  				},
		  				{
		  					name: '自残',
		  				},
		  				],
		  				num: 89
		  			},
		  			{
		  				name: '王大伟',
		  				desc: '经验达人',
		  				label: [{
		  					name: '自杀倾向'
		  				}],
		  				num: 66
		  			},
		  			{
		  				name: '李梓嫚',
		  				desc: '经验达人',
		  				label: [{
		  					name: '自杀倾向'
		  				}],
		  				num: 59
		  			},
		  		]
		  	}
	  	}
	  },
	  
  }
</script>

<style lang="stylus">

	

</style>
