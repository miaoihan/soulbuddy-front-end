<template>
  <div class="wrapper select-body">
	<div class="sel-title float-left">{{title}}</div>
	<i class="sel-img iconfont" :style="{color:IconColor}">&#xe60d;</i>
  	<select class="select-text"name="dad" id="">
  	  <option value ="placeholder" style="color:#bbb">请选择</option>
      <option value ="value"  v-for="value in values">{{value}}</option>
    </select>
  </div>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader'
import FuncNav from 'components/areaComp/FuncNav.vue'
import QuestionList from 'components/areaComp/QuestionList.vue'
import Reading from 'pages/home/Reading.vue'
import Choice from 'pages/home/Choice.vue'
import Evaluation from 'pages/home/Evaluation.vue'
  export default{
    components: {
    	NavHeader,FuncNav,QuestionList,Reading,Choice,Evaluation
    },
    props:{
    	values:{type:Array,default:["fdsf","2","3","dd"]},
    	title:{type:String,default:"姓名"},
    },
    data(){
      return{
        index: 1,
        swiperList: [],
        queList: [],
        readList: [],
        evaList: [],
        // datas:[12,13,14,15] 
      }
    },
    created(){
      
      
    },
    ready(){

    }
  }
</script>

<style >
.select-body{
	width: 100%;
	height: 2.5rem;
	line-height: 2.5rem;
	background: #fff;
}
.sel-title{
	float: left;
	color: black;
	font-size: 0.75rem
}
.sel-img{
	float: right;
	color: #bbb;
	line-height:2.8rem;
}
.select-text{
	/*display: block;*/
	/*vertical-align:middle;*/
	margin-top:0.68rem;
	float: right;
	margin-right: 0.5rem;
	border:0;
	appearance:none;
	background: #fff;
	/*font-size: 0.75rem;*/
	/*line-height: 2.5rem*/
}
</style>
