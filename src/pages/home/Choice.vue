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
  		<div class="seemore" @click="seeMore('art')" id="seemore">
  			查看更多精选阅读 
  		</div>
  	</div> <!-- end article-list -->
    <!-- 测评精选 -->
  	<div class="eva">
  		<eva-card :data="evaList" :index.sync="index"></eva-card>
  	</div>
  	<aside class="pangbai">
			<span class="heng"></span>
	  	<span style="margin:0 10px 0">问答精选</span> 
	  	<span class="heng"></span>
  	</aside>
  	<div class="que-list">
  		<question-list :data="queList"></question-list>	
  		<div class="seemore" @click="seeMore('que')">
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
  			queList:[],  			
  			readList:[],
        evaList: [],
        art_page: 1,
        que_page: 1,
      }
    },
    created(){
      // 测评精选
      $.ajax({
          url: global.domain +'/access/get_choice_access',
          type:'POST', 
          dataType: 'json',
          async:false,
          data:{
            count: 3,
            token: global.token
          },
          success: data => this.evaList = data.data,
          error: err => console.log(err)
        });
    },
    methods:{
      // 加载更多
      seeMore(type){
        console.log(type)
        // Zepto.toast("没有更多了",120000,'toast-info');
        if (type=='art') {
          $.post(global.domain +'/article/get_choice_article',
            {count: 3, page: ++this.art_page}, v => 
            this.evaList = this.evaList.concat(data.data), 'json');
        }else if(type=='que'){
          $.post(global.domain +'/question/get_choice_question',
            { token: global.token, page: ++this.que_page, }, v => 
            this.queList = this.queList.concat(v.data), 'json');
        }
      },
      addQue(){
        console.log('click the addque')
      }
    },
	  ready(){
	  	$.ajax({
          url: global.domain +'/article/get_choice_article',
          type:'POST', 
          dataType: 'json',
          data:{
            count: 4
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
	  	
	  },

    props: {
      index:{type:Number,default:1},
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
