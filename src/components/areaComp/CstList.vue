<template>
  <div class="zxs-list wrapper">
		  <div class="zxs-item part" v-for="item in data">
		  	  <i class="iconfont col-img" @click="subme(item.u_id)" v-if="item.is_fav==0">&#xe606;</i>
			  <i class="iconfont col-img" style="color:red;" v-if="item.is_fav==1">&#xe633;</i>
			  <a v-link="{name:'user', params:{ id: item.u_id }}">
			  	<div class="z-avator">
			  		<img :src="item.logo" alt="">
			  		
			  	</div>
			  	<div class="z-desc container-16">
			  		<div class="desc-l1">
			  			<span class="d-l1-name">{{item.user_name}}</span>
			  			<span><i></i></span>
			  			<span class="pull-right" style="font-size:0.6rem;color: #999">
			  				<strong style="color: #2b8ff7;font-size:0.65rem">
			  				{{ item.fav_count }}</strong>
			  				人收藏了这位咨询师
			  			</span>
			  		</div>
			  		<div class="desc-l2">
			  			<span style="font-size:0.6rem;color: #999">
			  				{{item.intro}}
			  			</span>
			  		</div>
			  		<div class="desc-l3">
			  			<span class="label-grey" style="margin-right: 0.5rem" 
			  						v-for="skill in item.skill | str2arr">
			  				{{ skill }}
			  			</span>
			  		</div>
			  	</div>
			  </a>
		  </div><!-- end zxs-item -->
  	</div><!-- end zxs-list -->
</template>

<script>
  export default{
  	components: {

	  },
	  data(){
	  	return{
	  		collected:false,
	  		user_list:[]
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
	  	subme(u_id){
	  		console.log("u_id is"+u_id)
	  		$.ajax({
		            url: global.domain +"/user/add_favorite",
		            type:'post', 
		            dataType: 'json',
		            cache: true,
		            data: {
		              token:localStorage.token,
		              fav_type:1,
		              fav_id:u_id,
		            },
		            success: function(data) {
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
				          },
				          error: function(xhr, status, err) {
				          }
				        })
		            },
		            error: function(xhr, status, err) {
		              console.err(err.toString())
		            }
	        });
	  	}
	  }
	  
  }
</script>

<style scoped lang="stylus">

	.zxs-item
		margin-bottom: 1.0rem
		position relative
	.z-avator
		height 10.0rem
		position relative
	.col-img
		position absolute
		z-index 10
		bottom 6.35rem
		right 1.0rem
		font-size 1.0rem
	.d-l1-name
		font-size:0.7rem
		font-weight: 700
		color #444
	.desc-l3
		margin-top: 0.7rem

	a
		width 100%
</style>
