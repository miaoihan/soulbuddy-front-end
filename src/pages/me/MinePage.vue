<template>
  <div >
    <div class="person-msg-body">
    	<div class="person-msg-basic">
    		<div class="img-body">
    			<img :src="person.logo" class="img-imgs">
    		</div>
    		<div class="person-msg-name">
    			<span class="name-text">{{person.user_name}}</span>
				<a href="#" class="button button-round btnstyle">编辑个人资料</a>
    		</div>
    		<div class="hint-img">
    			<i class="iconfont imgimg">&#xe605;</i>
    			<div class="hint-text" v-if="hintnum<=99">{{person.fav_count}}</div>
    		</div>
    	</div>
    </div>
    <div v-if="user.UserType==='counselor'">
    	<counselor-fun></counselor-fun>
    </div>
    <div v-if="user.UserType==='common'">
    	<common-fun></common-fun>
    </div>
    <!-- <common-fun v-if="user.UserType===common"></common-fun> -->

    <change-btn :btntext="btntext"
	    	style="margin-top:1rem;padding-left:1rem;padding-right:1rem;background:#2b8ff7"
			text-color="#fff" icon-color="#fff"
			@click="handleClick" v-if="person.identity==0">
	</change-btn>
	<change-btn btntext="申请成为咨询师或经验答人"
	    	style="margin-top:1rem;padding-left:1rem;padding-right:1rem;background:#fff"
			text-color="#2b8ff7" v-if="person.identity==1"
			url="/123/321"
			>
	</change-btn>
  </div>
</template>

<script>
import ChangeBtn from 'components/funComp/ChangeBtn';
import CounselorFun from 'components/areaComp/CounselorFun';
import CommonFun from 'components/areaComp/CommonFun';
export default {
	components:{
		ChangeBtn,CounselorFun,CommonFun
	},
	props:{
		data:{
  		type:Array,
  		default(){
  			return[
          {
            contitle:"",//图中标题
  					imgurl:'',//背景图
  					href:"null"
          },//是否连接
        ]
  		}
  	},
  	textColor:{type:String,default:"black"},
	  	user:{
	  		type:Array,
	  		default(){
	  			return{
	  				id:1,
					imgurl:"",
					username:"陈雪琴",
					UserType:'common',//用户当前的身份
					isCounselor:false,//是否已经成为咨询师
	  			}
	  		}
	  	},
	  	hintnum:{type:Number,default:2},
	},
  data () {
    return {
    	btntext:"",
    	token:'',
  		url1:'http://xinling.songtaxihuan.com/test/test?uid=3',
  		url2:'http://xinling.songtaxihuan.com/user/get_user_info',
  		person:{},
    }
  },
  ready:function(){
  	if (this.user.UserType=="counselor") {
  		this.btntext='切换到普通用户'
  	}else if (this.user.UserType=="common") {
  		this.btntext='切换到咨询师身份'
  	}
  	$.ajax({
          url: this.url1,
          type:'GET', 
          dataType: 'json',
          cache: true,
          async:false,
          success: function(data) {
            this.token = data.data
            console.log(this.token);	
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.token, status, err.toString());
          }.bind(this)
        });

	  	$.ajax({
          url: this.url2,
          type:'POST', 
          dataType: 'json',
          cache: true,
          data: {
          u_id:1,
					token:this.token,
		  },
          cache: false,
          success: function(data) {
          	console.log(data)
            this.person = data.data
            console.log('person: '+this.person.identity);
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.questionList, status, err.toString());
          }.bind(this)
        });
  },

  // destroyed:function(){
  // 	if (this.user.UserType=="counselor") {
  // 		this.btntext='切换到普通用户'
  // 	}else if (this.user.UserType=="common") {
  // 		this.btntext='切换到咨询师身份'
  // 	}
  // },
  methods:{
  	handleClick(){
  		if (this.user.UserType=="counselor") {
  			this.btntext='切换到咨询师身份';
  			this.user.UserType="common"
  		}else if (this.user.UserType=="common") {
  			this.btntext='切换到普通用户';
  			this.user.UserType="counselor"
  		}
  	}
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'
.person-msg-body{
	overflow: hidden;
	height: 5.15rem;
	padding-right: 0.75rem;
	padding-left: 0.75rem;
	background-color: #fff;

}
.person-msg-basic{
	position: relative;
	overflow: hidden;
	height: 5.15rem;
	border-bottom: 0.05rem solid #eee;
}
.img-body{
	overflow: hidden;
	float: left;
	margin-top: 0.95rem;
	width: 3.25rem;
	height: 3.25rem;
	border-radius: 3.25rem;
	background-color: #eee;
}
.img-imgs{
	background-color: #fff;
	width: 3.25rem;
	height: 3.25rem;
	border-radius: 3.25rem;
}
.person-msg-name{
	float: left;
	overflow: hidden;
	height: 100%;
	margin-left: 0.7rem;
}
.name-text{
	display: block;
	margin-top: 1.55rem;
	height:1.35rem;
	font-size: 0.9rem;
	font-weight: 700;
}
.btnstyle{
	border: 0;
	background-color: #efefef;
	color: #999999;
	margin-top: 0.3rem;
	height: 1.0rem;
	line-height: 1.0rem;
	font-size: 0.55rem
}
.hint-img{
	position: relative;
	float: right;
	height: 1.0rem;
	width: 1.0rem;
	margin-right: 0.55rem;
	margin-top: 2.0rem;
}
.imgimg{
	color: $ztc;
	font-size: 1.0rem;
}
.hint-text{
	position: absolute;
	height: 0.9rem;
	width: 0.9rem;
	background-color: #e25f52;
	border-radius: 0.8rem;
	font-size: 0.7rem;
	color: #fff;
	text-align: center;
	line-height: 0.9rem;
	right:-0.4rem;
	bottom:0.35rem;
}
.person-msg-fun{
	height:4.45rem;
	width: 100%;
	padding-top: 1.0rem;
	overflow: hidden;
}
.function-body{
	position: relative;
	width: 33.33%;
	overflow: hidden;
	float: left;
}
.fun-img{
	font-size: 1.2rem;
	overflow: hidden;
	color: #29abe2;
}
.fun-text{
	display: block;
	font-size: 0.6rem;
	color: #000;
}
</style>
