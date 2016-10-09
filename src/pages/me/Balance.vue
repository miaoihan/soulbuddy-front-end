<template>
  <div>
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
  				<div class="money-sel margin-right wrapper" @click="change(1)"><div :class="{la:status==1}">￥5</div></div>
	  			<div class="money-sel margin-right wrapper" @click="change(2)"><div :class="{la:status==2}">￥10</div></div>
	  			<div class="money-sel margin-right wrapper" @click="change(3)"><div :class="{la:status==3}">￥50</div></div>
	  			<div class="money-sel margin-right wrapper" @click="change(4)"><div :class="{la:status==4}">￥100</div></div>
  			</div>
  			
  			<div class="money-sel margin-right margin-top wrapper" @click="change(5)"><div :class="{la:status==5}">￥200</div></div>
  			<div class="money-sel margin-right margin-top wrapper" @click="change(6)"><div :class="{la:status==6}">￥500</div></div>
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
        status:0
      }
    },
    props:{
      balance:{type:String,default:325}
    },
    methods:{
	  	change(i){
	  		this.status = i;
	  		console.log(this.status)
	  	}
	  },
  }
</script>

<style>
.la{
	background:  #2b8ff7;
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
<<<<<<< HEAD
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
	font-weight: 600
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
