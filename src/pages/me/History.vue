<template>
  <nav-header title="我的回答"></nav-header>
  <div class="wrapper">
    <question-list :data="data"></question-list>
  </div>
</template>

<script>
import QuestionList from 'components/areaComp/QuestionList'
import NavHeader from 'components/funComp/NavHeader'
export default {
  data () {
    return {
      
    }
  },
  components:{
  	QuestionList,NavHeader
  },
  props: {
	  	data: {
	  		type: Array,
	  		default() {
	  			return [
	  					{
	  						content: '是这些球星的第一次夺冠，为啥勇士都没人哭呢。特别是新FMVP比库里更淡定的样子',
	  						pay: 5,
	  						isFree: true,
	  						answer:
	  							{
	  								name:'许雯',
	  								desc:'国家心理二级咨询师',
	  								isbest:'true',
	  								time: 35,
	  								like: 168,
	  								data: '08-17'
	  							}
	  						
	  					},
	  					{
	  						content: '是这些球星的第一次夺冠，为啥勇士都没人哭呢。特别是新FMVP比库里更淡定的样子',
	  						pay: 5,
	  						isFree: true,
	  						answer:
	  							{
	  								name:'许雯',
	  								desc:'国家心理二级咨询师',
	  								isbest:'true',
	  								time: 35,
	  								like: 168,
	  								data: '08-17'
	  							}
	  						
	  					},
	  				]
	  		}
	  	}
	  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
