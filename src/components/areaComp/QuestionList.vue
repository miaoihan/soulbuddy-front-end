<template>
  <div class="wrapper">
  <!-- 问题列表 -->
  <!-- 其他人问题 -->
  	<section class="question-item part" v-for="que in data">
	  	<a v-link="'/question/' + que.q_id " v-if="type=='other'">
			  <div class="container-20">
			  	<title class="que-content over-2">
			  		{{que.title}}
			  	</title>
			  	<!-- <div class="nock" v-if="que.role==0"> -->
			  	<div :class="que.answer_url? 'nock':'' ">
			  		<span class="label" v-if="que.is_free">免费</span>
			  		<span class="nock-text" v-if="!que.can_listen && $route.name!='myque' && que.answer_url"
			  					@click="callpay(que.q_id,$event)">￥1元解锁该问题的所有回答</span>
			  	</div>
				</div>
					<answer-card :data="que" :index="$index" v-if="que.answer_url" :datap="datap" :is-best="isBest"></answer-card>
		</a>
		<!-- 跳转到我的问题 -->
		<a v-link="'/me/question/' + que.q_id " v-if="type=='mine'">
		  <div class="container-20">
		  	<title class="que-content over-2">
		  		{{que.title}}
		  	</title>
		  	<div class="meta" v-if="$route.name==='myque'">
		  		<span>{{ que.answer_count }} 个回答</span>
		  		<time>{{ que.create_time }}</time>
		  	</div>
		  	<!-- <div class="nock" v-if="que.role==0"> -->
			</div>
				<answer-card :data="que" :index="$index" v-if="que.answer_url"  ></answer-card>
			</a>
	</section>
	<!-- loading -->
	<div class="spinner" v-if="loading">
	  <div class="bounce1"></div>
	  <div class="bounce2"></div>
	  <div class="bounce3"></div>
	</div>
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
  		}
  	},
	  props: {
	  	data: {type: Array },
	  	isBest:{ type: Boolean },
	  	datap: {},
	  	type:{type:String, default: 'other'}
	  },
	  created(){
	  	// this.fuck = {'a':'fuck'}
	  	// 获取微信支付jsapi 参数
      $.ajax({
          url: global.domain +'/thirdparty/wepay',
          type:'POST', dataType: 'json',
          data:{
          	total_fee: 1,
            body: '测试' ,
            open_id: global.open_id,
            // open_id: global.user.open_id,
          },
          success: data => this.jsApiParams = data.data,
        });
	  },
	  methods:{
	  	// 微信支付
	  	callpay(id,e){
	  		e.preventDefault();
	  		this.loading = true;
	  		// 先获取订单
	  		$.ajax({
          url: global.domain +'/thirdparty/wepay',
          type:'POST', dataType: 'json',
          data:{
          	total_fee: 1,
            body: '测试' ,
            open_id: global.open_id,
          },
          success: data => {
          	let vm = this
          	this.loading = false;
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
					        	for(let i in vm.data){
					        		if (vm.data[i].q_id === id) 
					        			vm.data[i].can_listen = true;
					        		console.log('data-----'+vm.data)
					        		console.log('prop data-----'+vm.props.data)
					        	}
					        } ,'json');
						    },
						    fail: function(res){
						    	console.log(res)
						    }
							});
          },
        });
      } //end callpay
     },

	  	//调用微信JS api 支付
      // jsApiCall(){
      //   console.log('package is: '+this.jsApiParams.package)
      // 	console.log(this.jsApiParams+'********')
      //   console.log('timeStamp is: '+this.jsApiParams['timeStamp'])
      //   WeixinJSBridge.invoke(
      //     'getBrandWCPayRequest',{
      //     // JSON.parse(this.jsApiParams),
	     //       "appId": 'wx589465f8441939d3',     //公众号名称，由商户传入     
	     //       "timeStamp": this.jsApiParams.timeStamp+'',         //时间戳，自1970年以来的秒数     
	     //       "nonceStr" : this.jsApiParams.nonceStr, //随机串     
	     //       "package" : this.jsApiParams.package,     
	     //       "signType" : "MD5",         //微信签名方式:     
	     //       "paySign" : this.jsApiParams.paySign //微信签名 
      //       },
      //     function(res){
      //       WeixinJSBridge.log(res.err_msg);
      //       alert(res.err_code+res.err_desc+res.err_msg);
      //     }
      //   );
      // },
      //  callpay(e){ 
      //  	console.log(this.jsApiParams.package)
      //  	console.log(typeof this.jsApiParams);

      //  	console.log(this.fuck.a);
      //  	e.preventDefault();
      //   if (typeof WeixinJSBridge == "undefined"){
      //       if( document.addEventListener ){
      //           document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
      //           // console.log( WeixinJSBridgeReady.toString())
      //       }else if (document.attachEvent){
      //           document.attachEvent('WeixinJSBridgeReady', this.jsApiCall); 
      //           document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
      //       }
      //   }else{
      //       this.jsApiCall();
      //   }
      // },
      
	  
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
		border-bottom: 1px solid #ebebeb
		padding-bottom 0.9rem
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
