<template>
<!-- 问题详情 -->
<nav-header title="问题详情" left="back"></nav-header>
  <div>
  	<section class="qd-top part">
	  	<div class="container-20" style="border-bottom: 1px solid #e3e3e3">
	  		<div class="top-aut">
	  			<span class="avator pull-left" style="height: 1.5rem; width: 1.5rem">
	  				<img :src="question.logo" alt="" class="avator">
	  			</span>
					<span style="font-size: 13px;margin-left: 0.45rem">{{question.user_name}}</span>
					<time class="pull-right" style="font-size: 13px; color: #999">{{question.create_time}}</time>
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
  	<answer-card :data="ans_best" v-if="ans_best.is_best==1" 
  							 :free="true" goto="true"></answer-card>	
  	<aside class="m-other" v-if="ans_best.is_best!=1">
  		 {{ question.answers.length>0? '共有 '+ans_other.length : 0}} 个回答
  	</aside>
  	<aside class="m-other" v-if="ans_best.is_best==1">
  		 {{'其他 '+(ans_other.length)}} 个回答
  	</aside>
  	<!-- 回答列表 -->
  	<section class="qd-middle" style="margin-bottom: 5.0rem">
  		<div class="answer-item" v-for="obj in ans_other"
  					>
  			<answer-card :data="obj" :setbest="true" :free="true" :is-null="isNull" :index="$index"
  									 :is-set.sync="isSet" goto="true"></answer-card>	
  		</div>
  	</section>
  </div>
</template>

<script>
  export default{
  	components: {
  		AnswerCard: require('components/areaComp/AnswerCard'),
  		NavHeader: require('components/funComp/NavHeader')
	  },
	  data(){
	  	return{
	  		money: 1,
	  		lock: true ,
	  		question: {},
	  		ans_best:{},
	  		ans_other:[],
	  		q_id:null,
	  		isNull:false,
	  		isSet:false	
			}
	  },
	  methods:{
	  
	  },
	  ready(){
	  	//问答详情
      $.post(global.domain +'/question/get_question_info',
        { token: global.token,
          q_id: this.$route.params.id },
        v => {
        	this.question = v.data; 
        	let q = this.question.answers
        	// console.log(q+'------')
        	// 如果第一个是最佳答案
        	if(q[0].is_best==1){
        		this.ans_best=q.shift()
        		this.isNull=true
        		// alert(this.isNull)
        	}
        	// this.ans_best.is_best=1
        	// console.log(this.ans_best)
        	this.ans_other = q
        	// console.log(this.ans_other)
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
		// margin-top: 1.0rem

.m-other
	margin-top:24px; 
	margin-bottom: 0.7rem;
	margin 1.2rem 0 .7rem 1.0rem
	font-size: 13px
	color #999
	
.answer-item
	margin-bottom 1.0rem

</style>
