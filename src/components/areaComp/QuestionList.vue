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

			<div class="answer">
				<!-- 回答者信息 -->
				<div class="answer-inf wrapper">
				<!-- 头像 -->
					<div class="avator pull-left">
								
					</div>
					<!-- 简介 -->
					<div style="float: left;padding: 0.25rem 0.4rem">
						<div style="font-size: 13px">{{que.answer.name}}</div>
						<div style="font-size: 12px; color: #999">{{que.answer.desc}}</div>
					</div>
					<div class="pull-right" v-if="que.answer.isbest">
						<a href="#" class="button ">最佳答案</a>
					</div>
				</div>
				<!-- voice组件 -->
				<div class="voice-wrapper">
					<voice :data="que"></voice>
				</div>
				<div class="meta wrapper">
					<ul>
						<li><strong style="color: #2b8ff7">
								{{que.answer.like}}</strong> 人认为有帮助</li>
						<li>回答于 <time>{{que.answer.data}}</time></li>
						<li>•••</li>
					</ul>
				</div>
			</div> <!-- end answer -->
		</section>
  </div>
</template>

<script>
import Voice from '../../components/funComp/Voice.vue'
  export default{
  	data() {
  		return{
  			ztc: '#2b8ff7'
  		}
  	},
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
	  								isbest:'true',
	  								time: 45,
	  								like: 168,
	  								data: '08-17'
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
	  								isbest:'true',
	  								time: 78,
	  								like: 79,
	  								data: '08-17'
	  							}
	  					},
	  				]
	  		}
	  	}
	  },
	  components: {
	  	Voice
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

.answer
	padding 0.8rem 0 1.1rem 0
	.answer-inf
		.avator
			width 2.3rem
			height 2.3rem
			border-radius 50%
			border 1px solid #ebebeb
			
.button
	color $ztc
	border 1px solid $ztc

.voice-wrapper
	margin 1.0rem 0 1.2rem 0


.meta
	ul
		li
			float left
			margin-right 1.1rem
			font-size 13px
</style>
