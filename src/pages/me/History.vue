<template>
<nav-header title="我听过的问题" left="back"></nav-header>
  <div class="wrapper">
  <!-- 问题列表 -->
  	<section class="question-item part" v-for="que in questions">
		  <div class="q-i-title">
		  	<div class="que-content">
		  		{{que.title}}
		  	</div>
		  	<div class="nock">
		  
		  	</div>
			</div>
			<answer-card :data="que.answer"></answer-card>
		</section>
  </div>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader'
import AnswerCard from 'components/areaComp/AnswerCard.vue'
  export default{
  	components: {
	   AnswerCard,NavHeader,
	  },
  	data() {
  		return{
  			ztc: '#2b8ff7',
  			token:'',
	  		url2:'http://xinling.songtaxihuan.com/user/get_my_answer',
	  		questions:[],
  		}
  	},
	  ready(){
	  	$.ajax({
          url: this.url2,
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
