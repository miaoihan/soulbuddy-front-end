<template>
  <div>
  	
  	<func-nav></func-nav>
  	<question-list></question-list>

  </div>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader'
import FuncNav from 'components/areaComp/FuncNav.vue'
import QuestionList from 'components/areaComp/QuestionList.vue'
  export default{
    components: {
    	NavHeader,FuncNav,QuestionList
    }
  }
</script>

<style scoped lang="stylus">


</style>
