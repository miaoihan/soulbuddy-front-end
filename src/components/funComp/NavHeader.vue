<template>
<div>
  <header class="nav-header" 
  				id="navHeader" :class="{fixed: fixed}">
  	<!-- 导航左部分	 -->
	  <span class="nav-left">
	  	<a v-link="'/home/search'" style="color:#fff" v-if="title=='新灵伙伴'">
	  		<i class="iconfont" v-if="title=='新灵伙伴'">&#xe600;</i>
	  	</a><!-- 搜索图标 -->
	  	<i class="iconfont icon-icon27" v-if="left=='cancel' "
	  		 @click="confirm"></i><!-- 叉图标 -->
	  	<a v-link="url" v-if="left=='back'">
	  		<i class="iconfont icon-back" style="font-size:0.9rem;color:#fff"
	  			 onclick="window.history.go(-1)"></i>
	  	</a><!-- 返回图标 -->
	  </span>
		<!-- 中间Title -->
	  <h1 class="nav-title" v-if="title">{{ title }}</h1>
	  <div class="tag-wrapper" v-if="iscst">
			<span class="btn-left" :class=" identity===1 ? 'active' : '' " 
						@click="click(1)"
						>咨询师</span>
			<span class="btn-right" :class="{ active: identity === 2 }"
						@click="click(2)"
						>经验答人</span>
		</div>
	  <!-- 导航右部分	 -->
	  <span class="nav-right" v-if="right">
	  	<a class="next-btn" v-if="title=='原手机号码'"
	  			v-link="url" @click="method">下一步</a>
	  	<!-- <a class="next-btn" v-if="title=='我的评测'"
	  			v-link="url">重新评测</a> -->
	  	<div type="submit" class="next-btn" v-if="title=='编辑个人资料'"
	  			 @click="method">保存</div>
		  	<!-- 收藏 -->
		  <i class="iconfont" class="r-func" v-if="title=='问题详情'">&#xe62d;</i><!-- 三个点 --> 
	  	<a class="btn-nav" v-if="title=='新灵伙伴'"
	  		 @click="ask">提问</a>
			<a class="btn-nav" v-if="ispub"
				 @click="method">发布</a>	
	  	<span v-if=" !title " @click="like">
		  	<i class="iconfont margin-right-10" class="r-func" 
		  		 v-if="collected==false">&#xe606;</i>
		  	<i class="iconfont margin-right-10" class="r-func" style="color:red;" 
		  		 v-if="collected==true" @click="Collect">&#xe633;</i>
		  	<div class="collect-num-body" v-if="FavCount>1">
		  		<span class="collect-num">{{FavCount}}</span>
		  	</div><!-- 收藏图标 -->
		  <span>
	  	
	  </span>
	</header>
	<!-- modal -->
	 <div v-if="show_modal">
  	<!-- 遮罩背景层 -->
  	<div class="modal-bg" id="modalBg" @click="close"></div>
  	<div class="modal-item part">
  		<div class="mod-title"></div>
  		<div class="mod-content">
  			<div class="c-top">
  				<img src="../../assets/imgs/some1.png"  alt="">
  			</div>
  			<div class="c-middle">
  				提问前，请先完善个人资料和相关测评，咨询师了解你之后，答案才会更有帮助哦！
  			</div>
  		</div>
  		<div class="mod-button">
  			<span class="m-b-1" @click="close">暂时不</span>
  			<span class="m-b-2"></span>
  			<span class="m-b-3" @click="jumpTo" style="font-weight: 700">立即去完善资料</span>
  		</div>
  	</div>
  </div> <!-- end modal -->
</div>
</template>

