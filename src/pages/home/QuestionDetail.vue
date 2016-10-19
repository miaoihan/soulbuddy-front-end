<template>
<!-- 问题详情 -->
<nav-header title="问题详情" left="back"></nav-header>
  <div>
  	<section class="qd-top part">
	  	<div class="container-20" style="border-bottom: 1px solid #e3e3e3">
	  		<div class="top-aut">
	  			<span class="avator pull-left" style="height: 1.5rem; width: 1.5rem">
	  				<img :src="question.logo" alt="">
	  			</span>
					<span style="font-size: 13px;margin-left: 0.45rem">{{question.user_name}}</span>
					<time class="pull-right" style="font-size: 13px; color: #999">{{question.creare_time}}</time>
	  		</div>
	  		<h1 style="margin-top: 1.0rem">
	  			{{question.title}}
	  		</h1>
	  		<p style="font-size: 13px; margin-top:0.65rem;color: #999">
	  			{{question.content}}
	  		</p>
	  	<div>
  	</section> <!-- end top -->
  	<!-- 最佳回答 -->
  	<answer-card :data="ans_best" v-if="ans_best.is_best==1"></answer-card>	
  	<aside class="m-other" v-if="ans_best.is_best!=1">
  		 {{ question.answers.length>0? '共有 '+question.answers.length : 0}} 个回答
  	</aside>
  	<aside class="m-other" v-if="ans_best.is_best==1">
  		 {{'其他 '+(ans_other.length)}} 个回答
  	</aside>
  	<!-- 回答列表 -->
  	<section class="qd-middle" style="margin-bottom: 5.0rem">
  		<div class="answer-item" v-for="obj in ans_other"
  					v-if="question.answers">
  			<answer-card :data="obj"></answer-card>	
  		</div>
  	</section>
  	<footer class="qd-footer fixed-bottom ztc"
  					@click="unlock"
  					v-if="lock">
  		￥{{ question.reward_money }} 解锁该问题的所有回答
  	</footer>
  </div>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader'
  export default{
  	components: {
  		AnswerCard: require('components/areaComp/AnswerCard'),NavHeader
	  },
	  data(){
	  	return{
	  		money: 1,
	  		lock: true ,
	  		question: {},
	  		ans_best:{},
	  		ans_other:[]
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
	  ready(){
	  	// 问答详情
      $.post(global.domain +'/question/get_question_info',
        { token: global.token,
        	 q_id: this.$route.params.id },
        v => {
        	this.question = v.data; 
        	let q = v.data.answers
        	// console.log(q)
        	if(q[0].is_best==1){
        		this.ans_best = q.shift()
        		// console.log(this.ans_best)
        	}
        	this.ans_other = q
        } ,'json');
	  }
	  
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'

.qd-top
	
	.top-aut
		height 1.5rem
		line-height: 1.5rem
		margin-top: 1.0rem

.m-other
	margin-top:24px; 
	margin-bottom: 0.7rem;
	margin 1.2rem 0 .7rem 1.0rem
	font-size: 13px
	color #999
	
.answer-item
	margin-bottom 1.0rem

</style>
