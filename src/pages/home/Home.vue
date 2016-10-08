<template>
  <div>
  	<func-nav :index.sync="index"></func-nav>
    <div style="margin-top: 0.5rem">
      <choice v-if="index==1" :swiper-list="swiperList"></choice>
      <question-list v-if="index==2" :data="queList"></question-list>
      <reading v-if="index==3" :data="readList"></reading>
      <evaluation v-if="index==4" :data="evaList" style="margin-bottom: 80px"></evaluation>
    </div>
  </div>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader'
import FuncNav from 'components/areaComp/FuncNav.vue'
import QuestionList from 'components/areaComp/QuestionList.vue'
import Reading from 'pages/home/Reading.vue'
import Choice from 'pages/home/Choice.vue'
import Evaluation from 'pages/home/Evaluation.vue'
  export default{
    components: {
    	NavHeader,FuncNav,QuestionList,Reading,Choice,Evaluation
    },
    data(){
      return{
        index: 1,
        token: '',
        tokenURL: "http://xinling.songtaxihuan.com/test/test?uid=3",
        domain: 'http://xinling.songtaxihuan.com',
        swiperList: [],
        queList: [],
        readList: [],
        evaList: [],
      }
    },
    created(){
      // 没有缓存token再请求
      if(''===this.token){
        // 异步获取token
        $.ajax({
            url: this.tokenURL,
            type:'GET', 
            dataType: 'json',
            cache: true,
            async:false,
            success: function(data) {
              this.token = data.data
              // document.cookie = 'token='+this.data,data
              // console.log( typeof this.token); 
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(this.token, status, err.toString());
            }.bind(this)
          });
      }
      // 问答列表
      $.ajax({
          url: this.domain +'/question/get_question_list',
          type:'POST', 
          dataType: 'json',
          // cache: true,
          data:{
            page: 1,
            token: this.token
          },
          success: data => this.queList = data.data,
          error: err => err.toString()
        });
      // 获取轮播
      $.ajax({
          url: this.domain +'/article/get_top_article',
          type:'POST', 
          dataType: 'json',
          cache: true,
          async:false,
          success: function(data) {
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
    },
    ready(){

      // 阅读列表
      $.ajax({
          url: this.domain +'/article/get_article_list',
          type:'POST', 
          dataType: 'json',
          cache: false,
          data:{
            page: 1,
          },
          success: function(data) {
            this.readList = data.data;
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(readList, status, err.toString());
          }.bind(this)
        });
      // 测评列表
      $.ajax({
          url: this.domain +'/access/get_access_list',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
            page: 1,
            token: this.token
          },
          success: data => this.evaList = data.data,
          error: err => err.toString()
        });

    }
  }
</script>

<style lang="stylus">
// 主页公共样式
.pangbai{
  text-align:center;
  margin: 30px 0 15px 0
  color #999
  font-size: 14px
}

.heng{
  width:20px;
  display:inline-block;
  margin-bottom:4px 
  border-bottom:1px solid #b1b1b1;
}

.seemore{
  text-align:center;
  margin: 10px 10% 0;
  height: 30px;
  line-height: 32px;
  // background: #E3E3E3;
  border-radius: 15px;
  font-size: 13px;
  color: #999;
}

a
  color #444


</style>
