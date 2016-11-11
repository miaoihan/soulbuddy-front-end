<template>
  <div>
  	<nav-header :title="$route.query.title" left='back'></nav-header>
    <div class="label-box" style="margin-bottom: 10px">
      <span v-for="tag in tags" @click="choose($index,tag)"
            :class="$index==index ? 'label-big-bg' : 'label-big-border'">
        <!-- <a v-link="'/reading?type='+tag">{{tag}}</a> -->
        {{tag}}
      </span>
    </div>
  	<div class="article-list">
  		<article-list :data="readList"></article-list>
      <div class="seemore" @click="seeMore"
           v-if="readList.length>0 && index == -1">
        查看更多
      </div>
      <div class="seemore" @click="seeMores(tag)"
           v-if="readList.length>0 && index != -1">
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
        index: -1,
        tag: '',
        cid: this.$route.query.cid,
      }
    },
    methods:{
      seeMore(){
        $.post(global.domain +'/article/get_article_list',
          {cat_id: this.cid, page: ++this.page}, v => 
          this.readList = this.readList.concat(v.data), 'json');
      },
      seeMores(tag){
        $.post(global.domain +'/article/get_article_list',
          {cat_id: this.cid, page: ++this.page, tags: tag}, v => 
          this.readList = this.readList.concat(v.data), 'json');
      },
      choose(index,tag){
        // alert(index)
        // 清除页码
        this.page = 1;
        this.tag = tag;
        this.index = index; 
        $.post(global.domain +'/article/get_article_list',
          { cat_id: this.cid, page: this.page, tags: tag },
          v => this.readList = v.data ,'json');
      },
    },
    created(){
      let tags, cid = this.$route.query.cid;
      if (cid == 1) tags = 'science_tags';
      else if(cid == 2) tags = 'relax_tags'; 
      else if(cid == 3) tags = 'story_tags'; 
      // 阅读列表
      $.post(global.domain +'/article/get_article_list',
        { cat_id: this.$route.query.cid },
        v => this.readList = v.data ,'json');
      // 标签
      $.ajax({
          url: global.domain +'/question/get_tags_list',
          type:'GET', 
          dataType: 'json',
          cache: true,
          success: v => {this.tags = v.data[tags];},
          error: err => console.error(err.toString())
        });
    },

  }
</script>

<style scoped lang="stylus">
	
	
</style>
