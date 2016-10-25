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
			  		<span class="nock-text" v-if="!que.is_free && $route.name!='myque' && que.answer_url"
			  					@click="callpay($event)">
			  		￥1元解锁该问题的所有回答</span>
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
  		}
  	},
	  props: {
	  	data: {type: Array },
	  	isBest:{ type: Boolean },
	  	datap: {},
	  	type:{type:String, default: 'other'}
	  },
	  created(){
	  	// 获取微信支付jsapi 参数
      $.ajax({
          url: global.domain +'/thirdparty/wepay',
          type:'POST', dataType: 'json',
          success: data => this.jsApiParams = data.data,
        });
	  },
	  methods:{
	  	//调用微信JS api 支付
      // jsApiCall(){
      // 	console.log(para)
      //   // console.log(WeixinJSBridge)
      //   WeixinJSBridge.invoke(
      //     'getBrandWCPayRequest',{
      //     // <?php echo $jsApiParameters; ?>,
      //     // JSON.parse(this.jsApiParams),
	     //       "appId": this.jsApiParams.appId,     //公众号名称，由商户传入     
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
      //  	console.log(this.jsApiParams);
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
      callpay(e){
      	e.preventDefault();
      	wx.chooseWXPay({
			    timestamp: 1477201703, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
			    nonceStr: '1', // 支付签名随机串，不长于 32 位
			    package: 'prepay_id=1', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
			    signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
			    paySign: '8156CB2BCDC632F1A97CBB85DE374C69', // 支付签名
			    success: function (res) {
			        // 支付成功后的回调函数
			        console.log(res)
			    },
			    fail: function(res){
			    	console.log(res)
			    }
				});
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
