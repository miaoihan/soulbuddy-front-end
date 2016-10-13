<template>
<!-- 提问 -->
	<nav-header title="提问" :ispub="true" :method="subAndCheck" left="cancel"></nav-header>
  <div class="ask wrapper">
  <form method="post"	id="askForm">
  	<input type="hidden" name="token" value="{{ token }}">
  	<input type="hidden" name="q_type" value="{{ is_qiangda? 0:1 }}">
  	<input type="hidden" name="is_public" value="{{ is_public? 1:0 }}">
  	<div class="ask-title tbar">
  		<input name="title" type="text" placeholder="标题" >
  	</div>
  	<div class="ask-txarea-wrapper">
  		<textarea name="content" id="" placeholder="请详细描述一下你的问题" 
  							class="ask-tearea"></textarea>
  	</div>
  	<div v-if="is_qiangda">
	  	<div class="tbar">
	  		<span class="ask-gold" name="gold">请输入赏金金额（￥）</span>
	  		<input name="reward_money" type="text" placeholder="0" class="input-gold">
	  	</div>
	  	<aside class="tips">
				问题有三人抢答，最佳回答获得60%的费用，其他各20%
			将问题设为公开后，答案被其他人付费收听后，你和咨询师各获得0.5元
	  	</aside>
	  </div>
  	<div class="tbar wrapper" style="margin-top: 1.0rem">
  		<span>请将该问题设为公开</span>
	  		<label class="label-switch pull-right" style="margin-top: -0.3rem">
		        <input type="checkbox" v-model="is_public">
		        <div class="checkbox"></div>
	       </label>
  	</div>
  	</form>
  </div>
</template>

<script>
  export default{
  	components: {
  		NavHeader: require('components/funComp/NavHeader'),
	  },
	  data(){
	  	return{
	  		is_public: true,
	  		is_qiangda: true,
	  		token: '',
	  		sub: '',
	  	}
	  },
	  methods:{
	  	subAndCheck(){
	  		if($('[name="title"]').val()===''){
	  			alert('标题不能为空！')
	  			return false
	  		}
	  		if($('[name="content"]').val()===''){
	  			alert('内容不能为空！')
	  			return false
	  		}
	  		if($('[name="reward_money"]').val()===''){
	  			alert('赏金不能为空！')
	  			return false
	  		}
	  		else{
	  			$.ajax({
	          url: "http://xinling.songtaxihuan.com/question/add_question",
	          type:'post', 
	          dataType: 'json',
	          cache: true,
	          data: $('#askForm').serialize(),//序列化
	          success: function(data) {
	            // console.log( data);	
	            this.$router.go('/home')
	            console.log(this.$router)
	          }.bind(this),
	          error: function(xhr, status, err) {
	          }.bind(this)
	        });
			   }
	  	}
	  },
	  created(){
	  	this.token = global.token
	  	// console.log(this.sub)
	  	// console.log(this.subAndCheck)
	  	// console.log(111)
	  	// console.log(this)
	  	// console.log(this.data)
	  	// console.log(this.methods)
	  }
	  
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'

.ask
	margin-top: 1.0rem
	margin-bottom 4.0rem
	.ask-title
		margin-bottom: 1.0rem
	.ask-txarea-wrapper
		padding 0.85rem 1.0rem
		background-color: #FFF
		margin-bottom: 1.0rem
		.ask-tearea
			border none
			height 5.0rem
			width 100%
.ask-footer
	padding 		
	
.ask-gold
	color $ztc	
	
.input-gold
	display inline-block
	width 1.8rem
	float right
	text-align center
</style>
