<template>
<!-- 咨询师 -->
  <div>
	  <div class="zxs-list" v-for="item in data">
		  <div class="zxs-item part">
		  	<div class="z-avator">
		  		<img src="" alt="">
		  	</div>
		  	<div class="z-desc container-16">
		  		<div class="desc-l1">
		  			<span class="d-l1-name">{{item.name}}</span>
		  			<span><i></i></span>
		  			<span class="pull-right" style="font-size:0.6rem;color: #999">
		  				<strong style="color: #2b8ff7;font-size:0.65rem">
		  				{{ item.num }}</strong>
		  				人收藏了这位咨询师
		  			</span>
		  		</div>
		  		<div class="desc-l2">
		  			<span style="font-size:0.6rem;color: #999">
		  				{{item.desc}}
		  			</span>
		  		</div>
		  		<div class="desc-l3">
		  			<span class="label-grey" style="margin-right: 0.5rem" 
		  						v-for="it in item.label">
		  				{{it.name}}
		  			</span>
		  		</div>
		  	</div>
		  </div><!-- end zxs-item -->
  	</div><!-- end zxs-list -->
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
	.zxs-item
		margin-bottom: 1.0rem
	.z-avator
		height 10.0rem
	.d-l1-name
		font-size:0.7rem
		font-weight: 700
		color #444
	.desc-l3
		margin-top: 0.7rem
</style>
