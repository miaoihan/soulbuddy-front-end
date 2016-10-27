<template>
	<nav-header title="意见反馈" left="back" right=""></nav-header>
	<form action="" method="post" id="editfeed">
		<input type="hidden" name="token" :value="token">
		<div class="textarea">
			<textarea class="inputarea" name="content" v-model="content" placeholder="请填写反馈内容"></textarea>
		</div>
		<div class="tbar" style="margin-top: 20px">
  		<input name="title" type="text" placeholder="您的邮箱（选填）" >
  	</div>		
		<div class="submit-btn" @click="submit">提交</div>
	</form>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader'
export default {
	components:{
		NavHeader
	},
	props:{
		
	},
  data () {
    return {
      token:'',
      content:''
    }
  },
  ready(){
  	this.token=global.token
  },
  methods:{
    	submit(){
    		if(this.content===''){
    			alert('反馈内容不能为空')
    			return false
    		}
    		else{
    			$.ajax({
	                url: global.domain +"/feedback/add_feedback",
	                type:'post', 
	                dataType: 'json',
	                async:false,
	                data: $('#editfeed').serialize(),//序列化
	                success: function(data) {
	                  this.$router.go('/me/install')
	                }.bind(this),
	                error: function(xhr, status, err) {
	                  console.err(err.toString())
	                }.bind(this)
	            });
    		}
    		
    	}
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'
.textarea{
	margin-top: 0.5rem;
	width: 100%;
	height:9rem;
	padding:0.75rem 1.0rem;
	background-color: #fff;
}
.inputarea{
	width: 100%;
	height:100%;
	border:0;
	resize: none;
}
.submit-btn{
	margin-top 1rem
	border: 0;
	width: 100%;
	height: 2.5rem;
	background-color: $ztc
	color:#fff;
	line-height:2.5rem
	text-align center
}

</style>
