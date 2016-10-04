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
  		
  	</div>
  	<aside class="pangbai">
			<span class="heng"></span>
	  	<span style="margin:0 10px 0">问答精选</span> 
	  	<span class="heng"></span>
  	</aside>
  	<div class="que-list">
  		<question-list :data="data2"></question-list>	
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
  		ArticleList: require('components/AreaComp/ArticleList'),
  		QuestionList: require('components/AreaComp/QuestionList'),
	  },
    data(){
      return {
        
        token: '',
  			url1:"http://xinling.songtaxihuan.com/test/test?uid=3",
        lunboURL:'http://xinling.songtaxihuan.com/article/get_top_article',
        readURL:'http://xinling.songtaxihuan.com/article/get_choice_article',

  			swiperList:[],
  			readList:[],

      }
    },
    props: {
	  	data2: {
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
	  	// 异步获取token
	  	$.ajax({
          url: this.url1,
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

	  	$.ajax({
          url: this.lunboURL,
          type:'POST', 
          dataType: 'json',
          cache: true,
          success: function(data) {
          	// console.log(data)
            let lunboArr = data.data
            // console.log("title is "+lunboArr[0].title)
            for (var i = 0; i < lunboArr.length; i++) {
            	this.swiperList.$set(i,{
            		contitle:lunboArr[i].title,
            		imgurl: lunboArr[i].img_file,
            		href: ''
            	});
            }
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(lunboArr, status, err.toString());
          }.bind(this)
        });

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
	  },
	  
  }
</script>

<style scoped lang="stylus">

	.que-list{
		margin-bottom: 5.0rem;
	}


</style>
