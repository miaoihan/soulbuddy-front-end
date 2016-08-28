<template>
  <div>
    <button class="btn-body">{{btnname}}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props:{
  	btnname:{type:String,default:"编辑个人资料"}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-body{
	height: 1.0rem;
	width: 4.35rem;
	border-radius: 1rem;
	display: block;
	font-size: 0.55rem
}
</style>
