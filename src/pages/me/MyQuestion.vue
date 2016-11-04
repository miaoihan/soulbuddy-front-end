<template>
<nav-header title="我的提问" left="back"></nav-header>
  <div class="far-bom">
  	<question-list :data="queList" type="mine"></question-list>
  </div>
</template>

<script>
  export default{
  	components: {
  		questionList: require('components/areaComp/QuestionList'),
      NavHeader: require('components/funComp/NavHeader')
	  },
		data(){
			return{
				queList: []
			}
		},
		ready(){
			// 我的提问
      $.ajax({
          url: global.domain +'/user/get_my_question',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
            page: 1,
            token: global.token
          },
          success: data => {this.queList = data.data;},
          error: err => err.toString()
        });
		}	  
  }
</script>

<style scoped lang="stylus">


</style>
