<template>
  <div>
    <div class="topbar-body">
    	<button class="returnbtn" @click="handleClickRetuen(event)">
    		<i class="iconfont">&#xe602;</i>
    	</button>
    	<span class="bar-text">
    		{{barname}}
    	</span>
    </div>
  </div>
</template>

<script>
export default {
	props:{
		barname:{type:String,default:"绑定手机"}
	},
    data () {
        return {
      
        }
    },
    methods:{
    	handleClickRetuen(event){
    		console.log("click the returnbtn")
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topbar-body{
	/*position: fixed;*/
	overflow: hidden;
	display: block;
	height: 2.2rem;
	width: 100%;
	background-color: #29abe2;
	text-align: center;
}
.returnbtn{
	left: 0.8rem;
	line-height: 2.2rem;
	height: 2.2rem;
	position: absolute;
	background-color: #29abe2;
	border:0;
	font-size: 0.8rem;
	font-weight:900;
	color: #fff;
}
.bar-text{
	font-size: 0.8rem;
	display: block;
	height: 100%;
	line-height: 2.2rem;
	color:#fff;
	font-weight:900;
	/*margin:0 auto;*/
}
</style>
