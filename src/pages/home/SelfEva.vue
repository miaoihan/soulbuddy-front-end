<template>
	<nav-header title="国际通用抑郁自评表（SDS）"></nav-header>
		<div class="sel-dec">
			请根据过去的<strong>一周</strong>的情况选择。答案没有对错，<strong>真实</strong>反映自己的感受就好。 （共{{ data.number}}题）
		</div>
  <div>
  	<select-list :data="data.projects"></select-list>
  </div>
  <footer>
  	<a href="#" class="button button-round btn-default f-btn">提交</a>
  </footer>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader'
import SelectList from 'components/areaComp/SelectList.vue'

  export default{
  	components: {
  		NavHeader,SelectList
	  },
	  props:{
	  	data: {
	  		type: Object,
		  	default(){
		  		return{
		  			projects:[
			  			{
			  				title:'我觉得闷闷不乐，情绪低落',
			  				item1:'没有或很少时间',
			  				item2:'很少时间',
			  				item3:'相当多的时间',
			  				item4:'大部分时间',

			  			},
			  			{
			  				title:'我觉得闷闷不乐，情绪低落',
			  				item1:'没有或很少时间',
			  				item2:'很少时间',
			  				item3:'相当多的时间',
			  				item4:'大部分时间',
			  			},
			  			{
			  				title:'我觉得闷闷不乐，情绪低落',
			  				item1:'没有或很少时间',
			  				item2:'很少时间',
			  				item3:'相当多的时间',
			  				item4:'大部分时间',
			  			},
			  		],
			  		number:3,
			  		type:'SDS'
		  		}
		  	}
	  	}
	  },

  }
</script>

<style scoped>

.sel-dec{
	padding: 0.75rem 0.8rem;
	margin: 1.05rem 0.8rem 1.5rem;
	background-color: #e7e7e7;
	font-size: 13px;
}


.f-btn{
	height: 2.0rem;
	line-height: 2.0rem;
	width: 60%;
	margin: 0 auto 1.5rem;

}


</style>
