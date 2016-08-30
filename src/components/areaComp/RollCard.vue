<template>
  <div class="swiper-container part">
		<div class="swiper-wrapper ">
		    <div class="swiper-slide">
		    	<img class="card-img" src="" alt="">
		    </div>
		</div>
		<div class="swiper-pagination" style="margin-bottom:7px"></div>
    </div>
</template>

<script>
import swiper from '../../assets/swiper/swiper.min.js'
export default {
  data () {
    return {
      
    }
  },
  ready:function(){
   	console.log(123);
   	var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay: 3000,
		    pagination: '.swiper-pagination',
	})
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/swiper/swiper.min.css';
.fullscr{
	height: 8.0rem;
	width: 100%;
}
.swiper-container{	
	padding-bottom: 0;
}
.swiper-wrapper{
	
}
.swiper-slide{
	
}
.card-img{

}
</style>
