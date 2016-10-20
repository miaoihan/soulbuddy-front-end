<template>
  <div>
  	<nav-header :title="title" left='back'></nav-header>
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
        readList: [],
        title: ''
      }
    },
    created(){
      this.title = this.$route.query.type
    },
    ready(){
      // alert(this.$route.query.type)
      // 科普阅读列表
      $.post(global.domain +'/article/get_article_list',
        {   page: 1,
            tags: this.$route.query.type },
        v => this.readList = v.data ,'json');
    },

  }
</script>

<style scoped lang="stylus">

.article-list{
	margin-bottom 4.0rem
  margin-top 10px  
}
</style>
