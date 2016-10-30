<template>
	<nav-header title="心理咨询费设定" left="back"></nav-header>
	<div class="price-box container-20 wrapper">
		<span class="price-title">
			请输入您的单次心理咨询价格（￥）
		</span>
		<input class="price-in" type="text" placeholder="0" v-model="price">
	</div>
	<div class="container-20-lr hint-text">
		此价格为用户向您咨询时，您的单次语音回答的价格。如果您未设定该价格，用户将无法向您发起咨询。
	</div>
	<div class="submitp-btn wrapper text-center" @click="submit">
		<span style="opacity:1" v-if="price">确定</span>
		<span style="opacity:0.4" v-if="!price">确定</span>
	</div>
</template>

<script>
import InputBox from 'components/funComp/InputBox'
import ChangeBtn from 'components/funComp/ChangeBtn'
import SelectBtn from 'components/funComp/SelectBtn'
import NavHeader from 'components/funComp/NavHeader';
  export default{
    components: {
    	InputBox,ChangeBtn,SelectBtn,NavHeader
    },
    data(){
      return{
      	price: null,
      	opacity:'0.4',
      	backUrl: '',
      }
    },
    ready(){
     if(this.price){
     	this.opacity=1
     }
     this.$router.beforeEach(function (transition) {
	   	// alert(222)
		   // console.log('成功浏览到: ' + transition.to.path)
		   // this.backUrl = transition.to.path;
		   this.$router.go(transition.to.path+'?price='+this.price);
		 })
    },
    methods:{
      submit(){
      	if (!this.price) return;
      	// 设置资费
	      $.post(global.domain +'/user/set_serivce_fee',
	        { answer_fee: this.price, 
	        	token: global.token,},
	        v => {
	        	switch(v.code){
	        		case 1:
	        			window.history.go(-1);
	        	}
	        } ,'json');
	      }
    }
  }
</script>

<style scoped >
.price-box{
	height:6.75rem;
	width:100%;
	background: #fff
}
.price-title{
	font-size: 0.6rem;
}
.price-in{
	width:100%;
	height: 2.4rem;
	margin-top: 1rem;
	border:0; 
	font-family: SFUIText-Semibold;
	font-size: 40px;
	color: #262626;
}
.hint-text{
	margin-top: 0.55rem;
	margin-bottom: 2.0rem;
	font-size: 11px;
	color: #999999;
}
.submitp-btn{
	font-size: 14px;
	color: #FFFFFF;
	width: 100%;
	height: 2.5rem;
	line-height: 2.5rem;
	background:#2b8ff7;
}
</style>
