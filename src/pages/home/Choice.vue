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
        lunboURL:'http://xinling.songtaxihuan.com/article/get_top_article',
        readURL:'http://xinling.songtaxihuan.com/article/get_choice_article',
        queURL:'http://xinling.songtaxihuan.com/question/get_choice_question',

  			queList:[],  			
  			readList:[],
        evaList: []

      }
    },
	  ready(){
    
	  	// 阅读精选
	  	$.ajax({
          url: global.domain +'/article/get_choice_article',
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
          url: global.domain +'/question/get_choice_question',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
          	token: global.token
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
          url: global.domain +'/access/get_choice_access',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
            count: 3,
          },
          success: data => this.evaList = data.data,
          error: err => console.log(err)
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
