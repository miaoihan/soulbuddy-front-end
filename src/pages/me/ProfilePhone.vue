<template>
<nav-header title="原手机号码" left="back" :method="next"></nav-header>
  <div class="wrapper">
  	<input-box class="phonenum" placewhere="left" text-color="black" placeholder="请完整输入原手机号码" name="mobile"></input-box>
  </div>
</template>

<script>
import InputBox from 'components/areaComp/InputBox'
import NavHeader from 'components/funComp/NavHeader';
  export default{
    components: {
    	InputBox,NavHeader
    },
    data(){
      return{
       user:{},
       mobile:''
      }
    },
    created(){

    },
    ready(){
      this.user=global.user
      this.mobile = user.mobile
    },
    methods:{
      next(){
        // alert(123)
        // this.$router.go('/bind')
        if($('[name="mobile"]').val()===''){
          alert('请先填写原手机号码')
          return false
        }
        if($('[name="mobile"]').val()!=this.mobile){
          alert('原手机号码错误')
          return false
        }
        else{
          this.$router.go('/bind')
        }
      }
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
