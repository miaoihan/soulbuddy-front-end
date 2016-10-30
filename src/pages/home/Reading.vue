<template>
  <div class="wrapper" style="margin-top: .5rem">
  	<div class="r-type part">
  		<div class="container-20-lr">
  			<div class="title-top">
  				分类
  			</div>
  			<div class="type-box">
  				<div class="type-item">
  					<a v-link="'/science?title='+catList[0].cat_name">
		  				<div class="t-wrap">
		  					<div class="item-bg">
		  						<img src="../../../src/assets/imgs/kepu.png" alt="">
		  					</div>
		  					<div class="item-txt">
		  						{{catList[0].cat_name}}
		  					</div>
	  					</div>
  					</a>
  				</div>
  				<div class="type-item">
						<a v-link="'/relax?title='+catList[1].cat_name">
	  					<div class="t-wrap">
		  					<div class="item-bg">
		  						<img src="../../../src/assets/imgs/fangsong.png" alt="">
		  					</div>
		  					<div class="item-txt">
		  						{{catList[1].cat_name}}
		  					</div>
	  					</div>
  					</a>
  				</div>
  				<div class="type-item">
  					<a v-link="'/case?title='+catList[2].cat_name">
	  					<div class="t-wrap">
		  					<div class="item-bg">
		  						<img src="../../../src/assets/imgs/case.png" alt="">
		  					</div>
		  					<div class="item-txt">
		  						{{catList[2].cat_name}}
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
	  			<span class="label-big-border" v-for="tag in tags">
		  			<a v-link="'/reading?type='+tag">{{tag}}</a>
	  			</span>
	  		</div>
	  	</div>
  	</div><!-- end tag -->
  	<aside style="text-align:center;margin: 18px 0 15px 0">
  		  所有文章 
  	</aside>
  	<article-list :data="data"></article-list>
  	<div class="seemore" style="margin-bottom: 80px" @click="seeMore">查看更多</div>
  </div>
</template>

<script>
  export default{
  	components: {
  		ArticleList: require('components/areaComp/ArticleList')
	  },
	  props:{
	  	data: {type: Array},
	  },
	  data () {
	    return {
	      tags:{},
	      catList: [],
	      art_page: 1,
	    }
	  },
	  methods:{
	  	// 加载更多
      seeMore(){
        // console.log(type)
        // Zepto.toast("没有更多了",120000,'toast-info');
          $.post(global.domain +'/article/get_article_list',
            { page: ++this.art_page}, v => 
            this.data = this.data.concat(v.data), 'json');
      },
	  },
	  ready(){
	  	$.ajax({
          url: global.domain +'/question/get_tags_list',
          type:'get', 
          dataType: 'json',
          cache: true,
          success: v => {this.tags = v.data.index_tags;},
          error: err => console.error(err.toString())
        });
	  	$.ajax({
          url: global.domain +'/article/get_cat_list',
          type:'get', 
          dataType: 'json',
          cache: true,
          success: v => {this.catList = v.data;},
          error: err => console.error(err.toString())
        });
	  }
	  
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
