<template>
	<div>
	  <nav-header :title="item.title" left="back" right=''></nav-header>
	  <div>
	  	<select-list :data="item.questions" :selarr.sync="selarr" :sel-index="selIndex" :can-chose="false"></select-list>
	  </div>
	  <div class="bottom-body">
	  	<div class="score-text">综合评分：</div><span class="score-res">{{user_item.score}}</span>
	  </div>
	  <div class="bom-div"></div>
	</div>
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
        user_access:[],
        user_item:{},
        selIndex:[]
  		}
  	},
		created(){
	  	this.user_access=global.user_access
	  	for(let i = 0;i<this.user_access.length;i++){
	  		if(this.user_access[i].test_id==this.$route.params.id){
	  			this.user_item=this.user_access[i]
	  			this.selIndex=this.user_item.answers
				  this.selIndex  = this.selIndex.replace('[','').replace(']','')
				  this.selIndex = this.selIndex.split(',')	
	  		} 
	  	}
		  
      // 评测
      $.ajax({
          url: global.domain +'/access/get_access_info',
          type:'POST', 
          dataType: 'json',
          cache: true,
          data:{
            test_id: this.$route.params.id,
          },
          success: data => {
          	this.item = data.data
          	for(let i = 0;i<this.item.questions.length;i++){
          		this.item.questions[i].selIndex=this.selIndex[i]
          	}
          },
          error: err => err.toString()
        });
      
    },
    ready(){
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
	/*line-height: 2.0rem;*/
	width: 60%;
	margin: 0 auto 1.5rem;

}

.bottom-body{
	height: 3.0rem;
	width: 100%;
	background-color: #fff;
	padding-left:1.8rem;
}
.score-text{
	float: left;
	font-family: .PingFang-SC-Medium;
	font-size: 0.7rem;
	color: #999999;
	/*line-height: 3.0rem;*/
	margin-top: 1.0rem
}
.score-res{
	float: left;
	margin-left: 0.6rem;
	font-family: SFUIText-Bold;
	font-size: 1.4rem;
	color: #E25F52;
	line-height: 3.0rem;
}
</style>
