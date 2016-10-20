<template>
  <div>
  	<nav-header title="科普" left='back'></nav-header>
  	<div class="article-list">
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
        readList: []
      }
    },
    ready(){
      // 科普阅读列表
      $.post(global.domain +'/article/get_article_list',
        {   page: 1,
          cat_id: 1 },
        v => this.readList = v.data ,'json');
    },

  }
</script>

<style scoped lang="stylus">
	
	.article-list
		margin-bottom 1.5rem
	

	
</style>
