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
  	<div class="item-input" v-if="placewhere==='left'"><input type="text" class="inputbox-text" :placeholder="placeholder" :name="name" :style="{color:TextColor}"></input>
  	</div>  
  	<div class="item-input" v-if="placewhere==='right'"><input type="text" class="inputbox-text" :placeholder="placeholder" :name="name" :style="{color:TextColor};"></input>
  	</div>	
  	<div class="button-body">
  		<button class="inputbox-button" v-if="btnname" v-on:click="handleClick">
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
		placewhere:{type:String,default:'right'},
		name:{type:String},//输入框name
		TitleColor:{type:String},//标题颜色
		TextColor:{type:String}//输入字体颜色
	},
	methods:{
		handleClick(){
			console.log("click the button")
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
<style scoped lang="stylus">
@import '../../assets/stylus.styl'
input::-webkit-input-placeholder {text-align:right}
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
	color: #d4d4d4;
}
.item-input{
	margin-left 0.25rem
	mix-width:100%;
	display:block;
	overflow hidden
}
.inputbox-text{
	float: left;
	color: #d4d4d4;
	height: 2.5rem;
	padding-left: 0.5rem;
	border:0;
	width: 100%;
}
input:focus{
    border:0;
}
.inputbox-button{
	position: absolute;
	font-size: 0.7rem;
	height: 1.4rem;
	width: 4.75rem;
	right: 0.6rem;
	border-radius: 1.4rem;
	background-color: $ztc;
	color: #fff;
	border:0;
	margin-top: 0.55rem;
}
</style>
