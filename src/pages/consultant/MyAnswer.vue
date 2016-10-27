<template>
<nav-header title="我的回答" left="back"></nav-header>
  <div class="wrapper far-bom">
  <!-- 问题列表 -->
  	<section class="question-item part" v-for="que in questions">
		  <div class="q-i-title">
		  	<div class="que-content">
		  		{{que.title}}
		  	</div>
		  	<div class="nock">
		  		
		  	</div>
			</div>
			<answer-card :data="que" :index="$index" :datap="user" :free="true"></answer-card>
		</section>
  </div>
</template>

<script>
  export default{
  	components: {
	   NavHeader: require('components/funComp/NavHeader'),
	   AnswerCardp: require('components/areaComp/AnswerCardp'),
	   AnswerCard: require('components/areaComp/AnswerCard'),
	  },
  	data() {
  		return{
  			ztc: '#2b8ff7',
  			token:'',
	  		questions:[],
	  		user: {}
  		}
  	},
  	created(){
  		this.user = global.user;
  	},
	  ready(){
	  	$.ajax({
          url: global.domain +'/user/get_my_answer',
          type:'POST', 
          dataType: 'json',
          data: {
	          page:1,
						token:global.token,
		  },
          cache: false,
          success: function(data) {
          	// console.log("aa"+data)
            this.questions = data.data
            // console.log(this.questions);
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.questions, status, err.toString());
          }.bind(this)
        });
	  },

	  
  }
</script>

<style scoped lang="stylus">
	@import '../../assets/stylus.styl'

	.question-item
		margin-bottom: 0.5rem
		
	.q-i-title
		padding 1.15rem 1.35rem 0 1.0rem
		border-bottom: 1px solid #ebebeb
	.que-content{
		margin-bottom: 1.15rem
		font-size 15px
	}

</style>
