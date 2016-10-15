<template>
<!-- seltect item -->
<!-- 此组件暂时不用 -->
  	<section class="selt-item part">
	  	<div class="selt-title">
	  		{{ index+1 }}.{{data.question}}
	  	</div>
			<ul>
				<li @click="select(1)">
					{{data.item1}} 
					<span class="iconfont pull-right"
								v-if="sel_index==(1)" 
								>&#xe60e;</span></li>
				<li @click="select(2)">
					{{data.item2}} 
					<span class="iconfont pull-right"
								v-if="sel_index==(2)" 
								>&#xe60e;</span></li>
				<li @click="select(3)">
					{{data.item3}} 
					<span class="iconfont pull-right"
								v-if="sel_index==(3)" 
								>&#xe60e;</span></li>
				<li @click="select(4)">
					{{data.item4}} 
					<span class="iconfont pull-right"
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
		 
		  		]
		  	}
	  	},
	  	index: {type: Number, default: 0},
	  },
	  
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'

.selt-item
	margin-bottom: 1.5rem;
	.selt-title
		height: 3.0rem;
		line-height: 3.0rem;
		padding-left: 0.85rem;
		font-weight: 600;
		border-bottom: 1px solid #ebebeb;

.selt-item ul li
	min-height: 2.0rem;
	line-height: 2.0rem;
	font-size: 14px;
	padding: 0 0.8rem	0	1.5rem;
	border-bottom: 1px solid #ebebeb;
	span
		font-size: 24px;
		color: $ztc;
		
</style>
