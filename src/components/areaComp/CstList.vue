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
	  		is_like: null,
	  	}
	  },
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  		return[
		  			{
		  				
		  			},
		  		]
		  	}
	  	}
	  },
	  created(){

	  	// 咨询师id
	  	let zidArr = [];
	  	for(let it of this.data){
	  		// console.log(it.u_id)
	  		zidArr.push(it.u_id)
	  	}
	  	// let inArr = zidArr.indexOf(zid_fav)
	  },
	  ready(){

	  },
	  methods:{
	  	getUserList(){
	  		$.ajax({
	          url: global.domain +'/user/get_user_list',
	          type:'POST', 
	          dataType: 'json',
	          cache: true,
	          data:{
	          	token: localStorage.token,
	          	page: 1,
	          	identity: 1
	          },
	          success: function(data) {
	          		this.data = data.data;	          		
	          }.bind(this),
	          error: function(xhr, status, err) {
	          }.bind(this)
	        })
	  	},
	  	
	  }
	  
  }
</script>

<style scoped lang="stylus">

	.cst-item
		margin-bottom: 1.0rem
	
</style>
