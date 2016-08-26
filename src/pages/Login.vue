<template>
  <!-- <div class="login-background" :style="height:{{srcHeight}}rem"> -->
  <div class="login-background">
    <img :src="background.img"/>
    <div class="loginBtn" v-on:click="handClick(e)">
    	<a href="#">
    		<img src="../assets/imgs/loginBtn.png">
    	</a>
    </div>
  </div>
</template>

<script>
export default {
	props:{
		background:{
			type:Array,
			default(){
				return{
					img:require("../assets/imgs/login.png")
				}							
			}			
		}
	},
	data(){
      return{
        srcHeight:0,//屏幕高度
        srcHeightstr:'',

      }
    },
    methods:{      
    	handClick(e){
    		console.log("click the loginButton");
    	} 
    },
    ready: function(){
      // this.srcHeight = document.body.clientWidth;
      // this.srcHeight = document.body.clientHeight/100;
      // this.srcHeightstr='height:'+this.srcHeight+'rem';
      // alert(this.srcHeightstr)
    },	  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login-background{
	width:100%;
	height: 100%;
	overflow: hidden;
}

.login-background img{
 	display: block;
    outline: none;
    border:0;
    height: 100%;
    width: 100%;
}	

.loginBtn{
	overflow: hidden;
	position: absolute;
	width: 45%;
	height: 6%;
	bottom: 12%;
	left: 27.5%;
	/*margin-right:-1.87rem;*/
}
.active{
	background-color: blue;
}
</style>
