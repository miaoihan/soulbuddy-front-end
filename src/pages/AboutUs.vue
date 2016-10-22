<template>
	<nav-header title="关于我们" left="back" right=""></nav-header>
	<div class="body-us">
		<h1 class="container-6">关于我们</h1>
		<div class="container-6">
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

<style scoped lang="stylus">
.body-us{
	overflow: hidden;
	background: #fff;
	width: 100%;
	height: 100rem
}
.about-box{
	width: 100%;
	padding:0.75rem 1.0rem;
}
</style>
