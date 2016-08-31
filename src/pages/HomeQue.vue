<template>
  <nav-header title="心灵伙伴" :fixed="true"></nav-header>
  <div class="quecard wrapper">

    <span class="card-name">询问我的问题</span>
    <div class="swiper-container">
		<div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="data in topdata">
		    	<a href="3">
				    <div style="width:100%;">
				    	<div class="person-img quer-top">
				    		<img :src="data.imgurl" class="img-body">
				    	</div>
				    	<div class="quername quer-top">
				    		{{data.cname}}
				    	</div>
				    	<div class="paymoney quer-top">
				    		已支付￥{{data.cpay}}
				    	</div>
				    </div>
			    	<div class="que-text">
			    		<p>{{data.question}}</p>
			    	</div>
		    	</a>
		    </div>
		</div>
    </div>
  </div>
  <div class="que-item" v-for="listdata in listdatas">
  	<question-card :data="listdata"></question-card>
  </div> 
  <!-- <answer-card></answer-card> -->
</template>

<script>
import swiper from 'assets/swiper/swiper.min.js'
import NavHeader from 'components/funComp/NavHeader'
import QuestionCard from 'components/areaComp/QuestionCard'
export default {
	components:{
		NavHeader,QuestionCard
	},
	props:{
		topdata: {
			type: Array,
			default() {
		       return [
		       		{cname: '1',
		       		 imgurl:'',
		       		 cpay: '25',
		       		 question:'你可以在网上找到类似上述的其他JS脚本，它们不管多么优秀，其原理都是一'},
		       		 {cname: '2',
		       		  imgurl:require('../assets/logo.png'),
		       		  cpay: '25',
		       		  question:'要真，这无疑得付出额外的开销，同时也可能是网页制作者不一定愿意做的。其实，还有一个更简单的方法，使用onpropertychange属性。'},
		       		 {cname: '3',
		       		  imgurl:'',
		       		  cpay: '25',
		       		  question:'你可标右键，这无疑得付出额外的开销，同时也可能是网页制作者不一定愿意做的。其实，还有一个更简单的方法，使用onpropertychange属性。'},
		       ]
		    }
		},
		listdatas:{
			type:Array,
			default(){
				return[
					{qname: '王小喵1',
					 queimg:require('../assets/logo.png'),
		       	     pay: '25',
		       	     quetitle:'你可以在网上找到类似上述的其他脚本，它们不管多么优秀，其原理都是一样的，通过对keydown',
		       	     quecontent:'是一个比较特殊的样式，我们可以用它代替我们通常所用的标题截取函数，而且这样做对搜索引擎更加友好，如：标题文件有50 个汉字，而我们的列表可能只有300px的宽度。如果用标题截取函数，则标题不是完整的',
		       	     type:'piblic',
		       	     answernum:2,
		       	     date:'08-14'},
		       	    {qname: '王小喵2',
		       	     pay: '25',
		       	     quetitle:'你可以在网上找到类似上述的其他脚本，它们不管多么优秀，其原理都是一样的，通过对keydown',
		       	     quecontent:'是一个比较特殊的样式，我们可以用它代替我们通常所用的标题截取函数，而且这样做对搜索引擎更加友好，如：标题文件有50 个汉字，而我们的列表可能只有300px的宽度。如果用标题截取函数，则标题不是完整的',
		       	     type:'piblic',
		       	     answernum:2,
		       	     date:'08-14'},
		       	    {qname: '王小喵3',
		       	     pay: '25',
		       	     quetitle:'你可以在网上找到类似上述的其他脚本，它们不管多么优秀，其原理都是一样的，通过对keydown',
		       	     quecontent:'是一个比较特殊的样式，我们可以用它代替我们通常所用的标题截取函数，而且这样做对搜索引擎更加友好，如：标题文件有50 个汉字，而我们的列表可能只有300px的宽度。如果用标题截取函数，则标题不是完整的',
		       	     type:'piblic',
		       	     answernum:2,
		       	     date:'08-14'},
				]
			}
		}
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
	/*margin-top: -6rem;*/
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
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.que-item{
	background-color: #fff;
	padding:1rem 1rem 0rem 1rem;
	overflow: hidden;
	margin-bottom: 0.5rem;
}
</style>
