<template>
  <div>
  	
  	<func-nav :index.sync="index"></func-nav>
  	<!-- <question-list></question-list> -->
    <div class="cst-list" style="margin-top: 0.5rem">
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
  export default{
    components: {
    	NavHeader,FuncNav,QuestionList,Reading
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
    }
  }
</script>

<style scoped lang="stylus">


</style>
