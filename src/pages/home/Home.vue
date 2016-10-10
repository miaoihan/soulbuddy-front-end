<template>
  <div>
  <nav-header title="新灵伙伴"></nav-header>
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
        swiperList: [],
        queList: [],
        readList: [],
        evaList: [],
        headData: {
          title: '新灵伙伴',
        }
      }
    },
    created(){
      
      // 获取轮播
      $.ajax({
          url: global.domain +'/article/get_top_article',
          type:'POST', 
          dataType: 'json',
          async:false,
          success: data => {
            let lunboArr = data.data
            for (var i = 0; i < lunboArr.length; i++) {
              this.swiperList.$set(i,{
                contitle:lunboArr[i].title,
                imgurl: lunboArr[i].img_file,
                href: ''
              });
            }
          },error: err => console.error(err.toString())
        });
    },
    ready(){
      console.log(global.domain)
      console.log(global.token)
      // 问答列表
      $.ajax({
          url: global.domain +'/question/get_question_list',
          type:'POST', 
          dataType: 'json',
          // cache: true,
          data:{
            page: 1,
            token: global.token
          },
          success: data => {this.queList = data.data; console.log(data)},
          error: err => err.toString()
        });

      // 阅读列表
      $.post(global.domain +'/article/get_article_list',
        { page: 1 },
        v => this.readList = v.data ,'json');
      
      // 测评列表
      $.ajax({
          url: global.domain +'/access/get_access_list',
          type:'POST', 
          dataType: 'json',
          data:{
            page: 1,
            token: global.token
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

.label-box{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px 0 10px 0;
  background-color: #fff
}

.label-box span
  margin: 0 0 15px 15px;
  
a
  color #444
  width 100%

</style>
