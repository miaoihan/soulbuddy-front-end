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
			<answer-card :data="que" :free="true"></answer-card>
		</section>
		<div class="seemore" @click="seeMore('que')" v-if="questions.length!=0">
  			查看更多听过的问题
  	</div>
  	<div class="seemore" v-if="questions.length==0">
  			暂无内容~
  	</div>
  	<div class="bom-div"></div>
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
	  		questions:[],
	  		que_page:1
  		}
  	},
	  ready(){
	  	$.ajax({
          url: global.domain +'/user/get_my_listen_question',
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
	  methods:{
	  	seeMore(type){
        console.log(type)
          $.post(global.domain +'/user/get_my_listen_question',
            { token: global.token, page: ++this.que_page, }, v => 
            this.questions = this.questions.concat(v.data), 'json');
      },
	  }
	  
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
