<template>
  <nav class="bar bar-tab fixed" v-if="isshow">
    <a v-link="'/home'" class="tab-item external" :class="{ active: index === 0 }" @click="changClass(0)">
      <i class="iconfont icon-htmal5icon06"></i>
      <span class="tab-label">首页</span>
    </a>
    <a v-link="'/consultants'" class="tab-item external " 
       :class="{ active: index === 1 }" @click="changClass(1)"
       v-if="identityb === 0">
      <i class="iconfont icon-zixun-copy"></i>
      <span class="tab-label">咨询</span>
    </a>
    <a v-link="'/wenda'" class="tab-item external " 
       :class="{ active: index === 1 }" @click="changClass(1)"
       v-if="identityb === 1">
      <i class="iconfont">&#xe630;</i>
      <span class="tab-label">问答</span>
    </a>
    <a v-link="'/me'" class="tab-item external " :class="{ active: index === 2 }" @click="changClass(2)">
      <i class="iconfont icon-iconfontwode" style="margin-top:3px"></i>
      <span class="tab-label" style="margin-top:-10px">我的</span>
    </a>
  </nav>
  
</template>
<script>
export default {

  data() {
      return {
        index: 0,
        noshow_url:['/install'], //这里填不显bottom的url
        isshow: true,
      }
    },
    props:{
      identityb:{type:Number,default:0}, 
    },
    methods: {
      changClass(id) {
        this.index = id;
      },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      check(url){
        if(this.noshow_url.indexOf(url)==0) return true;
        else return false;
      }

    },
    ready() { 
      var that = this
      this.$router.beforeEach(function ({ to, next }) {
          if (to.path === '/me/install') {
            // 返回一个断定会 true 或者 false 的 Promise
            that.isshow = false;next();
          } else {
            next()
          }
        })
    },
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
