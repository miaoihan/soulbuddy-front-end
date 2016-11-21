<template>
  <div>
  	<nav-header title="联系我们" left="back"></nav-header>
  	<div class="conn-item" style="margin-top: 1.0rem">
	  	<change-btn btntext="官方邮箱" TextColor="#999" is-icon=false
	  							placeholder="2282442558@qq.com" style="padding: 0 20px"></change-btn>
	  	<change-btn btntext="微信公众账号" TextColor="#999" :is-icon="false"
	  							placeholder="xlhb2017" style="margin-top:1px;padding: 0 20px"></change-btn isIcon=false>
	  </div>
  </div>
</template>

<script>
  export default{
  	components: {
  		ChangeBtn: require('components/funComp/ChangeBtn'),
  		NavHeader: require('components/funComp/NavHeader')
	  },
	  
  }
</script>

<style scoped lang="stylus">


</style>
