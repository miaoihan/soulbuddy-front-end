<template>
  <div class="far-bom">
  	<question-list :data="queList"></question-list>
  </div>
</template>

<script>
  export default{
  	components: {
  		questionList: require('components/areaComp/QuestionList')
	  },
		data(){
			return{
				token:[],
				queList: []
			}
		},
		ready(){
			$.ajax({
        url: 'http://xinling.songtaxihuan.com/test/test?uid=3',
        type:'GET', 
        dataType: 'json',
        cache: true,
        async:false,
        success: function(data) {
          this.token = data.data
          console.log(this.token);	
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.token, status, err.toString());
        }.bind(this)
      });

			// 我的提问
      $.ajax({
          url: 'http://xinling.songtaxihuan.com/user/get_my_question',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
            page: 1,
            token: this.token
          },
          success: data => this.queList = data.data,
          error: err => err.toString()
        });
		}	  
  }
</script>

<style scoped lang="stylus">


</style>
