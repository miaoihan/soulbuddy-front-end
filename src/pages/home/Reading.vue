<template>
  <div class="wrapper" style="margin-top: .5rem">
  	<div class="r-type part">
  		<div class="container-20-lr">
  			<div class="title-top">
  				分类
  			</div>
  			<div class="type-box">
  				<div class="type-item">
  					<a v-link="{path:'/science'}">
		  				<div class="t-wrap">
		  					<div class="item-bg">
		  						<img src="../../../src/assets/imgs/kepu.png" alt="">
		  					</div>
		  					<div class="item-txt">
		  						科普
		  					</div>
	  					</div>
  					</a>
  				</div>
  				<div class="type-item">
						<a v-link="{path:'/relax'}">
	  					<div class="t-wrap">
		  					<div class="item-bg">
		  						<img src="../../../src/assets/imgs/fangsong.png" alt="">
		  					</div>
		  					<div class="item-txt">
		  						放松
		  					</div>
	  					</div>
  					</a>
  				</div>
  				<div class="type-item">
  					<a v-link="{path:'/relax'}">
	  					<div class="t-wrap">
		  					<div class="item-bg">
		  						<img src="../../../src/assets/imgs/case.png" alt="">
		  					</div>
		  					<div class="item-txt">
		  						案例
		  					</div>
	  					</div></a>
  					</div>
  			</div>
  		</div>
  	</div> <!-- end type -->
  	<div class="hot-tag part" style="margin-top:10px">
	  	<div class="container-20-lr">
	  		<div class="title-top">
	  			热门标签
	  		</div>
	  		<div class="label-box">
	  			<span class="label-big-border">
	  				抑郁症
	  			</span>
	  			<span class="label-big-border">
	  				焦虑症
	  			</span>
	  			<span class="label-big-border">
	  				抑郁症
	  			</span>
	  			<span class="label-big-border">
	  				焦虑
	  			</span>
	  			<span class="label-big-border">
	  				抑郁症
	  			</span>
	  			<span class="label-big-border">
	  				焦虑症阿萨
	  			</span>
	  			<span class="label-big-border">
	  				抑郁症
	  			</span>
	  			<span class="label-big-border">
	  				焦虑症
	  			</span>

	  		</div>
	  	</div>
  	</div><!-- end tag -->
  	<aside style="text-align:center;margin: 30px 0 15px 0">
  		  所有文章 
  	</aside>
  	<article-list :data="data"></article-list>
  	<div class="seemore" style="margin-bottom: 80px">查看更多</div>
  </div>
</template>

<script>
  export default{
  	components: {
  		ArticleList: require('components/areaComp/ArticleList')
	  },
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  		return[
		  			{
		  				
		  			},
		  		]
		  	}
	  	}
	  },
	  
  }
</script>

<style scoped>
	
	.r-type{
		height: 10rem
	}

	.title-top{
		height: 2.5rem;
		line-height: 2.5rem;
		text-align: center;
		color: #999;
		font-size: 14px;
		border-bottom: 1px solid #e3e3e3
	}
	.type-box{
		display: flex;
		justify-content: space-between;
		margin-top: 1.0rem;
	}
	.type-item{
		flex: 1;
		
	}
	.t-wrap{
		height: 105px;
		width: 95%;
		border: 1px solid #DEDEDE;
		border-radius: 6px;
	}
	.item-bg{
		height: 3.0rem;
		width: 100%;
	}
	.item-bg img{
		border-radius: 6px 6px 0 0;
	}
	.item-txt{
		line-height: 2.0rem;
		text-align:center;
		font-size: 14px;
	}


</style>
