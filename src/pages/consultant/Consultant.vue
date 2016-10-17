<template>
<!-- 咨询师 -->
	<nav-header :identity.sync="identity" :iscst="true" :right="false"></nav-header>
  <div class="far-bom">
	  <cst-list :data="userList1" v-if="identity===1"></cst-list>
	  <kol-list :data="userList2" v-if="identity===2"></kol-list>
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
	  		iscst: true,
	  		identity: 1, //0普通用户1心理咨询师2经验答人
	  		userList1: [],
	  		userList2: [],
	  	}
	  },
	  ready(){
      // 咨询师
	  	$.ajax({
          url: this.domain +'/user/get_user_list',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
          	token: global.token,
          	page: 1,
          	identity: 1
          },
          success: function(data) {
          	if (data.code != -1) {
          		this.userList1 = data.data;
	          	console.log(this.userList1)
          	}
          }.bind(this),
          error: function(xhr, status, err) {
          }.bind(this)
        });
      // 经验达人
	  	$.ajax({
          url: this.domain +'/user/get_user_list',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
          	token: global.token,
          	page: 1,
          	identity: 2
          },
          success: function(data) {
          	if (data.code != -1) {
          		this.userList2 = data.data;
	          	console.log(this.userList2)
          	}
          }.bind(this),
          error: function(xhr, status, err) {
          }.bind(this)
        });
	  },
	  
  }
</script>

<style lang="stylus">
	
</style>
