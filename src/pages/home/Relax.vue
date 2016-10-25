<template>
  <div>
  	<nav-header :title="$route.query.title" left='back'></nav-header>
    <div class="label-box" style="margin-bottom: 10px">
      <span class="label-big-border" v-for="tag in tags">
        {{tag}}
      </span>
    </div>
  	<div class="article-list far-bom">
  		<article-list :data="readList"></article-list>
  	</div> <!-- end article-list -->
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
        tags:[]
      }
    },
    ready(){
      // 科普阅读列表
      $.post(global.domain +'/article/get_article_list',
        {   page: 1,
          cat_id: 2 },
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
