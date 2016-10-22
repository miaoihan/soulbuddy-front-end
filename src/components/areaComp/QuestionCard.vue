<template>
  <div class="card-body">
	  <a v-link="$route.path=='home' ?
	  					{ name:'question', params:{ qid: data.q_id }}
	  					: { name:'answer', params:{ qid: data.q_id }}">
	    <div class="head">
			<div class="person-img quer-top">
				<img :src="data.logo" class="img-body">
			</div>
			<div class="quername quer-top">
				{{data.user_name}}
			</div>
			<div class="paymoney" v-if="type=='private'">
				已支付￥{{data.pay}}
			</div>
			<div class="paymoney" v-if="type=='public'">
				悬赏￥{{data.reward_money}}，{{count? count :data.answer_count}}人抢答
			</div>
		</div>
		<div class="que-title">
			<h1>{{data.title}}</h1>
		</div>
		<div class="que-content" v-if="isContent===true">
			<p>{{data.content}}</p>
		</div>
		<div class="card-bottom">
			<span class="answer-num" v-if="type=='public'">
				已有 {{count? count :data.answer_count}} 个回答
			</span>
			<span class="answer-num" v-if="type=='private'">
				{{data.qname}} 直接咨询你
			</span>
			<time class="que-data">发起于{{data.create_time}}</time>
			<span class="dian" v-if="isContent===false">•••</span>
		</div>
		</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  ready(){
  	// console.log(this.data.q_id)
  	console.log(this.$route.url)
  },
  props:{
  	data:{
  		type:Object,
  		default(){
  			return{} 			
  		}
  	},
  	type:{type:String},
  	isContent:{type:Boolean,default:false},
  	count:{type:String,default:null},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../assets/stylus.styl'
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
	border:0.05rem solid $ztc;
	border-radius: 0.25rem;
	padding: 0 0.5rem;
	color: $ztc;
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
