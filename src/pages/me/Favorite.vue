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
  	<div class="cst-list" style="margin-top: 0.5rem">
  		<cst-list :data="data1" v-if="index==1"></cst-list>
  		<kol-list :data="data2" v-if="index==2"></kol-list>
  		<article-list :data="data3" v-if="index==3"></article-list>
  		
  	</div>
  	<div class="seemore" @click="seeMore(index)" v-if="(index===1 && data1.length>9) || (index===2 && data2.length>9) || (index===3 && data3.length>9)">
      查看更多
    </div>
  	<div class="bom-div"></div>
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
	  	},
	  	seeMore(i){
	  		if (i == 1) {
	          $.post(global.domain +'/user/get_my_favorite',
	            { token: global.token, page: ++this.page1,type: 1 }, v => 
	            this.data1 = this.data1.concat(v.data), 'json');
	        }else if(i == 2){
	          $.post(global.domain +'/user/get_my_favorite',
	            { token: global.token, page: ++this.page2,type: 2 }, v => 
	            this.data2 = this.data2.concat(v.data), 'json');
	        }else if(i == 3){
	          $.post(global.domain +'/user/get_my_favorite',
	            { token: global.token, page: ++this.page3,type: 3 }, v => 
	            this.data3 = this.data3.concat(v.data), 'json');
	        }
	  	}
	  },
	  data(){
	  	return{
	  		index: 1,
		  	data1: [],
		  	data2: [],
		  	data3: [],
		  	page1:1,
		  	page2:1,
		  	page3:1
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
