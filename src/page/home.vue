


<template>
<div>
<div class="top">
<van-search
  v-model="value"
  placeholder="请输入搜索关键词"
   show-action
  bind:change="onChange"
  bind:search="onSearch"
>   <div slot="action" @click="onSearch">搜索</div>
</van-search>
</div>

<div class="main">
  <!-- //banner轮播 -->
  <div class="bannerImg">
      <bannerImg/>
  </div>
  


</div>
<div class="footer">
  <bottombar></bottombar>
</div>

</div>




</template>

<script>
import bannerImg from '../components/bannerImg'
import bottombar from '../components/bottombar'
export default {
  data(){
    return {
      value:''
    }
  },
  methods:{
    onChange(e){
     window.console.log(e.data)
    },
    onSearch(){
    },
    onClick(){
    }
  },
  components:{
    bannerImg,
    bottombar
  }
}
</script>
<style scoped>
.main {
 margin-top: 1vh;
 margin-left: 0.3vw;

}

</style>