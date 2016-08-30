<template>
  <div >
    <div class="person-msg-body">
    	<div class="person-msg-basic">
    		<div class="img-body">
    			<img :src="imgurl" class="img-imgs">
    		</div>
    		<div class="person-msg-name">
    			<span class="name-text">{{username}}</span>
				<a href="#" class="button button-round btnstyle">编辑个人资料</a>
    		</div>
    		<div class="hint-img">
    			<i class="iconfont imgimg">&#xe605;</i>
    			<div class="hint-text" v-if="hintnum<=99">{{hintnum}}</div>
    		</div>
    	</div>   	
    </div>

    <common-fun></common-fun>
    <change-btn btntext="切换到普通用户" style="margin-top:1.5rem"></change-btn>
  </div>
</template>

<script>
import ChangeBtn from '../components/funComp/ChangeBtn';
import CounselorFun from '../components/areaComp/CounselorFun';
import CommonFun from '../components/areaComp/CommonFun';
export default {
	components:{
		ChangeBtn,CounselorFun,CommonFun
	},
  data () {
    return {
      
    }
  },
  props:{
  	imgurl:{type:String,default:"http://img3.imgtn.bdimg.com/it/u=3399543288,3713437897&fm=206&gp=0.jpg"},
  	username:{type:String,default:"陈雪琴"},
  	hintnum:{type:Number,default:2}
  }
}
</script>

<style scoped>
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
	color: #29abe2;
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
