<template>
<!-- 文章详情 -->
<nav-header left="back" :fav-count="data.fav_count" :fav-id="art_id_fav" :fav-type="3" :collected="collected==true"></nav-header>
   <div class="wrapper">
   		<!-- 文章头部 -->
      <section class="art-top ztc">
          <h1 class="art-title over-2">
            {{data.title}}
          </h1>
          <!-- {{data.tags | str2arr}} -->
          <!-- 标签组 -->
          <p class="art-label">
            <span class="label label-border" v-for="tag of tags">{{ tag }}</span>
          </p>
          <!-- 信息 -->
          <article class="art-meta">
            <span>{{data.author}}</span>
            <time>{{data.create_time}}</time>
            <aside class="pull-right">来源：{{data.from}}</aside>
          </article>
      </section>
      <!-- 文章主体 -->
      <section class="art-main">
      		{{{ data.content }}}
      </section>
      <footer class="art-footer">
	      <aside class="tips">
	      	{{tips}}
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
     		tips:'本网站所有注明“来源：丁香园”的文字、图片和音视频资料，版权均属于丁香园所有，非经授权，任何媒体、网站或个人不得转载',
        tags:[],
        art_id_fav:"",
        collected:false,
        article_info:[],
     	}
     },
     props:{
       data:{
         type: Object,
           default() {
           	 return {
	              title: '一个人心理成熟的具体表现都有哪些？',
	              content: '有些朋友之间感情变淡是必然的事情，那表示我们不再有相同的志趣，所以不会再难过。“不要拉朋友一起上路，但却可以在路上找朋友。<br>懂得了每个人都在打一场自己并不能看见的战争，所以，尽量对他人友善，如果不能做到友善，起码保持安静。',
	              isRec: true,
	              author: '心灵伙伴',
	              date: '2016-8-16',
	              laiyuan: '丁香园',
             }
           }
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
      // $.ajax({
      //       url: global.domain+'/user/get_my_favorite',
      //       type:'POST', 
      //       dataType: 'json',
      //       cache: true,
      //       data:{
      //         token:global.token,
      //         type:3
      //       },
      //       success: data => {
      //         this.article_info = data.data;
      //         // 判断是否收藏
      //         // 已收藏的ID数组
      //         let arr=[];
      //         for(let it of this.article_info){
      //           arr.push(it.art_id)
      //         }
      //         console.log(arr)
      //         let test=arr.indexOf(this.art_id_fav);
      //         console.log(this.art_id_fav)
      //         console.log(test)
      //         if(test!=-1){
      //           this.collected=true
      //         }
      //       },
      //       error: err => err.toString(),
      // });
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
