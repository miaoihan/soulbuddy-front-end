<template>
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
	  		url1:'http://xinling.songtaxihuan.com/test/test?uid=3',
	  		url2:'http://xinling.songtaxihuan.com/user/get_my_answer',
	  		questions:[],
  		}
  	},
	  props: {
	  	data: {
	  		type: Array,
	  		default() {
	  			return [
	  					{
	  						content: '是这些球星的第一次夺冠，为啥勇士都没人哭呢。特别是新FMVP比库里更淡定的样子',
	  						pay: 5,
	  						role:0,
	  						isFree: false,
	  						answer:
	  							{
	  								name:'许雯',
	  								desc:'国家心理二级咨询师',
	  								isbest:true,
	  								time: 35,
	  								like: 168,
	  								date: '08-17',
	  								isFree: true,
	  							}
	  						
	  					},
	  					{
	  						content: '在Windows操作系统上显示良好。但是仅限于12像素和14像素。超出14像素的字基本就会出现字不够方正，锯齿明显的现象',
	  						pay: 1,
	  						role:0,
	  						isFree: true,
	  						answer:
	  							{
	  								name:'米兰',
	  								desc:'经验达人',
	  								isbest:false,
	  								time: 78,
	  								like: 79,
	  								date: '08-17',
	  								isFree: false,
	  							}
	  					},
	  				]
	  		}
	  	}
	  },
	  ready(){
	  	$.ajax({
          url: this.url1,
          type:'GET', 
          dataType: 'json',
          cache: false,
          async:false,
          success: function(data) {
            this.token = data.data
            // console.log( typeof this.token);	
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.token, status, err.toString());
          }.bind(this)
        });
	  	$.ajax({
          url: this.url2,
          type:'POST', 
          dataType: 'json',
          data: {
          	page:1,
			token:this.token,
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
