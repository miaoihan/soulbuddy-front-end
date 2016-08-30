<template>
  <div class="que-content">
    <question-card :data="data" :is-content=true></question-card>
  </div>
</template>

<script>
import QuestionCard from 'components/areaComp/QuestionCard'
export default {
  data () {
    return {

    }
  },
  components:{
  	QuestionCard
  },
  props:{
  	data:{
  		type:Object,
  		default(){
  			return{qname: '王小喵33',
  				   queimg:require('../assets/logo.png'),
		       	   pay: '25',
		       	   quetitle:'你可以在网上找到类似上述的其他脚本，它们不管多么优秀，其原理都是一样的，通过对keydown',
		       	   quecontent:'是一个比较特殊的样式，我们可以用它代替我们通常所用的标题截取函数有300px的宽度。如果用标题截取函数，则标题不是完整的',
		       	   type:'private',
		       	   answernum:2,
		       	   date:'08-14'}
  		}
  	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.que-content{
	background-color: #fff;
	padding:1rem 1rem 0rem 1rem;
}
</style>