<script>
  export default{
  	components: {
    	// Modal: require('components/funComp/Modal')
    },
  	data(){
  		return{
  			user:{},
  			my_favorite:[],
  			show_modal: false,
  			modalBtn:[
  				{
  					text: '暂时不',
  					click: function(){
  						return false;
  					}
  				},
  				{
  					text: '立即去完善资料',
  					click: function(){
  						const that = this
  						console.log(that.toString())
  						// alert(this.show)
  					}
  				}
  			]
  		}
  	},
		props:{
			title:{
				type: String,
				default: ''
			},
			FavCount:{
				type:String,
			},
			fixed:{
				type: Boolean,
				default: false
			},
			url:{type:String},
			right:{type:String,default:true},
			left:{type:String,default:''},
			iscst:{ type: Boolean },
			ispub:{ type: Boolean },
			identity: { type: Number, default: 1 },
			method: { type: Function },
			FavType:{type:Number},
			FavId:{type:String},
			collected:{type:Boolean,default:false},
		},
		methods:{
			close(){
				this.show_modal = false;
			},
			jumpTo(){
				this.show_modal = false;
				this.$router.go('/me/profile')
			},
			ask(){
				if (''==global.user.user_name || null==global.user.user_name){ 
					this.show_modal = true;
					return
				}
				this.$router.go('/ask')
			},
			click(i){
				// console.log(this.identity)
				this.identity = i
			},
			// t(){
			// 	console.log($('#t').val() )
			// },
			confirm(){
				if (confirm('确定取消？')) {
					window.history.go(-1)
				}
				
			},
			Collect(){
				// this.collected=!this.collected
			},
			like(){
			// alert('dsfsfdfsdf')
				if(this.collected==false){
					this.collected == true;
					this.FavCount++
			      	$.ajax({
			            url: global.domain +"/user/add_favorite",
			            type:'post', 
			            dataType: 'json',
			            data: {
			              token:global.token,
			              fav_type:this.FavType,
			              fav_id:this.FavId,
			            }	,//序列化
			            success: function(data) {
			            	// alert(this.title)
			            	// this.collected=!this.collected
			            	this.collected = true 
			            	// alert(this.collected)
			              // console.log( data);  
			            }.bind(this),
			            error: function(xhr, status, err) {
			              console.err(err.toString())
			            }.bind(this)
		        	});
				}else{
					this.collected == false;
					this.FavCount--
			      	$.ajax({
			            url: global.domain +"/user/cancel_favorite",
			            type:'post', 
			            dataType: 'json',
			            data: {
			              token:global.token,
			              fav_type:this.FavType,
			              fav_id:this.FavId,
			            }	,//序列化
			            success: function(data) {
			            	// alert(this.title)
			            	// this.collected=!this.collected
			            	this.collected = false 
			            	// alert(this.collected)
			              // console.log( data);  
			            }.bind(this),
			            error: function(xhr, status, err) {
			              console.err(err.toString())
			            }.bind(this)
		        	});
				}
				
	        	// alert(1231233)
	  		}
		},
		ready(){
			
			// document.body.onclick=function(){
			// 	// alert(1222)
			// 	this.show_modal = false;
			// 	alert(this.show_modal)
			// }
			// $('modalBg').click(function(){
			// 	alert(1112233)
			// })
			// if(this.FavId!=null){
			// 	$.ajax({
		 //          url: 'http://xinling.songtaxihuan.com/user/get_my_favorite',
		 //          type:'POST', 
		 //          dataType: 'json',
		 //          cache: true,
		 //          data:{
		 //            u_id:this.FavId,
		 //            type:this.FavType,
		 //            token: localStorage.token
		 //          },
		 //          success: data => this.my_favorite = data.data,
		 //          error: err => err.toString(),	          
		 //        });
			// }			
		},
  }

</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'
.collect-num-body{
	position absolute
	height 0.75rem
	width 0.75rem
	border-radius 0.75rem
	top: 0.5rem;
    right: 0.14rem;
	background $ztc
	// text-align: center
	line-height 0.75rem
}
.collect-num{
	font-size 0.6rem
	margin-left 0.1rem
}
.nav-header
	height 2.2rem
	line-height: 2.2rem
	background-color: $ztc
	width 100%
	.nav-title
		text-align center
		// position absolute
		font-size: 16px
		color: #FFF

.nav-right
	position absolute
	right 0.7rem
	top 0
	color:#fff
	i 
		font-size: 20px
	// top 0.45rem

.btn-nav
	color $ztc
	height 1.2rem
	line-height: 1.3rem
	width 2.25rem
	font-size: 0.65rem
	font-weight: 600
	text-align: center
	border-radius 0.3rem
	background-color: #FFF
	

.fixed{
	position: fixed;
}

.nav-left
	position:absolute;
	left:0.75rem
	color #fff	
.next-btn
	border 0
	background-color $ztc
	color #fff
	font-size: 0.8rem
	
.tag-wrapper
	text-align: center
	span
		display inline-block
		margin-top 7px
		height 1.5rem
		line-height: 1.5rem
		width 4.0rem
		border 1px solid #fff
		color #fff
		font-size: 14px
	.btn-left
		border-radius 6px 0 0 6px
		margin-right: -4px
	.btn-right
		border-radius 0px 6px 6px 0px
		
	.active
		background-color: #FFF
		color: $ztc

.r-func
	float:right;color:#fff;font-size:0.9rem;
</style>




