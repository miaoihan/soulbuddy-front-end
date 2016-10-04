<!-- 长条形功能按钮 -->
<template>
  <div class="changebtn-body"> 
	    <span class="text" :style="{color:TextColor}">{{btntext}}</span>
	    <i class="icon-img iconfont" :style="{color:IconColor}">&#xe603;</i>
  </div>
</template>
<script>
export default {
	props:{
		btntext:{type:String},//功能名称
		TextColor:{type:String,default:"black"},//控制文字颜色
		IconColor:{type:String,default:"#bbb"},//箭头icon颜色
		href:{type:String,default:null}//是否需要跳转 
	},
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.changebtn-body{
	width: 100%;
	height: 2.5rem;
	line-height: 2.5rem;
	overflow: hidden;
	background-color: #fff;
}
.text{
	float: left;
}
.icon-img{
	float: right;
}
</style>
