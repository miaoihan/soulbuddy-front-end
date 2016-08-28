<template>
  <div class="changebtn-body">
	  <a href="id">
	    <span class="text">{{btntext}}</span>
	    <i class="icon-img iconfont">&#xe603;</i>
	  </a>
  </div>
</template>

<script>
export default {
	props:{
		btntext:{type:String}
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
	background-color: #29abe2;
}
.text{
	color: #fff;
	margin-left: 1.0rem;
}
.icon-img{
	color: #fff;
	float: right;
	margin-right: 1.0rem;
}
</style>
