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
    methods:{
      next(){
        // alert(123)
        // this.$router.go('/bind')
        let phone = $('[name="mobile"]').val()
        if(phone ===''){
          alert('手机号码不能为空！')
          return false
        }
        if(phone != global.user.mobile){
          alert('原手机号码错误！')
          return false
        }
        // 多此一举
        // if(!this.isMobile(phone)){
        //   alert('请输入正确的手机号！');
        //   return false
        // }
        else{
          this.$router.go('/newbind')
        }
      },
      // isMobile( s ){   
      //   let regu =/^[1][345678][0-9]{9}$/; 
      //   let re = new RegExp(regu); 
      //   if (re.test(s)) return true; 
      //   else return false; 
      // } 
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
