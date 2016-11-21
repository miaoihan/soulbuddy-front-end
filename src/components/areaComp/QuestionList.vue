<template>
  <div class="wrapper">
  <!-- 问题列表 -->
  <!-- 其他人问题 -->
  	<section class="question-item part" v-for="que in data">
  	<!-- 1.其他人 -->
	  	<a v-link="'/question/' + que.q_id " v-if="type=='other'">
			  <div style="padding: 16px 20px">
			  	<title class="que-content over-2">
			  		{{que.title}}
			  	</title>
			  	<!-- <div class="nock" v-if="que.role==0"> -->
			  	<div :class="que.answer_url? 'nock':'' ">
			  		<span class="label" v-if="que.is_free">免费</span>
			  		<span class="nock-text" v-if="!que.can_listen && $route.name!='myque' && que.answer_url"
			  					@click.prevent="callpay(que.q_id)">￥1元解锁该问题的所有回答</span>
			  	</div>
				</div>
				<div class="fenge-20"></div>
				<answer-card :data="que" :index="$index" v-if="que.answer_url" :datap="datap" :is-best="isBest" :free="free"></answer-card>
		</a>

		<!-- 2.我的 -->
		<!-- 跳转到我的问题 -->
		<a v-link="'/me/question/' + que.q_id " v-if="type=='mine'">
		  <div style="padding: 16px 20px">
		  	<title class="que-content over-2">
		  		{{que.title}}
		  	</title>
		  	<div class="meta" v-if="$route.name==='myque'">
		  		<span>{{ que.answer_count }} 个回答</span>
		  		<time>{{ que.create_time }}</time>
		  	</div>
		  	<!-- <div class="nock" v-if="que.role==0"> -->
			</div>
				<answer-card :data="que" :index="$index" v-if="que.answer_url" :free="free"></answer-card>
			</a>

		</section>
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
				<div style="border-bottom:1px solid #e7e7e7" @click="yuPay(qid)">余额支付</div>
				<div @click="wxPay(qid)">微信支付</div>
			</div>	
		</div> <!-- end modal -->

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
  			jsApiParams: {},
  			fuck:{},
  			loading: false,
  			show_modal: false,
  			qid: -1,	//暂存当前需要解锁的问题
  		}
  	},
	  props: {
	  	data: {type: Array },
	  	isBest:{ type: Boolean },
	  	datap: {},
	  	type:{type:String, default: 'other'},
	  	free: false,
	  },
	  created(){
	  },
	  methods:{
	  	callpay(id){
	  		this.show_modal = true;
	  		this.qid = id
	  	},
	  	yuPay(id){
	  		if (global.user.balance<1) alert('余额不足,请充值!');
	  		else{
	  			this.loading = true;
	  			// 余额支付接口
	  			$.ajax({
	          url: global.domain +'/user/balance_buy_answer',
	          type:'POST', 
	          dataType: 'json',
	          data:{
	            token: global.token,
	            money: 1,
	          },
	          success: res => {
	          	// 支付成功后解锁
			        console.log(res);
				      $.post(global.domain +'/question/buy_answers',
				        { token: global.token, q_id: id },
				        v => {
				        	if (v.code==1) { 
				        		// 刷新问答列表
				        		for (let i in this.data) {
				        			if (this.data[i].q_id == id) {
				        				this.data[i].can_listen = true;
				        			}
				        		}
						        this.loading = false;
				        		this.show_modal = false; 
				        		alert('支付成功！')
				        	}
				        	else {alert('支付失败！'); this.loading = false;}
				        } ,'json');
	          },
	          error: err => console.error(err.toString())
	        });
	  		}
	  	},
	  	closeModal(){
     	 this.show_modal = false
      },
	  	// 微信支付
	  	wxPay(id){
	  		console.log(id)
	  		this.loading = true;
	  		// 先获取订单
	  		$.ajax({
          url: global.domain +'/thirdparty/wepay',
          type:'POST', dataType: 'json',
          data:{
          	total_fee: 100,
            body: '解锁一个问答' ,
            open_id: global.open_id,
          },
          success: data => {
          	let vm = this
          	this.loading = false;
          	this.show_modal = false
          	// this.jsApiParams = data.data
          	let param = JSON.parse(data.data);
      			// 调微信支付接口
		      	wx.chooseWXPay({
					    timestamp: param.timeStamp+'', // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
					    nonceStr: param.nonceStr, // 支付签名随机串，不长于 32 位
					    package: param.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
					    signType: param.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
					    paySign: param.paySign, // 支付签名
					    success: function (res) {
				        // 支付成功后解锁
				        console.log(res);
					      $.post(global.domain +'/question/buy_answers',
					        { token: global.token, q_id: id },
					        v => {
					        	if (v.code == 1) {
					        		// 刷新问答列表
						        	for (let i in vm.data) {
				        			if (vm.data[i].q_id == id) {
				        				vm.data[i].can_listen = true;
				        			}
				        		}
						        }else alert('支付失败！')
					        } ,'json');
						  },
					    fail: function(res){
					    	alert('支付失败！')
					    	console.log(res)
					    }
						});
          },
        });
      }, //end callpay
      
     },
     ready(){
     	let vm = this;
     	document.addEventListener('mousewheel', function (event) {//监听滚动事件
     	// alert(this.show_modal)
		    if(vm.show_modal){　　　
		    //判断是遮罩显示时执行，禁止滚屏
		       event.preventDefault();　　　　　　
		     }
			})
			document.addEventListener('touchmove', function (event) { 
     	//监听触屏事件
     	// alert(this.show_modal)
		    if(vm.show_modal){　　　
		    //判断是遮罩显示时执行，禁止滚屏
		       event.preventDefault();　　　　　　
		     }
			})

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
		// border-bottom: 1px solid #ebebeb
		// padding-bottom 0.9rem
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
