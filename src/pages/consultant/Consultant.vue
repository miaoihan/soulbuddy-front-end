<template>
<!-- 咨询师 -->
	<!-- <nav-header></nav-header> -->
  <div>
	  <cst-list :data = "userList1" v-if="identity===1"></cst-list>
	  <kol-list :data = "userList2" v-if="identity===2"></kol-list>
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
	  		domain: 'http://xinling.songtaxihuan.com',
	  		identity: 1, //0普通用户1心理咨询师2经验答人
	  		userList1: [],
	  		userList2: [],
	  	}
	  },
	  ready(){
	  	// 异步获取token
	  	$.ajax({
          url: "http://xinling.songtaxihuan.com/test/test?uid=3",
          type:'GET', 
          dataType: 'json',
          cache: true,
          async:false,
          success: function(data) {
            this.token = data.data
            // console.log( typeof this.token);	
          }.bind(this),
          error: function(xhr, status, err) {
          }.bind(this)
        });

	  	$.ajax({
          url: this.domain +'/user/get_user_list',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
          	token: this.token,
          	page: 1,
          	identity: 1
          },
          success: function(data) {
          	this.userList1 = data.data;
          	console.log(this.userList1)
          }.bind(this),
          error: function(xhr, status, err) {
          }.bind(this)
        });
	  	$.ajax({
          url: this.domain +'/user/get_user_list',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
          	token: this.token,
          	page: 1,
          	identity: 2
          },
          success: function(data) {
          	this.userList2 = data.data;
          	console.log(this.userList1)
          }.bind(this),
          error: function(xhr, status, err) {
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
