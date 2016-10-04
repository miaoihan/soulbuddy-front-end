<template>
  <!-- <div class="login-background" :style="height:{{srcHeight}}rem"> -->
  <div class="login-background wrapper">
    <img :src="background.img"/>
    <div class="loginBtn" @click="handClick(e)">
    	<a v-link="'home'">
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
					img:require("assets/imgs/login.png")
				}							
			}			
		},
    token:{
      type:String,
      default:''
    }
	},
	data(){
      return{
        srcHeight:0,//屏幕高度
        srcHeightstr:'a',
        url:"http://xinling.songtaxihuan.com/test/test?uid=3"
      }
    },
    methods:{      
    	handClick(e){
      //   let that = this
      //   that.$http.get('http://xinling.songtaxihuan.com/test/test?uid=3').then((response) => {
      //   // success callback
      //   this.token = response.body;
      //   console.log(this.token)
      // }, (response) => {
      //   // error callback
      // });
          $.ajax({
          url: this.url,
          type:'get', 
          dataType: 'json',
          // jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)  
          // jsonpCallback: "receive",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
          cache: false,
          success: function(data) {
            this.token = data.data
            console.log(this.token);
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.url, status, err.toString());
            console.log(222);
          }.bind(this)
        });
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
</style>
