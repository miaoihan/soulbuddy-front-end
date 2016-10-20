<template>
  <div>
  	<nav-header title="我的评测" left="back"></nav-header>
  	<div class="yyzp body-eva wrapper" v-for="eva of evaList">
  		<img class="img-eva" :src="eva.img_file" alt="" @click="go(eva.is_tested,eva.test_id)">
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
</template>

<script>
  export default{
  	components: {
  		NavHeader:require('components/funComp/NavHeader.vue'),
	  },
	  data(){
	  	return{
	  		evaList: []
	  	}
	  },
	  ready(){
	  	// 测评列表
      $.ajax({
          url: global.domain +'/access/get_access_list',
          type:'POST', 
          dataType: 'json',
          data:{
            token: global.token
          },
          success: data => this.evaList = data.data,
          error: err => console.error(err.toString())
        });
	  }
	  
  }
</script>

<style scoped lang="stylus">


</style>

