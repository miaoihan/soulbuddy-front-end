<template>
  <header class="nav-header wrapper" 
  				id="navHeader" :class="{fixed: fixed}">
  	<div class="wrapper search-body">
  		<i class="iconfont sear-img" @click="search">&#xe600;</i>
  		<div class="input-body-head">
	  		<form action="">
	  				<input class="input-ser" type="serch" v-model="search_title" @keyup="search">
				</form>
  		</div>  		
  	</div>
	<a class="back" onclick="window.history.go(-1)">取消</a>
	<!-- <a class="back" v-if="search_title!=''" @click="SearchBtn">确定</a> -->
  </header>
  <serch-list :data="search_list" style="background-color:#fff"></serch-list>
  <div class="noResult" v-if="!result">没有你搜索的结果</div>
  <div class="bom-div"></div>
  <!-- <p>{{search_title}}</p> -->
</template>

<script>
import SerchList from 'pages/home/SerchList.vue'
  export default{
		props:{
			
		},
		methods:{

		},

    components: {
    	SerchList
    },
    data(){
    	return{
    		search_list:[],
    		search_title:null,
    		result:true,
    		// btn_name:"取消"
    	}  	
    },
    ready(){

    },
    methods:{
    	search(){
    		$.ajax({
	          url: global.domain +'/search/get_search_list',
	          type:'POST', 
	          dataType: 'json',
	          data:{
	            title: this.search_title,
	            token: global.token
	          },
	          success: data => {
	          	this.search_list = data.data
	          	if (!this.search_title) {this.result=true;return}
	          	console.log(this.search_list)
	          	 	if(this.search_list.length==0){
		        			this.result=false
				        }else{
				        	this.result=true
				        }
	          },
	          error: err => err.toString(),
	          
	        });
	        console.log('title is:'+this.search_title)
	        

    	}
    }

  }

</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'
.nav-header
	padding-left 0.75rem
	padding-right 0.75rem
	height 2.2rem
	// line-height 2.2rem
	background-color: $ztc
	width 100%
	color #fff
.search-body
	// position relative
	float left
	margin-top 0.4rem
	height 1.4rem
	width 80.5%
	// margin-left 0.25rem
	background-color #fff
	border-radius 3px
.sear-img
	opacity 0.8
	float left
	margin-left 0.6rem
	margin-top 3px
	font-size 0.8rem
	color black
.input-body-head{
	
	margin-left 1.8rem
	mix-width:100%;
	height 100%
	// line-height 1.8rem
}
.input-ser
	opacity 0.8
	border 0
	border-radius 0.25rem
	width 100%
	height 100%
	background-color #fff
	font-size 0.7rem
	color black
.back
	float right
	width 1.6rem
	color #fff
	font-size 0.8rem
	margin-top 0.5rem
.noResult
	margin-top 1.5rem
	width 100%
	text-align center
</style>
