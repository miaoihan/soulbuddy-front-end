<!-- 
输入框
title 输入框的标题
btnname 右侧是否有按钮如果有则写上
placeholder   输入框默认值
name 输入框name
TitleColor  标题颜色
TextColor  输入字体颜色
author：long
 -->
<template>
  <div class="inputbox-body">
  	<span class="inputbox-title" :style="{color:TitleColor}">{{title}}</span>
  	<input type="text" class="inputbox-text" :placeholder="placeholder" :name="name" :style="{color:TextColor}"></input>
  	<div class="button-body">
  		<button class="inputbox-button" :class="{ display: btnname===''}" v-on:click="handleClick">
	  		{{btnname}}
	  	</button>
  	</div>
  </div>
</template>

<script>
export default {
	props:{
		title:{type:String},//输入框的标题
		btnname:{type:String,default:''},//右侧是否有按钮如果有则写上
		placeholder:{type:String},//输入框默认值
		name:{type:String},//输入框name
		TitleColor:{type:String},//标题颜色
		TextColor:{type:String}//输入字体颜色
	},
	action:{
		
	},
	methods:{
		handleClick(){
			// console.log("click the button")
		}
	},
	ready:function(){
		// alert(this.name)
	},
	data () {
	  return {
	      
	  }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputbox-body{
	overflow: hidden;
	width: 100%;
	height: 2.5rem;
	background-color: #fff;
	font-size: 0.8rem;
}
.inputbox-title{
	float: left;
	line-height: 2.5rem;
	margin-left: 1.0rem;
	color: #d4d4d4;

}
.inputbox-text{
	float: left;
	color: #d4d4d4;
	height: 2.5rem;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	border:0;
	/*width: 100%;*/
	/*display: block;*/
}
input:focus{
    border:0;
}
/*.button-body{
	margin-top: 0.55rem;
	overflow: hidden;
	height: 1.4rem;
}*/
.inputbox-button{
	position: absolute;
	font-size: 0.7rem;
	height: 1.4rem;
	width: 4.75rem;
	right: 0.6rem;
	border-radius: 1.4rem;
	background-color: #2b8ff7;
	color: #fff;
	border:0;
	margin-top: 0.55rem;
}
.display{
	display: none;
}
</style>
