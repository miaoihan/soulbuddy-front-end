<template>
<!-- 自测选择列表 -->
  <div class="sel-list">
    <select-item v-for="item in data" :data="item" :selarr.sync="selarr" :index="$index"></select-item>
  </div>
</template>

<script>
import SelectItem from '../areaComp/SelectItem'
  export default{
  	components: {
  		SelectItem
	  },
  	data() {
  		return{
  			checked_list: [],
        test:1
  		}
  	},
    created(){
      this.selarr = new Array(this.data.length)
    },
  	methods:{
  		select(index,str){
  			let code = index + str
  			// 循环 a-d 判重
  			for (var i = 97; i < 101; i++) {
  				//如果找到已选
  				if(contains(index+String.fromCharCode(i),checked_list)){
  					this.checked_list.$remove()
  				}
  			}
  			this.checked_list.push(code)
  		},
  		// 判断对象是否在当前数组
  		contains(obj, arr) {  
  			console.log(obj)
		    var i = arr.length;  
		    while (i--) {  
		      if (arr[i] === obj) {  
		        return true;  
		      }  
		    }  
		    return false;  
			}
  	},
    
	  props:{
	  	data: {
	  		type: Array,
		  	default(){
		  		return[
		  		
		  		]
		  	}
	  	},
      selIndex:{type:Array,default:[]},
      // 选择题数组
      selarr: {type: Array, default: null},
	  },
	  
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'

.sel-list{

}

</style>
