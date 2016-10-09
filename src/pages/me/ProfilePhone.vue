<template>
  <div class="wrapper">
  	<input-box class="phonenum" placewhere="left" text-color="black" placeholder="请完整输入原手机号码"></input-box>
  </div>
</template>

<script>
import InputBox from 'components/areaComp/InputBox'
  export default{
    components: {
    	InputBox
    },
    data(){
      return{
       
      }
    },
    created(){
      
 
    },
    ready(){

      

    }
  }
</script>

<style scoped lang="stylus">
input::-webkit-input-placeholder {text-align:left}
.phonenum{
	padding-right:1.0rem;
	padding-left:1.0rem;
	margin-top:1.0rem
}
</style>
