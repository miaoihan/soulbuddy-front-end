<template>
	<nav-header title="关于我们" left="back" right=""></nav-header>
	<div class="about-box wrapper">
		<div class="title-box">
			<h1><span class="about-title container-6">关于我们</span></h1>
		</div>	
		<div class="container-16">
			<p>{{content}}</p>
		</div>
	</div>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader'
export default {
	components:{
		NavHeader
	},
	props:{
		
	},
  data () {
    return {
      content:''
    }
    
  },
  methods:{
    	   
  },
  ready(){
	$.ajax({
	   url: global.domain +"/index/about_us",
	   type:'post', 
	   dataType: 'json',
	   async:false,
	   success: function(data) {
	     this.content=data.data
	   }.bind(this),
	   error: function(xhr, status, err) {
	     console.err(err.toString())
	   }.bind(this)
	});
  }
}
</script>

<style scoped>
.about-box{
	width: 100%;
	height: 75.0rem;
	background: #fff
}
.title-box{
	text-align: center;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}
.about-title{
	font-size: 1.0rem;
	border-bottom: 0.1rem solid #000 
}
</style>
