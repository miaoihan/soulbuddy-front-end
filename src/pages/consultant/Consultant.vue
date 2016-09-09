<template>
<!-- 咨询师 -->
  <div>
	  <cst-list :data = "data"></cst-list>
  </div>
</template>

<script>
  export default{
  	components: {
  		CstList: require('components/areaComp/CstList')
	  },
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  		return[
		  			{
		  				name: '陈雪晴',
		  				desc: '国家二级心理咨询师',
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
		  				desc: '国家二级心理咨询师',
		  				label: [{
		  					name: '自杀倾向'
		  				}],
		  				num: 66
		  			},
		  			{
		  				name: '李梓嫚',
		  				desc: '国家二级心理咨询师',
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
