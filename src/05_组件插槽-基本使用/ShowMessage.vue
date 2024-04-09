<template lang="">
  <div>
    <h2>{{title}}</h2>
    <div class="content">
      <slot>
        <p>我是默认内容哈哈</p>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    title:{
      type:String,
      default:''
    },
    content:{
      type:String,
      default:''
    }
  }
}
</script>
<style lang="">
  
</style>