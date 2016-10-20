<!-- 长条形功能按钮 -->
<template>
  <div class="changebtn-body"> 
  <a style="width:100%" v-link="url">
	    <span class="text" :style="{color:TextColor}">{{btntext}}</span>
	    
	    <i class="icon-img iconfont" :style="{color:IconColor}" v-if="isIcon==true">&#xe60d;</i>
	    <span class="placeholder">{{placeholder}}</span>
  </a>
  </div>
</template>
<script>
export default {
	props:{
		url:{type:String},//url
		btntext:{type:String},//功能名称
		placeholder:{type:String},
		TextColor:{type:String,default:"black"},//控制文字颜色
		IconColor:{type:String,default:"#bbb"},//箭头icon颜色
		isIcon:{type:Boolean,default:false},
		href:{type:String,default:null},//是否需要跳转 
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
.placeholder{
	float: right;
	margin-right: 0.5rem;
	color: #bdbdbd;
}
.text{
	float: left;
}
.icon-img{
	float: right;
}
</style>
