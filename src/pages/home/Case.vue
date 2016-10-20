<template>
  <div>
  	<nav-header title="案例" left='back'></nav-header>
   <!--  <div class="label-box" style="margin-bottom: 10px">
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
    </div> -->
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
          cat_id: 3 },
        v => this.readList = v.data ,'json');
    },

  }
</script>

<style scoped lang="stylus">

	.article-list
		margin-bottom 1.5rem
	

	
</style>
