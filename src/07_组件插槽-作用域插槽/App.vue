<template lang="">
  <div>
    <tab-control :list="list">
      <!-- <template v-slot:default>
        <button>{{item}}</button>
      </template> -->
    </tab-control>

    <tab-control :list="list">
      <template v-slot:default="props">
        <button>{{props.item.title}}</button>
      </template>
    </tab-control>

    <tab-control :list="list">
      <template #default="props">
        <button>{{props.item.title}}</button>
      </template>
    </tab-control>

    <!-- 独占默认插槽的简写(了解) -->
    <tab-control :list="list">
      <template v-slot="props">
        <button>{{props.item.title}}</button>
      </template>
    </tab-control>

    <!-- 如果只有一个默认插槽,那么template可以省略 -->
    <tab-control :list="list" v-slot="props">
      <button>{{props.item.title}}默认</button>
    </tab-control>
  </div>
</template>
<script>
import tabControl from './tabControl'
export default {
  components:{
    tabControl
  },
  data(){
    return {
      list:[{title:'衣服',content:'衣服列表'},{title:'鞋子',content:'鞋子列表'},{title:'裤子',content:'裤子列表'}]
    }
  }
}
</script>
<style lang="">
  
</style>