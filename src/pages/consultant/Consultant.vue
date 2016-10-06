<template>
<!-- 咨询师 -->
	<nav-header></nav-header>
  <div>
	  <cst-list :data = "data" v-if="identity===2"></cst-list>
	  <kol-list :data = "data" v-if="identity===3"></kol-list>
  </div>
</template>

<script>
  export default{
  	components: {
  		CstList: require('components/areaComp/CstList'),
  		KolList: require('components/areaComp/KolList'),
  		NavHeader: require('components/funComp/NavHeader'),
	  },
	  data(){
	  	return{
	  		token: '',
	  		identity: 2, //用户身份0普通用户1心理咨询师2经验答人
	  	}
	  },
	  ready(){
	  	// 异步获取token
	  	$.ajax({
          url: this.url1,
          type:'GET', 
          dataType: 'json',
          cache: true,
          async:false,
          success: function(data) {
            this.token = data.data
            // console.log( typeof this.token);	
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.token, status, err.toString());
          }.bind(this)
        });

	  	$.ajax({
          url: '/user/get_user_list',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
          	token: this.token,
          	page: 1

          },
          success: function(data) {
          	this.readList = data.data;
          	console.log(this.readList)
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(readList, status, err.toString());
          }.bind(this)
        });
	  },
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  		return[
		  			{
		  				name: '陈雪晴',
		  				desc: '国家二级心理咨询师',
		  				label: [
		  				{
		  					name: '自杀倾向',
		  				},
		  				{
		  					name: '自残',
		  				},
		  				],
		  				num: 89
		  			},
		  			{
		  				name: '王大伟',
		  				desc: '国家二级心理咨询师',
		  				label: [{
		  					name: '自杀倾向'
		  				}],
		  				num: 66
		  			},
		  			{
		  				name: '李梓嫚',
		  				desc: '国家二级心理咨询师',
		  				label: [{
		  					name: '自杀倾向'
		  				}],
		  				num: 59
		  			},
		  		]
		  	}
	  	}
	  },
	  
  }
</script>

<style lang="stylus">
	
</style>
