<template>
  <div class="inputbox-body">
  	<span class="inputbox-title">{{title}}</span>
  	<input type="text" class="inputbox-text" :placeholder="placeholder" :name="name"></input>
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
		title:{type:String},
		btnname:{type:String,default:''},
		placeholder:{type:String},
		name:{type:String}
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
<style scoped>
.inputbox-body{
	overflow: hidden;
	width: 100%;
	height: 2.5rem;
	background-color: #fff;
}
.inputbox-title{
	float: left;
	font-size: 0.7rem;
	line-height: 2.5rem;
	margin-left: 1.0rem;
	color: #d4d4d4;
}
.inputbox-text{
	float: left;
	color: #d4d4d4;
	height: 2.5rem;
	margin-left: 1.0rem;
	font-size: 0.7rem;
	border:0;
	display: block;
}
input:focus{
    border:0;
}
.button-body{
	margin-top: 0.55rem;
	overflow: hidden;
	height: 1.4rem;
}
.inputbox-button{
	position: absolute;
	font-size: 0.7rem;
	height: 1.4rem;
	width: 4.5rem;
	right: 0.75rem;
	background-color: #29abe2;
	color: #fff;
	border:0;
}
.display{
	display: none;
}
</style>
