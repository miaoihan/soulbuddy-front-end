<template>
  <div>
  	<div class="swiper wrapper">
      <roll-card :data="swiperList"></roll-card>
  	</div>
		<aside class="pangbai">
			<span class="heng"></span>
	  	<span style="margin:0 10px 0">阅读精选</span> 
	  	<span class="heng"></span>
  	</aside>
  	<div class="article-list">
  		<article-list :data="readList"></article-list>
  		<div class="seemore">
  			查看更多精选阅读
  		</div>
  	</div> <!-- end article-list -->
  	<div class="eva">
  		<eva-card :data="evaList"></eva-card>
  	</div>
  	<aside class="pangbai">
			<span class="heng"></span>
	  	<span style="margin:0 10px 0">问答精选</span> 
	  	<span class="heng"></span>
  	</aside>
  	<div class="que-list">
  		<question-list :data="queList"></question-list>	
  		<div class="seemore">
  			查看更多精选问答
  		</div>
  	</div>
  </div>
</template>

<script>
  export default{
  	components: {
  		RollCard: require('components/funComp/RollCard'),
  		ArticleList: require('components/areaComp/ArticleList'),
      QuestionList: require('components/areaComp/QuestionList'),
  		EvaCard: require('components/funComp/EvaCard'),
	  },
    data(){
      return {
        
        // token: '',
        domain: 'http://xinling.songtaxihuan.com',
  			url1:"http://xinling.songtaxihuan.com/test/test?uid=3",
        lunboURL:'http://xinling.songtaxihuan.com/article/get_top_article',
        readURL:'http://xinling.songtaxihuan.com/article/get_choice_article',
        queURL:'http://xinling.songtaxihuan.com/question/get_choice_question',

  			queList:[],  			
  			readList:[],
        evaList: []

      }
    },
	  ready(){
      
      // 异步获取token
      $.ajax({
          url: "http://xinling.songtaxihuan.com/test/test?uid=3",
          type:'GET', 
          dataType: 'json',
          cache: true,
          async:false,
          success: function(data) {
            this.token = data.data
            // console.log( typeof this.token); 
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.token, status, err.toString());
          }.bind(this)
        });

	  	// 阅读精选
	  	$.ajax({
          url: this.readURL,
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
          	cat_id: 1
          },
          success: function(data) {
          	this.readList = data.data;
          	console.log(this.readList)
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(readList, status, err.toString());
          }.bind(this)
        });

	  	// 问答精选
	  	$.ajax({
          url: this.queURL,
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
          	token: this.token
          },
          success: function(data) {
          	this.queList = data.data;
          	console.log("que:"+this.queList)
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.queList, status, err.toString());
          }.bind(this)
        });

      // 测评精选
      $.ajax({
          url: this.domain +'/access/get_choice_access',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
            count: 3,
          },
          success: data => this.evaList = data.data,
          error: err => err.toString()
        });

	  	// 一条问答信息
	  	$.ajax({
          url: 'http://xinling.songtaxihuan.com/question/get_question_info',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
          	token: this.token,
          	// q_id: this.data.q_id,
          	q_id: 2,
          },
          success: function(data) {
          	this.question = data.data;
          	console.log("que:"+this.question)
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.question, status, err.toString());
          }.bind(this)
        });
	  },

    props: {
      token: '',
      swiperList: {
        type: Array,
        default() {
          return [
            
            ]
        }
      }
    },
	  
  }
</script>

<style scoped lang="stylus">

	.que-list{
		margin-bottom: 5.0rem;
	}
 
 .eva{
   margin-top 30px
 }
  


</style>
