<template>
<!-- 提问 抢答 -->
	<nav-header title="提问" :ispub="true" :method="subAndCheck" left="cancel"></nav-header>
  <div class="ask wrapper">
  <form action="http://xinling.songtaxihuan.com/question/add_question" 
  			method="post"	id="askForm">
  	<input type="hidden" name="token" value="{{ token }}">
  	<input type="hidden" name="q_type" :value="0">
  	<input type="hidden" name="is_public" value="{{ is_public? 1:0 }}">
  	<div class="ask-title tbar">
  		<input name="title" type="text" placeholder="标题" >
  	</div>
  	<div class="ask-txarea-wrapper">
  		<textarea name="content" id="" placeholder="请详细描述一下你的问题" 
  							class="ask-tearea"></textarea>
  	</div>
  	<div>
	  	<div class="tbar">
	  		<span class="ask-gold" name="gold">请输入赏金金额（￥）</span>
	  		<input name="reward_money" type="text" placeholder="0" class="input-gold">
	  	</div>
	  	<aside class="tips">
				此问答板块发布问题后，最多可由三位咨询师回答，您可设定相对的赏金来答谢回答者们。收到回答后，您可设置一位最佳答案，最佳回答者将获得60%赏金，其余均分40%。将问题设为公开后，您的赏金若在5元以上，其他人收听一次，您和最佳回答者可各获得0.5元，1000次500元。
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
          url: global.domain +"/question/add_question",
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
