<template>
	<nav-header title="设置" left="back" right=""></nav-header>
	<change-btn class="button-top-15" btntext="心理咨询费设定" url="/me/price" v-if="identity!=0" :placeholder="answer_fee" place-color="#29ABE2"></change-btn>
	<change-btn class="button-top-15" btntext="意见反馈" url="/me/feedback"></change-btn>
	<change-btn class="button-top-1" btntext="联系我们"></change-btn>
	<change-btn class="button-top-1" btntext="关于我们" url="/abuotus"></change-btn>
	<div class="quit button-top-15 far-bom" @click="logout">退出当前帐号</div>
</template>

<script>
import ChangeBtn from 'components/funComp/ChangeBtn'
import NavHeader from 'components/funComp/NavHeader'
export default {
	components:{
		ChangeBtn,NavHeader
	},
	props:{
		
	},
  data () {
    return {
      identity:'',
      answer_fee:'',
    }
    
  },
  ready(){
  	this.answer_fee='￥ '+global.user.answer_fee
  	this.identity=global.user.identity
  },
  methods:{
    	logout(){
	       if (confirm("您确定要退出吗？")){
	       		// this.$router.go('/bind')
	       		WeixinJSBridge.call('closeWindow');
	       }
	            
	         	return false;
    }
  }
}
</script>

<style scoped>
.button-top-15{
	padding-right: 1.0rem;
	padding-left:1.0rem;
	margin-top: 0.75rem;
}
.button-top-1{
	padding-right: 1.0rem;
	padding-left:1.0rem;
	margin-top: 0.05rem;
}
.quit{
	height: 2.5rem;
	background: #fff;
	color: #e25f52;
	line-height: 2.5rem;
	text-align: center;
}
</style>
