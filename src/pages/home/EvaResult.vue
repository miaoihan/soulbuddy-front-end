<template>
<!-- 测评结果 -->
	<nav-header title="测评结果" left="back" right=''></nav-header>
  <div class="part container-20">
	  <div class="er-title">
	  	<h1>{{result.title}}:</h1>
	  </div>
	  <div class="er-content">
	  	<p>{{ result.result }}</p>
	  </div>
  </div>
</template>

<script>
  export default{
  	components: {
  		NavHeader: require('components/funComp/NavHeader'),
	  },
	  data () {
	    return {
	      resultList:[],
	      result:{},
	    };
	  },
	  ready(){
	  	let id = this.$route.params.id;
	  	// 评测结果
      $.post(global.domain +'/user/get_my_access',
        { token:global.token },v => {
        	this.resultList = v.data;
        	for(let obj of this.resultList){
        		if (obj.test_id==id) this.result = obj
        			console.log(this.result)
        	}
        } ,'json');
	  },
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  		return[
		  			{
		  				
		  			},
		  		]
		  	}
	  	}
	  },
	  
  }
</script>

<style scoped lang="stylus">

	.er-title
		font-size: 15px;
		color: #444;
		margin-bottom 0.6rem
	p
		font-size: 14px;
		color: #999999;


</style>
