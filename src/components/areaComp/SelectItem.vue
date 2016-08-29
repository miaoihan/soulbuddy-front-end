<template>
<!-- select item -->
<!-- 此组件暂时不用 -->
  	<section class="sel-item part">
	  	<div class="sel-title">
	  		{{ +1 }}.{{data.title}}
	  	</div>
			<ul>
				<li @click="select(1)">
					{{data.item1}} <span class="iconfont pull-right"
															v-if="sel_index==(1)" 
															>&#xe60e;</span></li>
				<li @click="select(2)">
					{{data.item2}} <span class="iconfont pull-right"
															v-if="sel_index==(2)" 
															>&#xe60e;</span></li>
				<li @click="select(3)">
					{{data.item3}} <span class="iconfont pull-right"
															v-if="sel_index==(3)" 
															>&#xe60e;</span></li>
				<li @click="select(4)">
					{{data.item4}} <span class="iconfont pull-right"
															v-if="sel_index==(4)" 
															>&#xe60e;</span></li>
			</ul>
		</section><!-- end item -->
</template>

<script>
  export default{
  	components: {

	  },
	  data() {
  		return{
  			sel_index: -1
  			
  		}
  	},
	  methods:{
  		select(index){
  			console.log(index)
  			this.sel_index = index;
  		}
  	},
	  props:{
	  	data: {
	  		type: Object,
		  	default(){
		  		return[
		  			{
		  				
		  			},
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

.sel-item
	margin-bottom: 1.5rem;
	.sel-title
		height: 3.0rem;
		line-height: 3.0rem;
		padding-left: 0.85rem;
		font-weight: 600;
		border-bottom: 1px solid #ebebeb;

.sel-item ul li
	height: 2.0rem;
	line-height: 2.0rem;
	font-size: 14px;
	padding: 0 0.8rem	0	1.5rem;
	border-bottom: 1px solid #ebebeb;
	span
		font-size: 24px;
		color: $ztc;
		
</style>
