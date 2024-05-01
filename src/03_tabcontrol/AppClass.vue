<template lang="">
  <div class="app">
    <tabControl :titles='["衣服","鞋子","裤子"]'></tabControl>
  </div>
</template>
<script>
import TabControl from './tab-control.vue'
export default {
  components:{
    TabControl
  }
}
</script>
<style lang="">
  
</style>