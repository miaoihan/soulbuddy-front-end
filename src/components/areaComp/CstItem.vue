<template>
  	<div class="zxs-item part">
		  	  <i class="col-img" @click="like(data.u_id)" v-if="(data.is_fav==0 && $route.path!='/me/favorite') || !is_like">
						<img src="../../assets/imgs/like.png" alt="">
		  	  </i>
			  <i class="col-img" @click="cancelike(data.u_id)" v-if="data.is_fav==1 || is_like || $route.path=='/me/favorite'">
					<img src="../../assets/imgs/liked.png" alt="">
			  </i>
			  <a v-link="{name:'user', params:{ id: data.u_id }}">
			  	<div class="z-avator">
			  		<img :src="data.real_logo" alt="">
			  		
			  	</div>
			  	<div class="z-desc container-16">
			  		<div class="desc-l1">
			  			<span class="d-l1-name">{{data.user_name}}</span>
			  			<span><i></i></span>
			  			<span class="pull-right" style="font-size:0.6rem;color: #999">
			  				<strong style="color: #2b8ff7;font-size:0.65rem">
			  				{{ data.fav_count }}</strong>
			  				人收藏了这位咨询师
			  		</div>
			  		<div class="desc-l2">
			  			<span style="font-size:0.6rem;color: #999">
			  				{{data.intro}}
			  			</span>
			  		</div>
			  		<div class="desc-l3">
			  			<span class="label-grey" style="margin-right: 0.5rem" 
			  						v-for="skill in data.skill | str2arr">
			  				{{ skill }}
			  			</span>
			  		</div>
			  	</div>
			  </a>
		  </div><!-- end zxs-item -->
</template>

<script>
  export default{
  	components: {

	  },
	  data () {
	    return {
	      is_like:null
	    };
	  },
	  methods:{
	  	like(u_id){
	  		console.log("u_id is "+u_id)
	  		this.is_like = true
	  		this.data.fav_count++
	  		$.ajax({
		            url: global.domain +"/user/add_favorite",
		            type:'post', 
		            dataType: 'json',
		            data: {
		              token:global.token,
		              fav_type:1,
		              fav_id:u_id,
		            },
		            success: function(data) {
		            	console.log('已收藏')
		            },
		            error: function(xhr, status, err) {
		              console.err(err.toString())
		            }
	        });
	  	},
	  	cancelike(u_id){
	  		console.log("u_id is "+u_id)
	  		this.is_like = false
	  		this.data.fav_count--
	  		$.ajax({
		            url: global.domain +"/user/cancel_favorite",
		            type:'post', 
		            dataType: 'json',
		            data: {
		              token:global.token,
		              fav_type:1,
		              fav_id:u_id,
		            },
		            success: function(data) {
		            	console.log('已收藏')
		            },
		            error: function(xhr, status, err) {
		              console.err(err.toString())
		            }
	        });
	  	}
	  },
	  props:{
	  	data: {
	  		type: Object,
		  	default(){
		  	
		  	}
	  	}
	  },
	  
  }
</script>

<style scoped lang="stylus">

	.zxs-item
		position relative
	.z-avator
		height 10.0rem
		position relative
	.col-img
		position absolute
		z-index 10
		top 8.0rem
		right 1.0rem
		width 22px
		font-size 1.0rem
		// border: 1px solid #FFFFFF;
		// box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.30);
	.d-l1-name
		font-size:0.7rem
		font-weight: 700
		color #444
	.desc-l3
		margin-top: 0.7rem

	a
		width 100%

</style>
