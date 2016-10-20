<template>
  <div class="wrapper">
  	<!-- eva-card -->
  	<div class="yyzp body-eva wrapper" v-for="eva of data">
  		<img class="img-eva" :src="eva.img_file" alt="" 
  				 @click="go(eva.is_tested,eva.test_id)">
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
  	
  </div>
</template>

<script>

  export default{
    components: {
    },
    props:{
    	data:[]
    },
    methods:{
    	go(flag,id){
    		if (flag) {
    			this.$router.go({name:'evaResult',params:{id: id}})
    		}
    	}
    }

  }
</script>

<style>

.body-eva{
	height:8.0rem;
	width: 100%;
	background-color:#e6e6e6;
	margin-bottom:0.5rem;
	text-align:center;
}
.yyzp{
	position: relative;
}
.jlzp{
	position: relative;
}
.people{
	color: #FFFFFF;
	position: absolute;
	right:44px;
	z-index: 10;
	top:0.5rem;
	font-size: 0.7rem;
}
.num-peo{
	position: absolute;
	z-index: 10;
	font-size: 12px;
	color: #FFFFFF;
	right:1rem;
	top:0.45rem;
}
.function{
	display: block;
	position: relative;
	z-index: 10;
	font-size: 0.75rem;
	margin-top: 3.0rem;
	color: #ffffff;
}
.startBtn{
	position: relative;
	/*display: block;*/
	z-index: 10;
	height: 1.4rem;
	width: 3.2rem;
	margin:0 auto;
	margin-top: 1.0rem;
	border: 1px solid #FFFFFF;
	border-radius: 25px;
	font-size: 13px;
	color: #FFFFFF;
	line-height: 1.4rem;
}
.status{
	display: inline-block;
	opacity: 0.5;
	font-size: 13px;
	color: #FFFFFF;
	position: relative;
	z-index: 10;
	margin-top: 1.2rem;
}
.img-eva{
	position: absolute;
	z-index: 1;
	height: 100%;
	width: 100%;
	left: 0;
	opacity:0.5;
	filter:alpha(opacity=40); /* 针对 IE8 以及更早的版本 */
}	

</style>
