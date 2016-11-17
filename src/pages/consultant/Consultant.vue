<template>
<!-- 咨询师 -->
	<nav-header :identity.sync="identity" :iscst="true" :right="false"></nav-header>
  <div>
	  <cst-list :data="userList1" v-if="identity===1"></cst-list>
	  <kol-list :data="userList2" v-if="identity===2"></kol-list>
  </div>
  <div class="seemore" @click="seeMore(identity)" 
       v-if="(identity===1 && userList1.length>9) || (identity===2 && userList2.length>9)">
    查看更多
  </div>
  <div class="seemore" v-if="(identity===1 && userList1.length===0) || (identity===2 && userList2.length===0)">
    暂无内容~
  </div>
  <div class="bom-div"></div>
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
	  		iscst: true,
	  		identity: 1, //0普通用户1心理咨询师2经验答人
	  		userList1: [],
	  		userList2: [],
        page1: 1,
        page2: 1
	  	}
	  },
    methods:{
      // 加载更多
      seeMore(i){
        if (i == 1) {
          $.post(global.domain +'/user/get_user_list',
            { token: global.token, page: ++this.page1,identity: i }, v => 
            this.userList1 = this.userList1.concat(v.data), 'json');
        }else if(i == 2){
          $.post(global.domain +'/user/get_user_list',
            { token: global.token, page: ++this.page2,identity: i }, v => 
            this.userList2 = this.userList2.concat(v.data), 'json');
        }
      },
    },
	  ready(){
      // 咨询师
	  	$.ajax({
          url: global.domain +'/user/get_user_list',
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
          	}
          }.bind(this),
          error: function(xhr, status, err) {
          }.bind(this)
        });
      // 经验达人
	  	$.ajax({
          url: global.domain +'/user/get_user_list',
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
