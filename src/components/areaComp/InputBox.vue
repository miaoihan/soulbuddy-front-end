<template>
  <div class="inputbox-body">
  	<span class="inputbox-title">{{title}}</span>
  	<input type="text" class="inputbox-text" :placeholder="placeholder" ></input>
  	<button class="inputbox-button" :class="{ display: buttonName == null}">{{buttonName}}</button>
  </div>
</template>

<script>
export default {
	props:{
		title:{type:String},
		placeholder:{type:String},
		buttonName:{type:String,default:null},
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
	height: .5rem;
	background-color: #fff;
}
.inputbox-title{
	float: left;
	font-size: .14rem;
	line-height: .5rem;
	margin-left: .2rem;
	color: #d4d4d4;
}
.inputbox-text{
	float: left;
	color: #d4d4d4;
	height: .5rem;
	margin-left: .2rem;
	font-size: .14rem;
	border:0;
	display: block;
}
input:focus{
    /*border:.01rem solid yellow;*/
}
.inputbox-button{
	float: right;
	font-size: .14rem;
	height: .28rem;
	width: .9rem;
	overflow: hidden;
	margin-top: .11rem;
	margin-right: .15rem;
	background-color: #29abe2;
	color: #fff;
	border:0;
}
.display{
	display: none;
}
</style>
