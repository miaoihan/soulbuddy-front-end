<template>
		<!-- 回答组件 -->
  	<div class="answer part">
				<!-- 回答者信息 -->
				<div class="answer-inf wrapper">
				<!-- 头像 -->
					<div class="avator pull-left">
							<img :src="user.logo" alt="头像" class="avator">		
					</div>
					<!-- 简介 -->
					<div style="float: left;padding: 0.25rem 0.4rem">
						<div style="font-size: 13px">{{user.user_name}}</div>
						<div style="font-size: 12px; color: #999">{{user.intro}}</div>
					</div>
					<div class="pull-right" v-if="data.is_best==1">
						<span class="button">最佳答案</span>
					</div>
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
	  	data:{type: Object},
	  		index:'',
	  		qid:{type:Number},
	  	},

	  created(){
	  	// const qid = this.$route.params.id
	  	if (true) {}
	  },
	  data () {
	    return {
	      user:{},
	      answer_id:'',
	      current_user: false
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
						  q_id:this.qid,
						  answer_id:this.answer_id,
					  },
	          success: function(data) {
	          	this.best='true';
	  			this.data.is_best=1;
	          }.bind(this),
	          error: function(xhr, status, err) {
	            console.error(err.toString());
	          }.bind(this)
	        });
	  	}
	  },
	  ready(){
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

</style>
