<template>
  <nav class="bar bar-tab fixed">
    <a href="#" class="tab-item external" :class="{ active: index === 0 }" @click="changClass(0)">
      <i class="iconfont icon-htmal5icon06"></i>
      <span class="tab-label">首页</span>
    </a>
    <a href="#" class="tab-item external " :class="{ active: index === 1 }" @click="changClass(1)">
      <i class="iconfont icon-zixun-copy"></i>
      <span class="tab-label">咨询</span>
    </a>
    <a href="#" class="tab-item external " :class="{ active: index === 2 }" @click="changClass(2)">
      <i class="iconfont icon-iconfontwode" style="margin-top:3px"></i>
      <span class="tab-label" style="margin-top:-10px">我的</span>
    </a>
  </nav>
  
</template>
<script>
export default {

  data() {
      return {
        index: 0
      }
    },
    components: {},
    methods: {
      changClass(id) {
        this.index = id;
      }
    },
    ready() {
      // console.log(index);
    },
    created() {
      var index = 0;
    }
}
</script>
<style scoped>
  .tab-label{
    font-size: 12px;
    margin-top: -8px;
    display: block;
  }
  
  div i{
    display: block;
    font-size: 24px;
  }

  .active {
    color: blue;
  }

</style>
