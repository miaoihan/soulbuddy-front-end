<template>
<!-- 提问 -->
  <div class="ask">
  	<div class="ask-title tbar">
  		<input type="text" placeholder="标题">
  	</div>
  	<div class="ask-txarea-wrapper">
  		<textarea name="" id="" placeholder="请详细描述一下你的问题" 
  							class="ask-tearea"></textarea>
  	</div>
  	<div v-if="is_qiangda">
	  	<div class="tbar">
	  		<span class="ask-gold" name="gold">请输入赏金金额（￥）</span>
	  		<input type="text" placeholder="0" class="input-gold">
	  	</div>
	  	<aside class="tips">
				问题有三人抢答，最佳回答获得60%的费用，其他各20%
	  	</aside>
	  </div>
  	<div class="tbar wrapper" style="margin-top: 1.0rem">
  		<span>请将该问题设为公开</span>
	  		<label class="label-switch pull-right" style="margin-top: -0.3rem">
		        <input type="checkbox" v-model="value">
		        <div class="checkbox"></div>
	       </label>
  	</div>
  	<aside class="tips">
			将问题设为公开后，答案被其他人付费收听后，你和咨询师各获得0.5元
	  </aside>
  	
  </div>
</template>

<script>
  export default{
  	components: {

	  },
	  data(){
	  	return{
	  		value: true,
	  		is_qiangda: false
	  	}
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
@import '../../assets/stylus.styl'

.ask
	margin-top: 1.0rem
	.ask-title
		margin-bottom: 1.0rem
	.ask-txarea-wrapper
		padding 0.85rem 1.0rem
		background-color: #FFF
		margin-bottom: 1.0rem
		.ask-tearea
			border none
			height 5.0rem
			width 100%
.ask-footer
	padding 		
	
.ask-gold
	color $ztc	
	
.input-gold
	display inline-block
	width 1.8rem
	float right
	text-align center
</style>
