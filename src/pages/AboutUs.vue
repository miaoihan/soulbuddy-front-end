<template>
	<nav-header title="关于我们" left="back" right=""></nav-header>
	<div class="about-box wrapper">
		<div class="about-title">
			<div class="about-logo">
				新灵伙伴
			</div>
			<div class="about-desc">
				<p>2016 soulbuddy.cn</p>
				<p>版本 1.0.0</p>
			</div>
		</div>
		<div class="container-16 about-content">
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
	@import '../assets/stylus.styl'
	
	.about-box{
		width: 100%;
		background: #fff
	}
	.title-box{
		/*text-align: center;*/
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.about-title{
		padding: 2.0rem 0;
		text-align: center;
	}
	.about-desc{
		font-size: 0.6rem
		color #999
	}
	.about-logo{
		font-size: 35px;
		color: $ztc;
	}
	.about-content{
		font-size: 13px
		// color #999
	}

</style>
