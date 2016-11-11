<template>
<nav-header title="我的提问" left="back"></nav-header>
  <div>
  	<question-list :data="queList" type="mine"></question-list>
  </div>
  <div class="seemore" @click="seeMore('que')">
        查看更多提问
  </div>
  <div class="bom-div"></div>
</template>

<script>
  export default{
  	components: {
  		questionList: require('components/areaComp/QuestionList'),
      NavHeader: require('components/funComp/NavHeader')
	  },
		data(){
			return{
				queList: [],
        que_page:1
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
		},
    methods:{
      seeMore(type){
        console.log(type)
          $.post(global.domain +'/user/get_my_question',
            { token: global.token, page: ++this.que_page, }, v => 
            this.queList = this.queList.concat(v.data), 'json');
      },
    }	  
  }
</script>

<style scoped lang="stylus">


</style>
