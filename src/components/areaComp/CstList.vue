<template>
  <div class="zxs-list wrapper">
  	<div class="cst-item"  v-for="item in data" >
		 		<cst-item :data="item"></cst-item>
		 </div>
  </div><!-- end zxs-list -->
</template>

<script>
  export default{
  	components: {
  		CstItem: require('components/areaComp/CstItem')
	  },
	  data(){
	  	return{
	  		collected:false,
	  		user_list:[],
	  	}
	  },
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  	}
	  	}
	  },
	  ready(){
	  	//获取我的收藏 
	  	$.ajax({
            url: global.domain+'/user/get_my_favorite',
            type:'POST', 
            dataType: 'json',
            cache: true,
            data:{
              token:global.token,
              type:1
            },
            success: data => {
              this.my_favorite = data.data;
              // 判断收藏
              var arr=[];
              for(var i = 0;i < this.my_favorite.length;i++){
                arr.push(this.my_favorite[i].u_id)
              }
              var test=arr.indexOf(this.data.u_id);
              console.log(test)
              if(test!=-1){
                this.collected=true
              }
            },
            error: err => err.toString(),
      	});
	  },

  }
</script>

<style scoped lang="stylus">

	.cst-item
		margin-bottom: 1.0rem
	
</style>
