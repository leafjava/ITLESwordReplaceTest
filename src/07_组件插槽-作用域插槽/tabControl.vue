<template lang="">
  <div>
    <div class="title">
      <div @click="currentIndex = index" 
        :class="{active:currentIndex == index}" 
        v-for="(item,index) in list" 
        :key="index">
        <slot :item="item">
          <span>{{item.title}}</span>
        </slot>
      </div>
    </div>
    <div>
      {{list[currentIndex].content}}
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      // list:[{title:'衣服',content:'衣服列表'},{title:'鞋子',content:'鞋子列表'},{title:'裤子',content:'裤子列表'}],
      currentIndex:0,
    }
  },
  props:{
    list:{
      type:Array,
      default:[]
    }
  }
}
</script>
<style  scoped>
.title{
  display:flex;
}
.title div{
  width:33%;
  text-align:center;
  line-height:5vh;
  height:5vh;
}
.active{
  color:red;
}
</style>