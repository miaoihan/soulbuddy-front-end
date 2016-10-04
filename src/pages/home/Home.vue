<template>
  <div>
  	
  	<func-nav :index.sync="index"></func-nav>
  	<!-- <question-list></question-list> -->
    <div class="cst-list" style="margin-top: 0.5rem">

      <choice v-if="index==1"></choice>
      <question-list v-if="index==2"></question-list>
      <reading  v-if="index==3"></reading>
      
    </div>

  </div>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader'
import FuncNav from 'components/areaComp/FuncNav.vue'
import QuestionList from 'components/areaComp/QuestionList.vue'
import Reading from 'pages/home/Reading.vue'
import Choice from 'pages/home/Choice.vue'
  export default{
    components: {
    	NavHeader,FuncNav,QuestionList,Reading,Choice
    },
    data(){
      return{
        index: 1,
      }
    },
    props:{
      // index: {
      //   // default: 2
      // }
    },
  }
</script>

<style lang="stylus">
// 主页公共样式
.pangbai{
  text-align:center;
  margin: 30px 0 15px 0
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

</style>
