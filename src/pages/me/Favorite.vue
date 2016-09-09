<template>
  <div>
  	<ul class="nav-tab">
  		<li :class="{active: index == 1}"
  				@click="change(1)">咨询师</li>
  		<li :class="{active: index == 2}"
  				@click="change(2)">经验达人</li>
  		<li :class="{active: index == 3}"
  				@click="change(3)">文章</li>
  	</ul>
  	<div class="cst-list" style="margin-top: 0.5rem">
  		<cst-list :data = "data" v-if="index==1"></cst-list>
  		<kol-list :data = "data2" v-if="index==2"></kol-list>
  		<article-list :data = "data3" v-if="index==3"></article-list>
  	</div>
  </div>
</template>

<script>
  export default{
  	components: {
  		CstList: require('components/areaComp/CstList'),
  		KolList: require('components/areaComp/KolList'),
  		ArticleList: require('components/areaComp/ArticleList')
	  },
	  data(){
	  	return{
	  		index: 1
	  	}
	  },
	  methods:{
	  	change(i){
	  		this.index = i
	  	}
	  },
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  		return[
		  			{
		  				name: '陈雪晴',
		  				desc: '国家二级心理咨询师',
		  				label: [
		  				{
		  					name: '自杀倾向',
		  				},
		  				{
		  					name: '自残',
		  				},
		  				],
		  				num: 89
		  			},
		  			{
		  				name: '王大伟',
		  				desc: '国家二级心理咨询师',
		  				label: [{
		  					name: '自杀倾向'
		  				}],
		  				num: 66
		  			},
		  			{
		  				name: '李梓嫚',
		  				desc: '国家二级心理咨询师',
		  				label: [{
		  					name: '自杀倾向'
		  				}],
		  				num: 59
		  			},
		  		]
		  	}
	  	},
	  	data2: {
	  		type: Array,
		  	default(){
		  		return[
		  			{
		  				name: '陈雪晴',
		  				desc: '经验达人',
		  				label: [
		  				{
		  					name: '自杀倾向',
		  				},
		  				{
		  					name: '自残',
		  				},
		  				],
		  				num: 89
		  			},
		  			{
		  				name: '王大伟',
		  				desc: '经验达人',
		  				label: [{
		  					name: '自杀倾向'
		  				}],
		  				num: 66
		  			},
		  			{
		  				name: '李梓嫚',
		  				desc: '经验达人',
		  				label: [{
		  					name: '自杀倾向'
		  				}],
		  				num: 59
		  			},
		  		]
		  	}
	  	},
	  	data3: {
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
	@import '../../assets/stylus.styl'
	
	.nav-tab li
		width 33%

	.active
		color #444
		font-weight: 700
		border-bottom: 2px solid $ztc
		
</style>
