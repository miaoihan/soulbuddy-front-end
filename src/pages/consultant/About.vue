<template>
<!-- 咨询师详情 -->
<nav-header title="" left="back"></nav-header>
  <div>
  	<div class="at-top part container-20"
  			 :class="user.identity == 1? 'ztc' : 'ab-kol' ">
  	<div class="cst-info wrapper" style="height: 5.0rem">
  		<div class="k-i-l">
				<!-- 头像 -->
				<i class="avator" style="height:4.05rem;width:4.05rem">
					<img :src="user.logo" alt="" class="avator">
				</i>
			</div>
			<div class="k-i-r">
				<div class="z-desc">
		  		<div class="desc-l1">
		  			<span class="d-l1-name" 
		  						:style="user.identity == 1? 'color:#fff' : 'color:#444' ">
		  						{{user.user_name}}</span>
		  			<!-- 认证标志 -->
		  			<span>
		  				<i></i>
		  			</span>
		  		</div>
		  		<div class="desc-l2">
		  			<span style="font-size:0.6rem;">
		  				{{user.intro}}
		  			</span>
		  		</div>
		  		<!-- 标签 -->
		  		<div class="desc-l3" style="margin-top: 0.40rem">
		  			<span class="label" 
									:class="user.identity==1? 'label-border': 'label-grey' "
		  						style="margin-right: 0.5rem" 
		  						v-for="it in user.skill | str2arr">
		  				{{it}}
		  			</span>
		  		</div>
		  	</div>
			</div>
	  		</div>
	  		<div class="cst-desc">
	  			<p>
	  				简介：哥伦比亚哦大学心理博士，主修人际心理学；擅长托马斯催眠疗法，获得2014年度心理咨询评定委员会心理咨询师称号
	  			</p>
	  			<div class="t-location" style="margin-top: 0.5rem;">
	  				<i class="iconfont">&#58903;</i>
	  				{{user.location}}
	  			</div>
	  		</div>
  	</div> <!-- end top -->
  	<div class="m-tips">
  			共回答了 <strong>{{ user.answers.length}}</strong> 个问题</div>
		<div class="ans-list">
			<question-list :data="user.answers"></question-list>	
		</div>
		<footer class="qd-footer fixed-bottom ztc"
  					@click="ask">
  		￥{{ user.answer_fee }} 向{{ user.user_name }}提一个问题
  	</footer>
  </div>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader';
  export default{
  	components: {
  		QuestionList: require('components/areaComp/QuestionList'),NavHeader
	  },
	  data(){
	  	return{
	  		token: '',
	  		user: {}
	  	}
	  },
	  ready(){

	  	// 用户信息
	  	$.ajax({
          url: 'http://xinling.songtaxihuan.com/user/get_user_info',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
          	token: localStorage.token,
          	u_id: this.$route.params.id
          },
          success: function(data) {
          	this.user = data.data;
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(readList, status, err.toString());
          }.bind(this)
        });
	  },
	  
	  
  }
</script>

<style scoped lang="stylus">
	
	.k-i-l
		width 5.0rem
		display inline-block
		float left

	.cst-info
		border-bottom 1px solid #e7e7e7
	
	.cst-desc
		margin-top : 0.85rem;
		// color: #a9ddf3
		font-size: 14px

	.m-tips
		text-align: center
		margin 1.65rem 0 0.6rem
		font-size: 0.6rem
		color #999
		
	.ans-list
		margin-bottom: 4.6rem
		
	.ab-kol
		color #999
</style>
