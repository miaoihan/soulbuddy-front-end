<template>
<!-- 问题详情 -->
  <div>
  	<section class="qd-top part">
	  	<div class="container">
	  		<div class="top-aut">
	  			<span class="avator pull-left" style="height: 1.5rem; width: 1.5rem">
	  				<img src="" alt="">
	  			</span>
					<span style="font-size: 13px;margin-left: 0.45rem">王小喵</span>
					<time class="pull-right" style="font-size: 13px; color: #999">08-14</time>
	  		</div>
	  		<h1 style="margin-top: 1.0rem">
	  			经常不由自主的想起以前的个人经历，会很愤怒，担心再有这样的暴力倾向。请问为什么会这样？如何改善？
	  		</h1>
	  		<p style="font-size: 13px; margin-top:0.65rem;color: #999">
	  			这是真实的，但是法律上我还不是他的女儿。（这个很复杂，总之还不是，但是总有一天会是的）所以没法证明，也不想透露他个人信息。 我的号不是盈利号，就算得到关注也没什么实际好处。而且我无才，也不需要让很多人看到我的话，学到知识。 我也不用通过
	  		</p>
	  	<div>
  		<!-- 最佳回答 -->
  	</section> <!-- end top -->
  	<answer-card :data="best"></answer-card>	
  	<aside class="m-other">
  		其他 {{ data.length }} 个回答
  	</aside>
  	<!-- 回答列表 -->
  	<section class="qd-middle" style="margin-bottom: 5.0rem">
  		<div class="answer-item" v-for="obj in data">
  			<answer-card :data="obj"></answer-card>	
  		</div>
  	</section>
  	<footer class="qd-footer fixed-bottom ztc"
  					@click="unlock"
  					v-if="lock">
  		￥{{ money }} 解锁该问题的所有回答
  	</footer>
  </div>
</template>

<script>
  export default{
  	components: {
  		AnswerCard: require('components/areaComp/AnswerCard')
	  },
	  data(){
	  	return{
	  		money: 1,
	  		lock: true 
			}
	  },
	  methods:{
	  	// 这里跳转支付接口
	  	unlock(){
	  		this.lock = false
	  		this.best.isFree = true
	  		for(let i in this.data){
	  			// console.log(obj)
	  			this.data[i].isFree = true
	  		}	
	  	}
	  },
	  props:{
	  	best:{
		  	type: Object,
		  	default(){
		  		return {
						name:'许雯',
						desc:'国家心理二级咨询师',
						isbest:true,
						time: 35,
						like: 168,
						date: '08-17',
						isFree: false,
					}
				}
			},
	  	data: {
	  		type: Array,
		  	default(){
		  		return[
		  			{
							name:'米兰',
							desc:'经验达人',
							isbest: false,
							time: 78,
							like: 79,
							date: '08-17',
							isFree: false,
						},
						{
							name:'米兰',
							desc:'经验达人',
							isbest: false,
							time: 48,
							like: 79,
							date: '08-17',
							isFree: false,
						},
						{
							name:'米兰',
							desc:'经验达人',
							isbest: false,
							time: 38,
							like: 79,
							date: '08-17',
							isFree: false,
						},
						{
							name:'米兰',
							desc:'经验达人',
							isbest: false,
							time: 43,
							like: 79,
							date: '08-17',
							isFree: false,
						},
		  		]
		  	}
	  	}
	  },
	  
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'

.qd-top
	border-bottom: 1px solid #e3e3e3
	.top-aut
		height 1.5rem
		line-height: 1.5rem

.m-other
	margin-top:24px; 
	margin-bottom: 0.7rem;
	font-size: 13px
	color #999
	
.answer-item
	margin-bottom 1.0rem

</style>
