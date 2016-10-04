<template>
  <div class="wrapper">
  	<div class="yyzp body-eva wrapper">
  		<img class="img-eva" src="" alt="">
  		<i class="iconfont people">&#xe62b;</i>
  		<span class="num-peo">{{peonumy}}</span>
		<span class="function">国际通用抑郁自评表（SDS）</span>
		<div class="startBtn" v-if="statusy==0">
			开始
		</div>
		<span class="status" v-if="statusy==1">
			您已完成测评
		</span>
  	</div>
  	<div class="jlzp body-eva wrapper">
  		<img class="img-eva" src="" alt="">
  		<i class="iconfont people">&#xe62b;</i>
  		<span class="num-peo">{{peonumj}}</span>
  		<span class="function">国际通用焦虑自评表（SDS）</span>
  		<div class="startBtn" v-if="statusj==0">
			开始
		</div>
		<span class="status" v-if="statusj==1">
			您已完成测评
		</span>
  	</div>
  </div>
</template>

<script>

  export default{
    components: {
    	
    },
    props:{
    	statusy:{type:String,default:1},
    	statusj:{type:String,default:0},
    	peonumy:{type:String,default:231},
    	peonumj:{type:String,default:132}
    }
  }
</script>

<style>

.body-eva{
	height:8.0rem;
	width: 100%;
	background-color:#e6e6e6;
	margin-top:0.5rem;
	text-align:center;
}
.yyzp{
	position: relative;
}
.jlzp{
	position: relative;
}
.people{
	color: #FFFFFF;
	position: absolute;
	right:44px;
	z-index: 10;
	top:0.5rem;
	font-size: 0.7rem;
}
.num-peo{
	position: absolute;
	z-index: 10;
	font-family: SFUIText-Medium;
	font-size: 12px;
	color: #FFFFFF;
	right:1rem;
	top:0.45rem;
}
.function{
	display: block;
	position: relative;
	z-index: 10;
	font-size: 0.75rem;
	margin-top: 3.0rem;
	font-family: .PingFang-SC-Medium;
	color: #ffffff;
}
.startBtn{
	position: relative;
	/*display: block;*/
	z-index: 10;
	height: 1.4rem;
	width: 3.2rem;
	margin:0 auto;
	margin-top: 1.0rem;
	border: 1px solid #FFFFFF;
	border-radius: 25px;
	font-family: .PingFang-SC-Medium;
	font-size: 13px;
	color: #FFFFFF;
	line-height: 1.4rem;
}
.status{
	opacity: 0.5;
	font-family: .PingFang-SC-Regular;
	font-size: 13px;
	color: #FFFFFF;
	position: relative;
	z-index: 10;
	margin-top: 1.5rem;
}
.img-eva{
	position: absolute;
	z-index: 1;
	height: 100%;
	width: 100%;
	left: 0;
}	

</style>
