<template>
<!-- 咨询师详情 -->
<nav-header title="" left="back" :fav-type="1" :fav-id="user.u_id" :collected="user.is_fav==1" :fav-count="user.fav_count"></nav-header>
  <div>
  	<div class="at-top part container-20"
  			 :class="user.identity == 1? 'ztc' : 'ab-kol' ">
  	<div class="cst-info wrapper" style="height: 5.0rem">
  		<div class="k-i-l">
				<!-- 头像 -->
				<i class="avator" style="height:4.05rem;width:4.05rem;background: url({{real_logo}}) no-repeat center top; background-size: cover">
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
		  				{{user.user_title}}
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
  					@click="callpay">
  		￥{{ user.answer_fee }} 向{{ user.user_name }}提一个问题
  	</footer>
  	<!-- loading -->
		<div class="spinner" v-if="loading">
		  <div class="bounce1"></div>
		  <div class="bounce2"></div>
		  <div class="bounce3"></div>
		</div>

		<!-- modal -->
		<div v-if="show_modal">
			<div class="modal-bg" @click="closeModal"></div>
			<div class="pay-modal">
				<div style="border-bottom:1px solid #e7e7e7" @click="yuPay">余额支付</div>
				<div @click="wxPay">微信支付</div>
			</div>	
		</div> <!-- end modal -->

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
	  		real_logo:'',
	  		loading: false,
	  		show_modal: false,
	  	}
	  },
	  methods:{
	  	callpay(){
	  		this.show_modal = true
	  	},
	  	yuPay(){
	  		if (Number(global.user.balance)<Number(this.user.answer_fee)) 
	  		 alert('余额不足,请充值!');
	  		else{
	  			//余额支付接口
	  			$.ajax({
	                url: global.domain +"/user/balance_buy_answer",
	                type:'post', 
	                dataType: 'json',
	                async:false,
	                data: {
	                	token:global.token,
	                	money:this.user.answer_fee
	                },
	                success: function(data) {
	                	if(data.msg==true){
	                		alert(global.user.balance)
	                		alert('支付成功')
	                 		this.$router.go('/askto?uid='+this.user.u_id)
	                	}else{
	                		alert('支付失败')
	                	}
	                }.bind(this),
	                error: function(xhr, status, err) {
	                  console.err(err.toString())
	                  alert('支付失败')
	                }.bind(this)
	            });
	  			
	  		}
	  	},
	  	closeModal(){
     	 this.show_modal = false
      },
	  	wxPay(){
	  		// 微信支付
		  	this.loading = true;
		  	let vm = this;
	  		// 先获取订单
	  		$.ajax({
          url: global.domain +'/thirdparty/wepay',
          type:'POST', dataType: 'json',
          data:{
          	total_fee: this.user.answer_fee*100,
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
				        // 支付成功后,可以提问
				        vm.$router.go('/askto?uid='+vm.user.u_id)
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
          	this.real_logo = global.logo_url+this.user.real_logo
          	this.datap = {
			  			logo:  this.real_logo,
			  			user_name:  data.data.user_name,
			  			intro: data.data.intro,
			  		}
          	console.log(this.user)
          }.bind(this),
          error: function(err) {
            console.error(JSON.stringify(err));
          }.bind(this)
        });

	  		let vm = this;
	     	document.addEventListener('mousewheel', function (event) {//监听滚动事件
	     	// alert(this.show_modal)
			    if(vm.show_modal){　　　
			    //判断是遮罩显示时执行，禁止滚屏
			       event.preventDefault();　　　　　　
			     }
				})
				document.addEventListener('touchmove', function (event) { 
	     	//监听触屏事件
	     	// alert(this.show_modal)
			    if(vm.show_modal){　　　
			    //判断是遮罩显示时执行，禁止滚屏
			       event.preventDefault();　　　　　　
			     }
				})

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
