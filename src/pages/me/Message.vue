<template>
  <div>
  	<nav-header title="消息" left="back"></nav-header>
  	<div class="container-20-lr part">
	  	<div class="mes-item" v-for="msg of msgList" 
	  			 @click="isRead($index)">
	  		<p style="margin-bottom: 10px;font-size:13px;color:#999">{{ 
	  			 msg.content.split(':')[1] ? msg.content.split(':')[0] : '新灵伙伴'
	  		}}：</p>
	  		<p style="font-size:14px;">{{ msg.content.split(':')[1] ? msg.content.split(':')[1] : msg.content.split(':')[0]}}</p>
	  	</div>
  	</div>
  	<div class="seemore" @click="seeMore('msg')" v-if="msgList.length!=0">
  			查看更多
  	</div>
  	<div class="seemore" v-if="msgList.length==0">
        暂无消息~
    </div> 
  	<div class="bom-div"></div>
  </div>
</template>

<script>
  export default{
  	components: {
  		NavHeader: require('components/funComp/NavHeader')
	  },
	  data () {
	    return {
	      title:   null,
	      content: null,
	      msgList: [],
	      msg_page:1
	    };
	  },
	  created(){
	  	// 站内信
      $.post(global.domain +'/user/get_my_mail',
        { page: 1 ,
        	token: global.token},v => {
        		this.msgList = v.data
        		console.log(this.msgList)
        		// this.title = 
        		},'json');
	  },
	  methods:{
	  	seeMore(type){
        console.log(type)
          $.post(global.domain +'/user/get_my_mail',
            { token: global.token, page: ++this.msg_page, }, v => 
            this.msgList = this.msgList.concat(v.data), 'json');
      },
	  	isRead(){

	  	}
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

 .mes-item
  	padding-bottom: 20px; 
  	border-bottom: 1px solid #ebebeb;
  	padding 20px 0 
</style>
