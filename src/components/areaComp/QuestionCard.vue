<template>
  <div class="card-body">
    <div class="head">
		<div class="person-img quer-top">
			<img :src="data.queimg" class="img-body">
		</div>
		<div class="quername quer-top">
			{{data.qname}}
		</div>
		<div class="paymoney" v-if="data.type==='private'">
			已支付￥{{data.pay}}
		</div>
		<div class="paymoney" v-if="data.type==='piblic'">
			悬赏￥{{data.pay}}，{{data.answernum}}人抢答
		</div>
	</div>
	<div class="que-title">
		<h1>{{data.quetitle}}</h1>
	</div>
	<div class="que-content" v-if="isContent===true">
		<p>{{data.quecontent}}</p>
	</div>
	<div class="card-bottom">
		<span class="answer-num" v-if="data.type==='piblic'">					已有{{data.answernum}}个回答
		</span>
		<span class="answer-num" v-if="data.type==='private'">
			{{data.qname}} 直接咨询你
		</span>
		<time class="que-data">发起于{{data.date}}</time>
		<span class="dian" v-if="isContent===false">•••</span>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props:{
  	data:{
  		type:Object,
  		default(){
  			return{} 			
  		}
  	},
  	isContent:{type:Boolean,default:false}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.card-body{
	width: 100%;
	overflow: hidden;
	background-color: #fff;
}
.head{

	height: 1.55rem;
	line-height: 1.55rem;
	width: 100%;
	overflow: hidden;
}
.person-img{
	overflow: hidden;
	height: 1.55rem;
	width: 1.55rem;
	border-radius: 1.5rem;
	background-color: #eee;
	float: left;
}
.quername{
	font-size: 0.7rem;
	float: left;
	margin-left: 0.4rem;
	font-weight: 700;
}
.paymoney{
	height: 1.1rem;
	margin-top: 0.225rem;
	line-height: 1.1rem;
	font-size: 0.6rem;
	float: right;
	border:0.05rem solid #29abe2;
	border-radius: 0.25rem;
	padding: 0 0.5rem;
	color: #29abe2;
}
.que-title{
	overflow: hidden;
	width: 100%;
	margin-top:0.9rem;
	font-size: 0.80rem;
	font-weight: 700;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow:ellipsis;
	/*color: #444444;*/
}
.que-content{
	margin-top: 0.75rem;
	color: #999;
	font-size: 0.7rem;
}
.card-bottom{
	width: 100%;
	height: 2.5rem;
	line-height: 2.5rem;
	margin-top: 1rem;
	color: #999;
	border-top:0.05rem solid #e3e3e3;
	font-size: 0.55rem;
}
.answer-num{
	float: left;
}
.que-data{
	float: left;
	margin-left: 1rem;
}
.dian{
	float: left;
	margin-left: 0.85rem
}
</style>
