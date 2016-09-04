<template>
<!-- 经验达人 -->
  <div class="wrapper">
  	<ul class="kol-list">
  		<li class="koa-item part container-16" v-for="item in data">
	  		<a href="">
	  			<div class="k-i-l">
	  				<i class="avator" style="height:2.85rem;width:2.85rem">
	  					<img src="" alt="">
	  				</i>
	  			</div>
	  			<div class="k-i-r">
	  				<div class="z-desc">
				  		<div class="desc-l1">
				  			<span class="d-l1-name">{{item.name}}</span>
				  			<!-- 认证标志 -->
				  			<span>
				  				<i></i>
				  			</span>
				  		</div>
				  		<div class="desc-l2">
				  			<span style="font-size:0.6rem;color: #999">
				  				{{item.desc}}
				  			</span>
				  		</div>
				  		<div class="desc-l3" style="margin-top: 0.40rem">
				  			<span class="label-grey" style="margin-right: 0.5rem" 
				  						v-for="it in item.label">
				  				{{it.name}}
				  			</span>
				  		</div>
				  		<div class="desc-l4" style="margin-top:0.6rem">
				  			<span style="font-size:0.6rem;color: #999" >
				  				<strong style="color: #2b8ff7;font-size:0.65rem">
				  				{{ item.num }}</strong>
				  				人收藏了这位咨询师
				  			</span>
				  		</div>
				  	</div>
	  			</div>
  			</a>
  		</li> <!-- end koa-item -->
  	</ul><!-- end koa-list -->
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

	.koa-item
		border-bottom: 1px solid #e7e7e7
		height 7.1rem
	.k-i-l
		// display: inline-block
		height 5.5rem
		// width 3.45rem
		float: left
	.k-i-r
		display: inline-block
		height 5.5rem
		float: left
		margin-left: 0.6rem
	a
		width 100%

</style>
