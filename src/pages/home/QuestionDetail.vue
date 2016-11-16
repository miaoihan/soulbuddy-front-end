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
  	<answer-card :data="ans_best" goto="true" v-if="ans_best.is_best==1" :free="question.can_listen"></answer-card>	
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
  			<answer-card :data="obj" goto="true" :free="question.can_listen"></answer-card>	
  		</div>
  	</section>
  	<footer class="qd-footer fixed-bottom ztc"
  					@click.prevent="callpay" v-if="show_lock">
  					￥1 解锁该问题的所有回答			
  	</footer>
  	<!-- loading -->
		<div class="spinner" v-if="loading">
		  <div class="bounce1"></div>
		  <div class="bounce2"></div>
		  <div class="bounce3"></div>
		</div>
		<!-- modal -->
		<div v-if="show_modal">
			<div class="modal-bg" @click="closeModal"></div>
			<div class="pay-modal">
				<div style="border-bottom:1px solid #e7e7e7" @click="yuPay">余额支付</div>
				<div @click="wxPay(question.q_id)">微信支付</div>
			</div>	
		</div> <!-- end modal -->
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
	  		show_lock: false ,
	  		question: {},
	  		ans_best:{},
	  		ans_other:[],
	  		loading: false,
	  		show_modal: false,
			}
	  },
	  methods:{
	  	callpay(){
	  		this.show_modal = true
	  	},
	  	yuPay(){
	  		if (global.user.balance<1) alert('余额不足,请充值!');
	  		else{
	  			$.ajax({
	                url: global.domain +"/user/balance_buy_answer",
	                type:'post', 
	                dataType: 'json',
	                async:false,
	                data: {
	                	token:global.token,
	                	money:1
	                },
	                success: function(data) {
	                	// 支付成功后解锁
							      $.post(global.domain +'/question/buy_answers',
							        { token: global.token, q_id: id },
							         v => {
							        	if (v.code == 1) {
							        		// 解锁 刷新一遍
							        		$.post(global.domain +'/question/get_question_info',
										        { token: global.token,
										        	q_id: this.$route.params.id }, v => {
										        	this.question = v.data;
										        	this.show_lock = false;
										        	
										        	// if (v.data.length==1) this.show_lock = !v.data.
										        	let q = v.data.answers
										        	// console.log(q)
										        	if(q[0].is_best==1){
										        		this.ans_best = q.shift()
										        		// console.log(this.ans_best)
										        	}
										        	this.ans_other = q
										        } ,'json');
					
								        }else alert('支付失败！')
							        } ,'json');
	                }.bind(this),
	                error: function(xhr, status, err) {
	                  console.err(err.toString())
	                  alert('支付失败')
	                }.bind(this)
	            });
	  		}
	  	},
	  	closeModal(){
     	 this.show_modal = false
      },
	  	// 这里跳转支付接口
	  	wxPay(id){
	  		// alert(id)
	  		this.loading = true
	  		this.show_modal = false
	  		// 先获取订单
	  		$.ajax({
          url: global.domain +'/thirdparty/wepay',
          type:'POST', dataType: 'json',
          data:{
          	total_fee: 100,
            body: '解锁一个问答',
            open_id: global.open_id,
          },
          success: data => {
          	let vm = this;
          	let param = JSON.parse(data.data);
          	this.loading = false;
      			// 调微信支付接口
		      	wx.chooseWXPay({
					    timestamp: param.timeStamp+'', 
					    nonceStr: param.nonceStr, 
					    package: param.package, 
					    signType: param.signType, 
					    paySign: param.paySign, 
					    success: function (res) {
				        // 支付成功后解锁
					      $.post(global.domain +'/question/buy_answers',
					        { token: global.token, q_id: id },
					         v => {
					        	if (v.code == 1) {
					        		// 解锁 刷新一遍
					        		$.post(global.domain +'/question/get_question_info',
								        { token: global.token,
								        	q_id: vm.$route.params.id }, v => {
								        	vm.question = v.data;
								        	vm.show_lock = false;
								        	
								        	// if (v.data.length==1) this.show_lock = !v.data.
								        	let q = v.data.answers
								        	// console.log(q)
								        	if(q[0].is_best==1){
								        		vm.ans_best = q.shift()
								        		// console.log(this.ans_best)
								        	}
								        	vm.ans_other = q
								        } ,'json');
			
						        }else alert('支付失败！')
					        } ,'json');
						    },
						    fail: function(res){
						    	console.log(res)
						    }
							});
          },
        });
	  	}
	  },
	  ready(){
	  	// 问答详情
      $.post(global.domain +'/question/get_question_info',
        { token: global.token,
        	q_id: this.$route.params.id }, v => {
        	this.question = v.data;
        	for(let i of v.data.answers){
        		// console.log(i)
        		if (i.can_listen == false) this.show_lock = true;
        	} 
        	// if (v.data.length==1) this.show_lock = !v.data.
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
