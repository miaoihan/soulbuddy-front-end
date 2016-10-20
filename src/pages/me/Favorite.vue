<template>
<nav-header title="收藏" left="back"></nav-header>
  <div>
  	<ul class="nav-tab">
  		<li :class="{active: index == 1}"
  				@click="change(1)">
  				咨询师</li>
  		<li :class="{active: index == 2}"
  				@click="change(2)">
  				经验达人</li>
  		<li :class="{active: index == 3}"
  				@click="change(3)">
  				文章</li>
  	</ul>
  	<div class="cst-list far-bom" style="margin-top: 0.5rem">
  		<cst-list :data="data1" v-if="index==1"></cst-list>
  		<kol-list :data="data2" v-if="index==2"></kol-list>
  		<article-list :data="data3" v-if="index==3"></article-list>
  	</div>
  </div>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader';
  export default{
  	components: {
  		CstList: require('components/areaComp/CstList'),
  		KolList: require('components/areaComp/KolList'),
  		ArticleList: require('components/areaComp/ArticleList'),
  		NavHeader
	  },
	  methods:{
	  	change(i){
	  		this.index = i
	  	}
	  },
	  data(){
	  	return{
	  		index: 1,
		  	data1: [],
		  	data2: [],
		  	data3: [],
	  	}
	  },
	  ready(){
	  	//咨询师
	  	$.post(global.domain +'/user/get_my_favorite',
	  		{ token: global.token ,
	  		  type: 1 ,
	  		},
	  		v => this.data1 = v.data ,'json');
  		//经验达人
	  	$.post(global.domain +'/user/get_my_favorite',
	  		{ token: global.token ,
	  			type: 2 },
	  		v => this.data2 = v.data ,'json');
  		//文章
	  	$.post(global.domain +'/user/get_my_favorite',
	  		{ token: global.token ,
	  			type: 3 },
	  		v => this.data3 = v.data ,'json');
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
