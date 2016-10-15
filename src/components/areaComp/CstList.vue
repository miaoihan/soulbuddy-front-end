<template>
  <div class="zxs-list wrapper">
		  <div class="zxs-item part" v-for="item in data">
			  <a v-link="{name:'user', params:{ id: item.u_id }}">
			  	<div class="z-avator">
			  		<img :src="item.logo" alt="">
			  		<i class="iconfont col-img" @click="subme" v-if="collect==false">&#xe606;</i>
				  	<i class="iconfont col-img" style="color:red;" @click="Collect" v-if="collect==true">&#xe633;</i>
			  	</div>
			  	<div class="z-desc container-16">
			  		<div class="desc-l1">
			  			<span class="d-l1-name">{{item.user_name}}</span>
			  			<span><i></i></span>
			  			<span class="pull-right" style="font-size:0.6rem;color: #999">
			  				<strong style="color: #2b8ff7;font-size:0.65rem">
			  				{{ item.fav_count }}</strong>
			  				人收藏了这位咨询师
			  			</span>
			  		</div>
			  		<div class="desc-l2">
			  			<span style="font-size:0.6rem;color: #999">
			  				{{item.intro}}
			  			</span>
			  		</div>
			  		<div class="desc-l3">
			  			<span class="label-grey" style="margin-right: 0.5rem" 
			  						v-for="skill in item.skill | str2arr">
			  				{{ skill }}
			  			</span>
			  		</div>
			  	</div>
			  </a>
		  </div><!-- end zxs-item -->
  	</div><!-- end zxs-list -->
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
	  ready(){
	  }
	  
  }
</script>

<style scoped lang="stylus">

	.zxs-item
		margin-bottom: 1.0rem
	.z-avator
		height 10.0rem
		position relative
	.col-img
		position absolute
		bottom 0.75rem
		right 1.0rem
		font-size 1.0rem
	.d-l1-name
		font-size:0.7rem
		font-weight: 700
		color #444
	.desc-l3
		margin-top: 0.7rem

	a
		width 100%
</style>
