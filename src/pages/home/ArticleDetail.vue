<template>
<!-- 文章详情 -->
<nav-header left="back" :fav-count="data.fav_count" :fav-id="art_id_fav" :fav-type="3" :collected="collected"></nav-header>
   <div class="wrapper">
   		<!-- 文章头部 -->
      <section class="art-top ztc">
          <h1 class="art-title over-2">
            {{data.title}}
          </h1>
          <!-- {{data.tags | str2arr}} -->
          <!-- 标签组 -->
          <div class="art-label">
            <span class="label label-border" v-for="tag of tags.toString() | str2arr">{{ tag }}</span>
          </div>
          <!-- 信息 -->
          <article class="art-meta">
            <span>{{data.author}}</span>
            <time>{{data.create_time.replace('00:00','')}}</time>
            <aside class="pull-right">来源：{{data.from}}</aside>
          </article>
      </section>
      <!-- 文章主体 -->
      <section class="art-main">
      		{{{ data.content }}}
      </section>
      <footer class="art-footer">
	      <aside class="tips">
	      	文章中所注明来源：“{{data.from}}”的文字、图片和音视频资料，版权均属于该来源所有，非经授权，任何媒体、网站或个人不得转载，违者必究。
	      </aside>
      </footer>
   </div>
</template> 

<script>
import NavHeader from 'components/funComp/NavHeader'
   export default{
     components:{
       NavHeader
     },
     data(){
     	return{
        tags:[],
        art_id_fav:"",
        collected:false,
        article_info:[],
     	}
     },
     props:{
       data:{
         type: Object,
         }
       },
     ready(){
      this.art_id_fav=this.$route.params.art_id.toString()
      $.ajax({
        url: global.domain+'/article/get_article_info',
        type:'POST', 
        dataType: 'json',
        cache: true,
        data:{
          art_id: this.$route.params.art_id
        },
        // async:false,
        success: function(data) {
          // console.log(data)
          this.data = data.data
          this.tags = data.data.tags.split(";")
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(lunboArr, status, err.toString());
        }.bind(this)
      });
      $.ajax({
            url: global.domain+'/user/get_my_favorite',
            type:'POST', 
            dataType: 'json',
            cache: true,
            data:{
              token:global.token,
              type:3
            },
            success: data => {
              this.article_info = data.data;
              // 判断是否收藏
              // 已收藏的ID数组
              let arr=[];
              for(let it of this.article_info){
                arr.push(it.art_id)
              }
              console.log(arr)
              let test=arr.indexOf(this.art_id_fav);
              console.log(this.art_id_fav)
              console.log(test)
              if(test!=-1){
                this.collected=true
              }
            },
            error: err => err.toString(),
      });
      console.log(this.article_info);
            
     },

    }
</script>

<style scoped lang="stylus">
  .art-top
    height: 155px
    padding 1.10rem 1.0rem 1.1rem 0.95rem
    .art-title
    	font-size 0.85rem
    .art-label
      margin 0.5rem 0 0.6rem 0
      font-size: 12px
      span
        margin-right: 0.6rem
    .art-meta
     	font-size: 13px
  .art-main
  	padding 1.0rem 1.1rem
  	background-color: #FFF
  .art-footer
  	background-color: #FFF
  	padding 1.0rem 1.0rem 4.75rem 1.0rem
</style>
