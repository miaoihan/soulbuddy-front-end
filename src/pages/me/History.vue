<template>
  <nav-header title="我的回答"></nav-header>
  <div class="wrapper">
  <!-- 问题列表 -->
  	<section class="question-item part" v-for="que in data">
		  <div class="q-i-title">
		  	<div class="que-content">
		  		{{que.content}}
		  	</div>
		  	<div class="nock">
		  
		  	</div>
			</div>
			<answer-card :data="que.answer"></answer-card>
		</section>
  </div>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader'
import AnswerCard from 'components/areaComp/AnswerCard.vue'
  export default{
  	components: {
	   AnswerCard,NavHeader,
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
	  						role:0,
	  						isFree: false,
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
	  						role:0,
	  						isFree: true,
	  						answer:
	  							{
	  								name:'米兰',
	  								desc:'经验达人',
	  								isbest:false,
	  								time: 78,
	  								like: 79,
	  								date: '08-17',
	  								isFree: true,
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

	.question-item
		margin-bottom: 0.5rem
		
	.q-i-title
		padding 1.15rem 1.35rem 0 1.0rem
		border-bottom: 1px solid #ebebeb
	.que-content{
		margin-bottom: 1.15rem
		font-size 15px
	}

</style>
