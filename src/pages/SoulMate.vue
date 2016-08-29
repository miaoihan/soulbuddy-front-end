<template>
  <nav-header></nav-header>
  <div class="quecard">
    <span class="card-name">询问我的问题</span>
    <div class="swiper-container">
		<div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="result in results">
			    <div style="width:100%;">
			    	<div class="person-img quer-top">
			    		<img :src="result.imgurl" class="img-body">
			    	</div>
			    	<div class="quername quer-top">
			    		{{result.cname}}
			    	</div>
			    	<div class="paymoney quer-top">
			    		已支付￥{{result.cpay}}
			    	</div>
			    </div>
		    	<div class="que-text">
		    		{{result.question}}
		    	</div>
		    </div>
		</div>
    </div>
  </div>
</template>

<script>
import swiper from '../assets/swiper/swiper.min.js'
import NavHeader from '../components/funComp/NavHeader'
export default {
	components:{
		NavHeader
	},
	props:{
		results: {
			type: Array,
			default() {
		       return [
		       		{cname: '1',
		       		 cpay: '25',
		       		 question:'你可以在网上找到类似上述的其他JS脚本，它们不管多么优秀，其原理都是一样的，通过对keydown、keyup或keypress之类的键盘键位操作事件来监控文本区的输入，无法防止鼠标右键的粘贴，为此，如果一定要真正地限制textarea的字数，我们还得为网页加另一把锁——禁用鼠标右键，这无疑得付出额外的开销，同时也可能是网页制作者不一定愿意做的。其实，还有一个更简单的方法，使用onpropertychange属性。'},
		       		 {cname: '2',
		       		  cpay: '25',
		       		  question:'你可以在网上找到类似上述的其他JS脚本，它们不管多么优秀，其原理都是一样的，通过对keydown、keyup或keypress之类的键盘键位操作事件来监控文本区的输入，无法防止鼠标右键的粘贴，为此，如果一定要真正地限制textarea的字数，我们还得为网页加另一把锁——禁用鼠标右键，这无疑得付出额外的开销，同时也可能是网页制作者不一定愿意做的。其实，还有一个更简单的方法，使用onpropertychange属性。'},
		       		 {cname: '3',
		       		  cpay: '25',
		       		  question:'你可以在网上找到类似上述的其他JS脚本，它们不管多么优秀，其原理都是一样的，通过对keydown、keyup或keypress之类的键盘键位操作事件来监控文本区的输入，无法防止鼠标右键的粘贴，为此，如果一定要真正地限制textarea的字数，我们还得为网页加另一把锁——禁用鼠标右键，这无疑得付出额外的开销，同时也可能是网页制作者不一定愿意做的。其实，还有一个更简单的方法，使用onpropertychange属性。'},
		       ]
		    }
		},
	},
  data () {
    return {
      
    }
  },
   ready:function(){
   	console.log(123);
   	var mySwiper = new Swiper ('.swiper-container', {
		    freeMode : true,
		    loop: true,
		    slidesPerView:1.42,
	        paginationClickable: true,
	        spaceBetween: 15
	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/swiper/swiper.min.css';
.quecard{
	/*margin-top: 1.55rem;*/
	overflow: hidden;
	height: 9.25rem;
	width: 100%;
	background-color: #29abe2;
}
.card-name{
	display: block;
	margin-top: 1.15rem;
	margin-left: 1.15rem;
	color: #fff;
	font-size: 0.8rem
}
.swiper-container{
	margin-top: 0.75rem;
	height: 5.0rem;
}
.swiper-wrapper{
}
.swiper-slide{
	overflow: hidden;
    height: 5rem;
    background-color: #3eb3e4;
    border-radius: 0.25rem;
}
.quer-top{
	margin-top: 0.6rem;
	color: #fff;
	height: 1.5rem;
	line-height: 1.5rem;
}
.person-img{
	overflow: hidden;
	width: 1.5rem;
	border-radius: 1.5rem;
	background-color: #fff;
	float: left;
	margin-left:0.55rem;
}
.quername{
	float: left;
	margin-left: 0.4rem;
}
.paymoney{
	float: right;
	margin-right: 0.5rem;
}
.que-text{
	float: left;
	overflow: hidden;
	width: 90%;
	margin-top: 0.55rem;
	margin-left: 5%;
	font-size: 0.65rem;
	color: #b1e0f4;
	display: -webkit-box;
	/*text-overflow: ellipsis;*/
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

</style>
