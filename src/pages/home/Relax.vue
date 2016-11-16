<template>
  <div>
  	<nav-header :title="$route.query.title" left='back'></nav-header>
    <div class="label-box" style="margin-bottom: 10px">
      <span class="label-big-border" v-for="tag in tags">
        <a v-link="'/reading?type='+tag">{{tag}}</a>
      </span>
    </div>
  	<div class="article-list">
  		<article-list :data="readList"></article-list>
      <div class="seemore" @click="seeMore" v-if="readList.length!=0">
        查看更多
      </div>
      <div class="seemore" v-if="readList.length==0">
        暂无内容~
      </div>
  	</div> <!-- end article-list -->
    <div class="bom-div"></div>
  </div>
</template>

<script>
  export default{
  	components: {
  		NavHeader: require('components/funComp/NavHeader'),
  		ArticleList: require('components/AreaComp/ArticleList'),
	  },
    data(){
      return {
        readList: [],
        tags:[],
        page: 1,
      }
    },
    methods:{
      seeMore(){
        // Zepto.toast("没有更多了",120000,'toast-info');
        $.post(global.domain +'/article/get_article_list',
          {cat_id: 2, page: ++this.page}, v => 
          this.readList = this.readList.concat(v.data), 'json');
      },
    },
    ready(){
      // 科普阅读列表
      $.post(global.domain +'/article/get_article_list',
        {  cat_id: 2 },
        v => this.readList = v.data ,'json');
      // 解忧标签
      $.ajax({
          url: global.domain +'/question/get_tags_list',
          type:'GET', 
          dataType: 'json',
          cache: true,
          success: v => {this.tags = v.data.relax_tags;},
          error: err => console.error(err.toString())
        });
    },

  }
</script>

<style scoped lang="stylus">

	// .article-list
	// 	margin-bottom 1.5rem
	

	
</style>
