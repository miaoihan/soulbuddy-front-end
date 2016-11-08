<template>
<nav-header title="我的余额" left="back"></nav-header>
  <div class="far-bom">
  	<div class="balance-body bal-padding wrapper">
  		<span class="bal-title">账户余额（元）</span>
  		<div class="bal-num">
  			<span class="money-count">{{balance}}</span>
  			<a v-link="'/me/cash'" class="tixian-btn">提现</a>
  		</div>
  	</div>
  	<div class="recharge wrapper bal-padding">
  		<div class="recharge-title wrapper">充值(微信钱包)</div>
  		<div class="money-body wrapper">
  			<div class="top-money wrapper">
  				<div class="money-sel margin-right wrapper" @click="change(5)"><div :class="{la:money==5}">￥5</div></div>
	  			<div class="money-sel margin-right wrapper" @click="change(10)"><div :class="{la:money==10}">￥10</div></div>
	  			<div class="money-sel margin-right wrapper" @click="change(50)"><div :class="{la:money==50}">￥50</div></div>
	  			<div class="money-sel margin-right wrapper" @click="change(100)"><div :class="{la:money==100}">￥100</div></div>
  			</div>
  			
  			<div class="money-sel margin-right margin-top wrapper" @click="change(200)"><div :class="{la:money==200}">￥200</div></div>
  			<div class="money-sel margin-right margin-top wrapper" @click="change(500)"><div :class="{la:money==500}">￥500</div></div>
  		</div>
  		<input value="立即充值" class="chongzhi" @click="chongzhi" type="submit">
  	</div>
  	<!-- loading -->
		<div class="spinner" v-if="loading">
		  <div class="bounce1"></div>
		  <div class="bounce2"></div>
		  <div class="bounce3"></div>
		</div>
  </div>
</template>

<script>
import InputBox from 'components/funComp/InputBox'
import NavHeader from 'components/funComp/NavHeader';
  export default{
    components: {
    	InputBox,NavHeader
    },
    data(){
      return{
        money:0,
        balance:0,
        loading: false
      }
    },
    ready(){
    	this.balance = global.user.balance;
    	// console.log(global.user);
    },
    methods:{
	  	change(i){
	  		this.money = i;
	  		// console.log(this.money)
	  	},
	  	chongzhi(){
	  		this.loading = true;
	  		// 先获取订单
	  		$.ajax({
          url: global.domain +'/thirdparty/wepay',
          type:'POST', dataType: 'json',
          data:{
          	total_fee: this.money,
            body: '充值'+this.money+'元' ,
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
				        // 充值成功后返回我的
				        $.ajax({
				          url: global.domain +'/user/user_recharge',
				          type:'POST', 
				          dataType: 'json',
				          data:{
				            token: global.token,
				            money: vm.money,
				            recharge_channel:'wx',
				          },
				          success: data => {
				          	if (recharge_status==1) {
				          		vm.balance = vm.balance+vm.money
				          		alert('充值成功!')
				        			vm.$router.go('/me')
				        		}else alert('充值失败！')
				          },
				          error: err => console.error(err.toString())
				        });
				        
					    },
					    fail: function(res){
					    	console.log(res)
					    }
						});
          },
        });
	  	},
	  },
  }
</script>

<style>
.la{
	background: #2b8ff7;
	color: #fff;
	height: 100%;
	width: 100%;
	
}
.bal-padding{
	background:#fff;
	padding-left: 1.0rem;
	padding-right:1.0rem;
}
.balance-body{
	height:6.75rem;
	width:100%;
}
.bal-title{
	display: block;
	margin-top: 1.15rem;
	color: #cfcfcf;
	font-size: 0.55rem;
}
.bal-num{
	height: 1.6rem;
	line-height: 1.6rem;
	width: 100%;
	margin-top: 1.6rem;
}
.money-count{
	float: left;
	font-size: 1.6rem;
	color:black;
	font-weight: 700;
}
.tixian-btn{
	margin-top: 0.15rem;
	float: right;
	height:1.3rem;
	font-size: 0.55rem;
	color:#fff;
	line-height: 1.4rem;
	border:0;
	border-radius: 0.25rem;
	width: 2.6rem;
	background: #2b8ff7;
	text-align: center;
}
.recharge{
	margin-top: 1.0rem;
	/*height: 11.0rem;*/
	width:100%;
}
.recharge-title{
	height: 2.5rem;
	width: 100%;
	line-height: 2.5rem;
	font-size: 0.75rem;
	color: black;
	/*border-bottom: 1px solid #e3e3e3*/
}
.money-body{
	height: 6.0rem;
	border-bottom: 1px solid #e3e3e3;
	/*margin-top: 1.5rem;*/
	border-bottom: 0.025rem solid #e3e3e3;
	/*margin-bottom: 1.1rem;*/
}

.money-sel{
	width: 18%;
	height: 1.6rem;
	border:0.05rem solid #2b8ff7;
	color:#2b8ff7;
	border-radius: 0.25rem;
	line-height: 1.6rem;
	text-align: center;
}
.click-on{
	background:  #2b8ff7;
	/*color: #fff;*/
	/*width: 3.0rem;*/
	/*height: 1.6rem;*/
	width: 3.0rem;
	height: 1.6rem;
	border:0.05rem solid #2b8ff7;
	color:#fff;
	border-radius: 0.25rem;
	line-height: 1.6rem;
	text-align: center;
}
.chongzhi{
	height:2.5rem;
	width: 100%;
	border:0;
	background: #fff;
	font-size: 0.7rem;
	color: #2b8ff7;
	font-weight: 600;
	text-align: center;
}
.margin-right{
	margin-right: 0.75rem;
	float: left;
}
.margin-top{
	/*display: block;*/
	margin-top: 0.8rem;
	/*margin-right: 0.75rem;*/
	/*float: left;*/
}
</style>
