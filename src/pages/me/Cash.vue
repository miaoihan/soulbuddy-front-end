<template>
<nav-header title="提现" left="back"></nav-header>
  <div class="wrapper">
  	  <div class="wrapper balance cash-padding">
  	  	<span class="num-title">账户余额（元）：</span>
  	  	<span class="num">{{balance}}</span>
  	  </div>
  </div>
  <div class="wrapper cash-padding">
  	<div class="change-body" style="border-bottom:0.05rem solid #e3e3e3">
  	<change-btn class="btn" btntext="提现到支付宝" text-color="black" url="/me/cash/ali"></change-btn>
	</div>
	<div class="change-body">
	  	<change-btn class="btn" btntext="提现到银行账户" text-color="black" url="/me/cash/alib"></change-btn>
	</div>
  </div>
  
</template>

<script>
import ChangeBtn from 'components/funComp/ChangeBtn'
import NavHeader from 'components/funComp/NavHeader';
  export default{
    components: {
    	ChangeBtn,NavHeader
    },
    data(){
      return{
        index: 1,
        balance:0
      }
    },
    ready(){
    	this.balance = global.user.balance;
    	// console.log(global.user);
    },
    props:{
      balance:{type:String,default:15.3}
    }
  }
</script>

<style>
.cash-padding{
	background:#fff;
	padding-left: 1.0rem;
	padding-right:1.0rem;
}
.top-body{
	/*height: 6.1rem;*/
	/*margin-bottom: 2.35rem;*/
}
.balance{
  margin-bottom: 1.25rem;
	height: 2.5rem;
  line-height: 2.5rem;
	border-bottom: 0.05rem solid #e3e3e3;
	/*padding-top:1.2rem;*/
	font-size: 0.75rem;
	color: black;
	font-weight: 600
}
.num-title{
	float: left;
	
}
.num{
	float: left;
}
.input-body{
	height: 3.55rem;
	line-height: 3.55rem;
	width: 100%;
}
.input-text{
	height: 1.2rem;
	width:100%;
	border:0;
	/*color:#d4d4d4;*/
	font-size: 0.95rem;
	font-weight: 600;
}
.change-body{
	font-size: 0.75rem;
	font-weight: 600
}
.btn{
	/*float:left;*/
}
</style>
