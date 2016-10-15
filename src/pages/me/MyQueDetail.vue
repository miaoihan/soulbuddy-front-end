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
	  			{{question.intro}}
	  		</p>
	  	<div>
  	</section> <!-- end top -->
  	<!-- 最佳回答 -->
  	<answer-card :data="ans_best" v-if="que_info.best_answer_id"></answer-card>	
  	<aside class="m-other">
  		 {{ question.answers.length>0? '共有'+ans_other.length : 0}} 个回答
  	</aside>
  	<!-- 回答列表 -->
  	<section class="qd-middle" style="margin-bottom: 5.0rem">
  		<div class="answer-item" v-for="obj in answers"
  					v-if="answers">
  			<answer-card :data="obj"></answer-card>	
  		</div>
  	</section>
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
	  		best_answer_id:'',
	  		que_info:[],
	  		answer_count:'',
	  		creare_time:'',
	  		answers:''	
		}
	  },
	  methods:{
	  	
	  },
	  ready(){
	  	// 我的提问
      $.ajax({
          url: 'http://xinling.songtaxihuan.com/user/get_my_question',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
            page: 1,
            token: localStorage.token
          },
          success: data => {
          	this.que_info = data.data
          	this.answers=data.data.answer
          },
          error: err => err.toString()
        });
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
