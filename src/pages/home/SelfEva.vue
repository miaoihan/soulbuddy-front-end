<template>
	<nav-header :title="item.title" left="back" right=''></nav-header>
		<div class="sel-dec">
			{{item.intro}}
		</div>
  <div>
  	<select-list :data="item.questions" :selarr.sync="selarr"></select-list>
  </div>
  <footer>
  	<button class="button button-round btn-default f-btn"
  					@click="subAndCheck">提交</button>
  </footer>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader'
import SelectList from 'components/areaComp/SelectList.vue'

  export default{
  	components: {
  		NavHeader,SelectList
	  },
	  data() {
  		return{
        item: {},
        selarr: [],
  		}
  	},
	  created(){
      // 评测
      $.ajax({
          url: global.domain +'/access/get_access_info',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
            test_id: this.$route.params.id,
          },
          success: data => this.item = data.data,
          error: err => err.toString()
        });
    },
    methods:{
    	subAndCheck(){
    		if (this.check()) {
    			// 提交测评结果
		      $.ajax({
		          url: global.domain +'/access/add_user_test',
		          type:'POST', 
		          dataType: 'json',
		          data:{
		            token: 		global.token,
		            test_id:　this.$route.params.id,
		            answers:  JSON.stringify(this.selarr)
		          },
		          success: data => {console.log(data);
		          	this.$router.go({name:'evaResult',params:{id: this.$route.params.id}})
		          },
		          error: err => err.toString()
		        });
    		}
    	},
    	check(){
    		return true
    	}
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

footer{
	margin-bottom: 4.0rem;
}


</style>
