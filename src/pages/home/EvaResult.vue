<template>
<!-- 测评结果 -->
  <div class="part container-20">
	  <div class="er-title">
	  	<h1>国际通用抑郁自评表（SDS）测评结果：</h1>
	  </div>
	  <div class="er-content">
	  	<p>你的总体情绪控制指数为48，处于较低水平。 情绪的识别能力较差。 情绪的表达能力很差。 情绪的控制能力较差。潜在的心理疾病可能有：抑郁症，自闭症。建议寻找心理医生进行相对应的咨询。</p>
	  </div>
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

	.er-title
		font-size: 15px;
		color: #444;
		margin-bottom 0.6rem
	p
		font-size: 14px;
		color: #999999;


</style>
