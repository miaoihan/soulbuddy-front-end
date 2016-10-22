<template>
		<!-- 回答组件 -->
  	<div class="answer part">
				<!-- 回答者信息 -->
				<div class="answer-inf wrapper">
				<!-- 头像 -->
					<div class="avator pull-left">
					<!-- 写两个反而更快，强迫症的自行改之 -->
							<img :src="data.logo" alt="头像" class="avator" v-if="!datap">		
							<img :src="datap.logo" alt="头像" class="avator" v-if="datap">		
					</div>
					<!-- 简介 -->
					<div style="float: left;padding: 0.25rem 0.4rem">
						<div style="font-size: 13px" v-if="!datap">{{data.user_name}}</div>
						<div style="font-size: 13px" v-if="datap">{{datap.user_name}}</div>
						<div style="font-size: 12px; color: #999" v-if="!datap">{{data.identity==1?data.user_title:'经验答人'}}</div>
						<div style="font-size: 12px; color: #999" v-if="datap">{{datap.identity==1?datap.user_title:'经验答人'}}</div>
					</div>
					<div v-if="data.is_best==1 || isBest && !setbest">
						<span class="btn-border-blue a-r-sign">最佳答案</span>
					</div>
					<div v-if="(data.is_best==0 || !isBest) && setbest" @click="addBest">
						<span class="btn-border-blue a-r-sign">设为最佳答案</span>
					</div>
					<!-- <div class="pull-right" v-if="data.is_best==0&&best=='false'" @click="addBest">
						<span class="button">设置最佳答案</span>
					</div> -->
				</div>
				<!-- voice组件 -->
				<div class="voice-wrapper">
				<!-- 双向绑定 数据同步-->
					<voice :data.sync="data" :index="index"></voice>
				</div>
				<!-- 描述 -->
				<div class="meta wrapper">
					<ul>
						<li><strong style="color: #2b8ff7">
								{{data.praise_count}}</strong> 人认为有帮助</li>
						<li>回答于 <time>{{data.create_time}}</time></li>
						<li>•••</li>
					</ul>
				</div>
			</div> <!-- end answer -->
</template>

<script>
import Voice from 'components/funComp/Voice.vue'
  export default{
	  props:{
	  	data:{type: Object,},
	  	setbest:{default:false},
	  	index:'',
	  	qid:{type:Number},
	  	logo: '',
	  	datap: {},
	  	isBest:{ type: Boolean },
	  },

	  data () {
	    return {
	      user:{},
	      answer_id:'',
	      current_user: false,
	    }
	  },
	  methods:{
	  	addBest(){
	  		$.ajax({
		          url: global.domain +'/question/set_best_answer',
		          type:'POST', 
		          dataType: 'json',
		          data: {
		          page:1,
						  token:global.token,
						  q_id:this.$route.params.id,
						  answer_id:this.data.a_id,
					  },
	          success: function(data) {
	          	this.isBest = true;
	  					this.data.is_best = 1;
	          }.bind(this),
	          error: function(xhr, status, err) {
	            console.error(rr.toString());
	          }.bind(this)
	        });
	  	}
	  },
	  ready(){
	  	console.log(this.$route.params.id)
	  	this.user = global.user
	  	// console.log(this.user+"adlfhaskfhksadfhksadkf")
	  },
	  components: {
	  	Voice
	  },

  }
</script>

<style scoped lang="stylus">
.answer
	padding 0.8rem 1.0rem
	.answer-inf
		.avator
			width 2.3rem
			height 2.3rem
			border-radius 50%
			border 1px solid #ebebeb
			
.button
	color $ztc
	border 1px solid $ztc

.voice-wrapper
	margin 1.0rem 0 1.2rem 0

.meta
	ul
		li
			float left
			margin-right 1.1rem
			font-size 13px

.a-r-sign
	position absolute
	right 1.0rem
	font-size 12px
</style>
