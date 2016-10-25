<template>
<nav-header title="提现到支付宝" left="back"></nav-header>
  <div class="wrapper">
  	<form action="post">
  		<input-box class="draw-amount padding-alipay" title="提取金额（元）：" title-color="black" text-color="black">
		</input-box>
		<div class="padding-alipay">
			<input-box class="user-num" title="支付宝账号" title-color="black" text-color="black" placeholder="请输入">
			</input-box>
			<input-box class="user-name" title="账户真实姓名" title-color="black" text-color="black" placeholder="请输入">
			</input-box>
		</div>
  	</form>
	<input class="confirm-btn far-bom" type="submit" value="确认提取">
  </div>
</template>

<script>
import InputBox from 'components/funComp/InputBox'
import NavHeader from 'components/funComp/NavHeader'
  export default{
    components: {
    	InputBox,NavHeader
    },
    data(){
      return{
        
      }
    },
    props:{

    }
  }
</script>

<style>
.padding-alipay{
	padding-right: 1.0rem;
	padding-left: 1.0rem;
	background: #ffffff;
}
.draw-amount{
	height:3.0rem;
	margin-bottom: 1.5rem;
}
.user-num{
	border-bottom: 0.05rem solid #f4f4f4
}
.confirm-btn{
	position: fixed;
  	bottom:0;
	width: 100%;
	height: 2.25rem;
	text-align: center;
	border:0;
	background-color:#2b8ff7;
	color:#fff;
	font-size:0.7rem;
	/*opacity:0.5;*/
}
</style>
