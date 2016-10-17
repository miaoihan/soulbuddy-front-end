<template>
<!-- seltect item -->
  	<section class="selt-item part">
	  	<div class="selt-title">
	  		{{ index+1 }}.{{data.question}}
	  	</div>
			<ul>
				<li @click="select($index+1)" v-for="answer of data.answers">
					{{answer}}
					<span class="iconfont pull-right"
								v-if="sel_index ==  $index+1" 
								>&#xe60e;</span>
				</li>
				
			</ul>
		</section><!-- end item -->
</template>

<script>
  export default{
  	components: {

	  },
	  data() {
  		return{
  			sel_index: -1,
  			
  		}
  	},
	  methods:{
  		select(option){
  			console.log(option)
  			this.sel_index = option;
  			// 将题的选项放到数组里
  			this.selarr.$set(this.index,option)
  			console.log(this.selarr)
  		}
  	},
  	ready(){
  		this.data.answers = JSON.parse(this.data.answers)
  	},
	  props:{
	  	data: {
	  		type: Object,
		  	default(){
		  		return[
		 
		  		]
		  	}
	  	},
	  	// 选择题数组
	  	selarr: {type: Array, default: null},
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
