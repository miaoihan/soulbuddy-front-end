<template>
  <header class="nav-header wrapper" 
  				id="navHeader" :class="{fixed: fixed}">
  	<div class="wrapper search-body">
  		<i class="iconfont sear-img" @click="SearchBtn">&#xe600;</i>
  		<div class="input-body-head">
  			<input class="input-ser" type="text" v-model="search_title">
  		</div>  		
  	</div>
	<a class="back" onclick="window.history.go(-1)">取消</a>
  </header>
  <serch-list :data="search_list" style="background-color:#fff"></serch-list>
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
    		search_title:""
    	}  	
    },
    ready(){
    	console.log("this.search_title")
    },
    methods:{
    	SearchBtn(){
    		$.ajax({
	          url: 'http://xinling.songtaxihuan.com/search/get_search_list',
	          type:'POST', 
	          dataType: 'json',
	          cache: true,
	          data:{
	            title: this.search_title,
	            token: global.token
	          },
	          success: data => this.search_list = data.data,
	          error: err => err.toString(),
	          
	        });
	        console.log(this.search_title)
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
	background-color #2499ca
.sear-img
	opacity 0.8
	float left
	margin-left 0.6rem
	margin-top 0.1rem
	font-size 0.8rem
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
	background-color #2499ca
	font-size 0.7rem
.back
	float right
	width 1.6rem
	color #fff
	font-size 0.8rem
	margin-top 0.5rem
</style>
