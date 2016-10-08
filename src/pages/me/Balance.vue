<template>
  <div>
  	<div class="balance-body bal-padding wrapper">
  		<span class="bal-title">账户余额（元）</span>
  		<div class="bal-num">
  			<span class="money-count">{{balance}}</span>
  			<button class="tixian-btn">提现</button>
  		</div>
  	</div>
  	<div class="recharge wrapper bal-padding">
  		<div class="recharge-title wrapper">充值(微信钱包)</div>
  		<div class="money-body wrapper">
  			
  		</div>
  		<input type="submit" value="立即充值" class="chongzhi">
  	</div>
  </div>
</template>

<script>
import InputBox from 'components/funComp/InputBox'
  export default{
    components: {
    	InputBox
    },
    data(){
      return{
        
      }
    },
    props:{
      balance:{type:String,default:325}
    }
  }
</script>

<style>
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
	line-height: 1.3rem;
	border:0;
	border-radius: 0.25rem;
	width: 2.6rem;
	background: #2b8ff7;
}
.recharge{
	margin-top: 1.0rem;
	height: 11.0rem;
	width:100%;
}
.recharge-title{
	height: 2.5rem;
	width: 100%;
	line-height: 2.5rem;
	font-size: 0.75rem;
	color: black;
	border-bottom: 0.025rem solid #e3e3e3
}
.money-body{
	height: 6.0rem;
	border-bottom: 0.025rem solid #e3e3e3
}
.chongzhi{
	height:2.5rem;
	width: 100%;
	border:0;
	background: #fff;
	font-size: 0.7rem;
	color: #2b8ff7;
	font-weight: 600
}
</style>
