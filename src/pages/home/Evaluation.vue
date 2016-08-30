<template>
<nav-header title="心理测评"></nav-header>
<!-- 心理測評 -->
  <div class="eva" v-for="eva in data">
  	<div class="eva-item">
	  	<div class="e-l">
	  		<p class="name">
	  			{{eva.name}}
	  		</p>
	  		<p :class=" eva.status==1 ? 'iseva' : 'uneva' "
	  				style="font-size: 12px;">
	  			{{eva.status==1 ? '已测评' : '未测评'}}
	  		</p>
  		</div>
  		<div class="e-r">
  			<span> {{eva.status==1 ? '重新评测' : '开始评测'}}</span>
  			<i class="iconfont">&#58893;</i>
  		</div>
  	</div><!-- end eva-item -->
  </div> <!-- end eva list -->
</template>

<script>
import NavHeader from '../components/funComp/NavHeader'
  export default{
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  		return[
		  			{
		  				name:'国际通用抑郁自评表（SDA）',
		  				status:1
		  			},
		  			{
		  				name:'国际通用焦虑自评表（SAS）',
		  				status:0
		  			},
		  			{
		  				name:'国际通用焦虑自评表（SAS）',
		  				status:0
		  			},
		  			{
		  				name:'国际通用焦虑自评表（SAS）',
		  				status:1
		  			},
		  			{
		  				name:'国际通用焦虑自评表（SAS）',
		  				status:0
		  			},
		  		]
		  	}
	  	}
	  },
	  components: {
			NavHeader
	  },
  }
</script>

<style scoped lang="stylus">
@import '../assets/stylus.styl'

.eva{
	margin-top: 0.5rem;
}

.eva-item{
	height: 3.25rem;
	margin-bottom: 10px;
	padding: 0.65rem 0.65rem;
	background: #fff; 
}

.name{

}

.status{
	font-size: 12px;
	margin-top: 0.15rem;
}

.iseva{
	color: #b4b4b4;
}

.uneva{
	color: $ztc
}

.e-l{
	float: left
}

.e-r{
	float: right
	margin-top 0.45rem
}

.e-r span{
	color $ztc
}

</style>
