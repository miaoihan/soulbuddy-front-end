<template>
  <div class="swiper-container part wrapper">
		<div class="swiper-wrapper fullscr">
		    <div class="swiper-slide fullscr" v-for="obj in data">
		    	<a v-if="obj.href===null">
			    	<img class="card-img fullscr" :src="obj.imgurl" alt="">
			    	<div class="cont-title" style="{color:textColor}">{{obj.contitle}}</div>
		    	</a>
		    	<a :href="obj.href" :v-if="obj.href!=null">
			    	<img class="card-img fullscr" :src="obj.imgurl" alt="">
			    	<div class="cont-title" style="{color:textColor}">{{obj.contitle}}</div>
		    	</a>
		    </div>
		</div>
		<div class="swiper-pagination"></div>
  </div>
</template>

<script>
import swiper from 'assets/swiper/swiper.min.js'
export default {
  props:{
  	data:{
  		type:Array,
  		default(){
  			return[
          {
            contitle:"",//图中标题
  					imgurl:'',//背景图
  					href:null
          },//是否连接
        ]
  		}
  	},
  	textColor:{type:String,default:"black"},//字体颜色
  },
  ready:function(){
   	console.log(123);
   	var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    // autoplay: 3000,
		    pagination: '.swiper-pagination',
	})
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/swiper/swiper.min.css';
.fullscr{
	height: 100%;
	width: 100%;
}
.swiper-container{
	position: relative;
	height: 8.0rem;
	padding-bottom: 0;
	text-align: center;
}
.swiper-wrapper{

}
.swiper-slide{

}
.card-img{

}
.cont-title{
	position: absolute;
	width: 100%;
	z-index: 10;
	font-size: 1rem;
	top: 3.45rem;
	font-weight: 700;
}
</style>
