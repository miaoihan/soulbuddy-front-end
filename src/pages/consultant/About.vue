<template>
<!-- 咨询师详情 -->
<nav-header title="" left="back" :fav-type="1" :fav-id="user.u_id" :collected="user.is_fav==1" :fav-count="user.fav_count"></nav-header>
  <div>
  	<div class="at-top part container-20"
  			 :class="user.identity == 1? 'ztc' : 'ab-kol' ">
  	<div class="cst-info wrapper" style="height: 5.0rem">
  		<div class="k-i-l">
				<!-- 头像 -->
				<i class="avator" style="height:4.05rem;width:4.05rem;background: url({{user.logo}}) no-repeat center top; background-size: cover">
					<!-- <img alt="" class="avator" style=""> -->
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
		  				{{user.title}}
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
	  				简介：{{user.intro}}
	  			</p>
	  			<div class="t-location" style="margin-top: 0.5rem;">
	  				<i class="iconfont">&#58903;</i>
	  				{{user.area}}
	  			</div>
	  		</div>
  	</div> <!-- end top -->
  	<div class="m-tips">
  			共回答了 <strong>{{ user.answers.length}}</strong> 个问题</div>
		<div class="ans-list">
			<question-list :data="user.answers" :datap="datap"></question-list>	
		</div>
		<footer class="qd-footer fixed-bottom ztc"
  					@click="ask">
  		￥{{ user.answer_fee }} 向{{ user.user_name }}提一个问题
  	</footer>
  	<!-- loading -->
		<div class="spinner" v-if="loading">
		  <div class="bounce1"></div>
		  <div class="bounce2"></div>
		  <div class="bounce3"></div>
		</div>
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
	  		user: {},
	  		collected:false,
	  		user_type:"",
	  		about_info:[],
	  		datap:{},
	  		loading: false
	  	}
	  },
	  methods:{
	  	ask(){
	  		// 微信支付
		  	this.loading = true;
	  		// 先获取订单
	  		$.ajax({
          url: global.domain +'/thirdparty/wepay',
          type:'POST', dataType: 'json',
          data:{
          	total_fee: 1,
            body: '向'+ this.user.user_name +'提的问题',
            open_id: global.open_id,
          },
          success: data => {
          	let vm = this;
          	let param = JSON.parse(data.data);
          	this.loading = false;
      			// 调微信支付接口
		      	wx.chooseWXPay({
					    timestamp: param.timeStamp+'', 
					    nonceStr: param.nonceStr, 
					    package: param.package, 
					    signType: param.signType, 
					    paySign: param.paySign, 
					    success: function (res) {
				        // 支付成功后解锁
				        console.log(res);
					      $.post(global.domain +'/question/buy_answers',
					        { token: global.token, q_id: id },
					        v => {
					        	vm.lock = false;
					        	for(let i in vm.data){
					        		if (vm.data[i].q_id === id) 
					        			vm.data[i].can_listen = true;
					        		console.log('data-----'+vm.data)
					        		console.log('prop data-----'+vm.props.data)
					        	}
					        } ,'json');
						    },
						    fail: function(res){
						    	console.log(res)
						    }
							});
          },
        });
	  	},
	  },
	  ready(){
	  	// this.user_type=this.$route.params.type
	  	// console.log("user_type is"+this.user_type)
	  	// 用户信息
	  	$.ajax({
          url: global.domain +'/user/get_user_info',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
          	token: global.token,
          	u_id: this.$route.params.id
          },
          success: function(data) {
          	this.user = data.data;
          	this.datap = {
			  			logo:  data.data.logo,
			  			user_name:  data.data.user_name,
			  			intro: data.data.intro,
			  		}
          	console.log(this.user)
          }.bind(this),
          error: function(err) {
            console.error(JSON.stringify(err));
          }.bind(this)
        });
        //获取我的收藏 判断是否已经收藏
       //  $.ajax({
       //      url: global.domain+'/user/get_my_favorite',
       //      type:'POST', 
       //      dataType: 'json',
       //      cache: true,
       //      data:{
       //        token:global.token,
       //        type:1
       //      },
       //      success: data => {
       //        this.about_info = data.data;
       //        // 判断收藏
       //        var arr=[];
       //        for(var i = 0;i < this.about_info.length;i++){
       //          arr.push(this.about_info[i].u_id)
       //        }
       //        var test=arr.indexOf(this.$route.params.id);
       //        console.log(this.$route.params.id)
       //        if(test!=-1){
       //          this.collected=true
       //        }
       //      },
       //      error: err => err.toString(),
      	// });
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
		margin 0.8rem 0 0.6rem
		font-size: 0.6rem
		color #999
		
	.ans-list
		margin-bottom: 4.6rem
		
	.ab-kol
		color #999
</style>
