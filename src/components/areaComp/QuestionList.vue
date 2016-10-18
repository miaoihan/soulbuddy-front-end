<template>
  <div class="wrapper">
  <!-- 问题列表 -->
  	<section class="question-item part" v-for="que in data">
  	<a v-link="'/question/' + que.q_id " id="aa">
		  <div class="container-20">
		  	<title class="que-content over-2">
		  		{{que.title}}
		  	</title>
		  	<div class="meta" v-if="$route.name==='myque'">
		  		<span>{{ que.answer_count }} 个回答</span>
		  		<time>{{ que.create_time }}</time>
		  	</div>
		  	<!-- <div class="nock" v-if="que.role==0"> -->
		  	<div :class="que.answer_url? 'nock':'' ">
		  		<span class="label" v-if="que.is_free">免费</span>
		  		<span class="nock-text" v-if="!que.is_free && $route.name!='myque' && que.answer_url">
		  		￥{{ que.reward_money }} 解锁该问题的所有回答</span>
		  	</div>
			</div>
				<answer-card :data="que" :index="$index" v-if="que.answer_url"></answer-card>
			</a>
		</section>
  </div>
</template>

<script>

import AnswerCard from 'components/areaComp/AnswerCard.vue'
  export default{
  	components: {
	   AnswerCard
	  },
  	data() {
  		return{
  			ztc: '#2b8ff7',
  			question: {},

  			best_answer: {},
  		}
  	},
  	// ready() {
  	// 	$('.voice').hover(function(){
  	// 		$('.voice').css({'height': '6.5rem'})
  	// 	},function(){
  	// 		$('.voice').css({'height': '1.rem'})
  	// 	})
  	// },
	  props: {
	  	data: {
	  		type: Array,
	  		default() {
	  			return [
	  				
	  				]
	  		}
	  	}
	  },
  }
</script>

<style scoped lang="stylus">
	@import '../../assets/stylus.styl'

	.question-item
		margin-bottom: 0.5rem
		
	.q-i-title
		padding 1.15rem 1.35rem 0 1.0rem

	.nock
		overflow hidden
		border-bottom: 1px solid #ebebeb
		padding-bottom 0.9rem
		 .nock-text
			 	display block
			 	text-align center
			 	font-size 13px
			 	color $ztc
		
	.que-content{
		margin-bottom: 0.50rem
		font-size 15px
	}
	
	.meta
		color #999
		font-size: 12px
		span
			display inline-block
			margin-right: 1.0rem
	a 
		width 100%
		
	a:hover, a:visited, a:link, a:active {
    text-decoration: none;
    color: #444
}
</style>
