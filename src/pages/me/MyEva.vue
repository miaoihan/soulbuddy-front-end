<template>
  <div>
  	<nav-header title="我的评测" left="back"></nav-header>
    <div class="m-evalist">
    	<div class="yyzp body-eva wrapper" v-for="eva of evaList" @click="go(eva.is_tested,eva.test_id)">
    		<img class="img-eva" :src="eva.img_file" alt="" >
    		<i class="iconfont people">&#xe62b;</i>
    		<span class="num-peo">{{eva.test_count}}</span>
  			<span class="function">{{eva.title}}</span>
  			<div class="startBtn" v-if="!eva.is_tested">
  				<a v-link="{name:'eva', params:{id: eva.test_id} }" style="color:#fff">开始</a>	
  			</div>
  			<span class="status" v-if="eva.is_tested">
  				您已完成测评
  			</span>
    	</div>
    </div>
    <div class="seemore" @click="seeMore('eva')" v-if="evaList.length>9">
        查看更多
    </div>
    <div class="seemore" v-if="evaList.length==0">
          暂无内容~
    </div>
    <div class="bom-div"></div>
  </div>
</template>

<script>
  export default{
  	components: {
  		NavHeader:require('components/funComp/NavHeader.vue'),
	  },
	  data(){
	  	return{
	  		evaList: [],
        eva_page:1
	  	}
	  },
	  ready(){
	  	// 测评列表
      $.ajax({
          url: global.domain +'/user/get_my_access',
          type:'POST', 
          dataType: 'json',
          data:{
            token: global.token
          },
          success: data => this.evaList = data.data,
          error: err => console.error(err.toString())
        });
	  },
    methods:{
      go(flag,id){
        if (flag) {
          this.$router.go({name:'evaResult',params:{id: id}})
        }
      },
      seeMore(type){
        // console.log(type)
          $.post(global.domain +'/user/get_my_access',
            { token: global.token, page: ++this.eva_page, }, v => 
            this.evaList = this.evaList.concat(v.data), 'json');
      },
    }
	  
  }
</script>

<style scoped lang="stylus">
 .m-evalist
   margin-top 10px

</style>

