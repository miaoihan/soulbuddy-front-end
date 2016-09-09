<template>
  <div>
  	<nav-header title="科普"></nav-header>
  	<div class="swiper wrapper">
      <roll-card :data="swiperList"></roll-card>
  	</div>
  	<div class="article-list">
  		<article-list :data="data"></article-list>
  	</div> <!-- end article-list -->
  </div>
</template>

<script>
  export default{
  	components: {
  		NavHeader: require('components/funComp/NavHeader'),
  		RollCard: require('components/funComp/RollCard'),
  		ArticleList: require('components/AreaComp/ArticleList'),
	  },
    data(){
      return {
        swiperList:[
          {
            contitle:"",//图中标题
            imgurl:require('assets/imgs/p001.png'),//背景图
            href:null
          },
          {
            contitle:"",//图中标题
            imgurl:require('assets/imgs/p001.png'),//背景图
            href:null
          },
          {
            contitle:"",//图中标题
            imgurl:require('assets/imgs/p001.png'),//背景图
            href:null
          },
        ]
      }
    },
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  		return[
		  			{
		  				title: '为什么顶级艺术家当中女性很少即使是在当今？',
		  				content: '如何评价IT业界老板和员工都跪舔妇女来当程序员，但是现在男女比例还是如此大的现状？ ——大部分女性压根就没打算要来。',
		  				isRec: true,
		  				
		  			},
		  			{
		  				title: '如何评敖厂长最新一期囧的呼唤发现水下八关？',
		  				content: '嘛，有些人的优越感还是可以的，你们知道msx2有水下八关为什么从来不站出来说一下呢？厂长也说了好几年前就有人开始验证水下八关了，为什么从那个时候开始你就不说呢？为什么非得等到有人验证完就立马站出来开始嘲讽呢？ 一口一句msx2老玩家都知道',
		  				isRec: false,
		  			},{
		  				title: '干货，别说你真的会用抑郁药物！来看看',
		  				content: '错！ 印度制造崛起会让中国多一个市场！ 题主这种人的心态就是小人心态，穷人思维。 看“人有多卑鄙”里有个高票答案，有人哥哥考了个理科状元',
		  				isRec: false,
		  			},
		  		]
		  	}
	  	}
	  },

  }
</script>

<style scoped lang="stylus">
	.swiper{
		height: 8.0rem;
		margin-bottom: 1rem 
	}
	
	.article-list
		margin-bottom 1.5rem
	

	
</style>
