<template>
<nav-header title="提现到银行账户" left="back"></nav-header>
  <div class="wrapper">
  	<form method="post" id="editform">
  		<input type="hidden" name="token" :value="token">
  		<input type="hidden" name="withdraw_channel" :value="1">
  		<input-box class="draw-amount padding-alipay" title="提取金额（元）：" title-color="black" text-color="black" name="money">
		</input-box>
		<div class="padding-alipay">
			<input-box class="user-num" title="银行账号" title-color="black" text-color="black" placeholder="请输入" name="account">
			</input-box>
			<input-box class="user-name" title="账户真实姓名" title-color="black" text-color="black" placeholder="请输入" name="true_name">
			</input-box>
			<input-box class="user-name" title="账户银行" title-color="black" text-color="black" placeholder="请输入" name="account_bank">
			</input-box>
			<input-box class="user-name" title="银行开户行" title-color="black" text-color="black" placeholder="请输入" name="open_bank">
			</input-box>
		</div>
  	</form>
	<input class="confirm-btn" type="button" value="确认提取" @click="cashAlipay">
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
        token:'',
        data:{}
      }
    },
    props:{

    },
    ready(){
    	this.token = localStorage.token
    },
    methods:{
    	cashAlipay(){
    		
    		if($('[name="money"]').val()===''){
	          alert('提取金额不能为空！')
	          return false 
	        }
	        if($('[name="account"]').val()===''){
	          alert('银行帐号不能为空！')
	          return false 
	        }
	        if($('[name="true_name"]').val()===''){
	          alert('真实姓名不能为空！')
	          return false 
	        }
	        if($('[name="account_bank"]').val()===''){
	          alert('开户银行不能为空！')
	          return false 
	        }
	        if($('[name="open_bank"]').val()===''){
	          alert('银行开户行不能为空！')
	          return false 
	        }
	        else{
		        $.ajax({
		            url: global.domain +"/user/user_withdraw",
		            type:'post', 
		            dataType: 'json',
		            cache: true,
		            async:false,
		            data: $('#editform').serialize(),//序列化
		            success: function(data) {
		            	// this.data=data
		            	// console.log(data.code)
		            	if(data.code==1){
		            		alert('提现成功') 
		            		// alert(data.msg) 
		            	}else{
		            		alert('提现失败')
		    				// this.$router.go('/me')
		            	}
		            }.bind(this),
		            error: function(xhr, status, err) {
		              alert('提现失败')
		            }.bind(this)
		        });
	        }
    	}
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
  bottom: 0;
	width: 100%;
	height: 2.5rem;
	text-align: center;
	border:0;
	background-color:#2b8ff7;
	color:#fff;
	font-size:0.7rem;
	z-index: 100
	/*opacity:0.5;*/
}
</style>
