<template>
  <div class="wrapper" style="margin-top: .5rem;">
  <!-- 问题列表 -->
	  <section class="question-item part" v-for="que in data">

	  	<title class="que-content">
	  		{{que.content}}
	  	</title>
	  	<div class="nock">
	  		<span class="label" v-if="que.isFree">免费</span>
	  		<span class="nock-text" v-if="!que.isFree">
	  		￥{{ que.pay }} 解锁该问题的所有回答</span>
	  	</div>
			<answer-card :data="que.answer"></answer-card>
		</section>
  </div>
</template>

<script>

import AnswerCard from '../../components/areaComp/AnswerCard.vue'
  export default{
  	components: {
	   AnswerCard
	  },
  	data() {
  		return{
  			ztc: '#2b8ff7'
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
	  					{
	  						content: '是这些球星的第一次夺冠，为啥勇士都没人哭呢。特别是新FMVP比库里更淡定的样子',
	  						pay: 5,
	  						isFree: true,
	  						answer:
	  							{
	  								name:'许雯',
	  								desc:'国家心理二级咨询师',
	  								isbest:true,
	  								time: 35,
	  								like: 168,
	  								date: '08-17',
	  								isFree: true,
	  							}
	  						
	  					},
	  					{
	  						content: '在Windows操作系统上显示良好。但是仅限于12像素和14像素。超出14像素的字基本就会出现字不够方正，锯齿明显的现象',
	  						pay: 1,
	  						isFree: false,
	  						answer:
	  							{
	  								name:'米兰',
	  								desc:'经验达人',
	  								isbest:false,
	  								time: 78,
	  								like: 79,
	  								date: '08-17',
	  								isFree: false,
	  							}
	  					},
	  				]
	  		}
	  	}
	  },
	  
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'

.question-item{
	padding 1.15rem 1.35rem 0 1.0rem
	margin-bottom: 0.5rem
}

.nock
	border-bottom: 1px solid #ebebeb
	padding-bottom 0.9rem
	 .nock-text
		 	display block
		 	text-align center
		 	font-size 14px
		 	color $ztc

.label{
	display inline-block
	padding 0.12rem 0.4rem
	font-size: 0.6rem
	color #fff
	border-radius 0.25rem
	background $ztc;
}
	
.que-content{
	margin-bottom: 1.05rem
	font-size 15px
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}


</style>
