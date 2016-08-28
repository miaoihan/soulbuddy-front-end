<template>
  <div class="wrapper" style="margin-top: .5rem;">
  <!-- 问题列表 -->
	  <div class="question-item part" v-for="que in data">
	  	<div class="que-content">
	  		{{que.content}}
	  	</div>
	  	<div class="nock">
	  		<span class="label" v-if="que.isFree">免费</span>
	  		<span class="nock-text" v-if="!que.isFree">
	  		￥{{ que.pay }} 解锁该问题的所有回答</span>
	  	</div>
			<div class="best-answer">
				<!-- 回答者信息 -->
				<div class="helper-inf wrapper">
				<!-- 头像 -->
					<div class="avator pull-left">
								
					</div>
					<!-- 简介 -->
					<div style="float: left;padding: 0.1rem 0.4rem">
						<div style="">{{que.helper.name}}</div>
						<div style="font-size: 0.6rem; color: #999">{{que.helper.desc}}</div>
					</div>
					<div class="pull-right">
						<a href="#" class="button">最佳答案</a>
					</div>
				</div>
				<div class="voice-wrapper">
					<div class="voice">
						
					</div>
				</div>
				<div class="meta wrapper">
					<ul>
						<li><span>89</span> 人认为有帮助</li>
						<li>回答于 08-17</li>
						<li> · · ·</li>
					</ul>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import ztc from '../../assets/stylus.styl'
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
	  						helper:
	  							{
	  								name:'许雯',
	  								desc:'国家心理二级咨询师'
	  							}
	  						
	  					},
	  					{
	  						content: '在Windows操作系统上显示良好。但是仅限于12像素和14像素。超出14像素的字基本就会出现字不够方正，锯齿明显的现象',
	  						pay: 1,
	  						isFree: false,
	  						helper:
	  							{
	  								name:'米兰',
	  								desc:'经验达人'
	  							}
	  					},
	  				]
	  		}
	  	}
	  },
	  components: {

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
		 	color $ztc


.label{
	display inline-block
	padding 0.15rem 0.4rem
	font-size: 0.5rem
	color #fff
	border-radius 0.25rem
	background $ztc;
}
	
.que-content{
	margin-bottom: 1.05rem
}

.best-answer
	padding 0.8rem 0 1.1rem 0
	.helper-inf
		.avator
			width 2.3rem
			height 2.3rem
			border-radius 50%
			border 1px solid #ebebeb

.voice
	height 1.8rem
	margin 1.0rem 0 1.2rem 0


.meta
	ul
		li
			float left
			margin-right 1.1rem
</style>
