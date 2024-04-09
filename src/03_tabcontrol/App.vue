<template lang="">
  <div>
    组件间通信
    <div class="main-tab">
      <div class="tab" v-for="(item,index) in commodity" @click="currentIndex = index">
        <div :class="{'isActive':currentIndex == index}">{{item.name}}</div>
        <div class="content">{{item.content}}</div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      commodity:[{name:'衣服',content:'衣服内容'},{name:'鞋子',content:'鞋子内容'},{name:'裤子',content:'裤子内容'}],
      currentIndex:0
    }
  }
}
</script>
<style scoped>
.main-tab{
  display:flex;
}
.tab{
  width:80px;
  height:30px;
  margin:10px;
}
.isActive{
  color:red;
}
</style>