<template lang="">
  <div class="app">
    <!-- 1.内容是button -->
    <show-message title="哈哈哈">
      <button>我是按钮元素</button>
    </show-message>

    <!-- 2.内容是超链接 -->
    <show-message>
      <a href="#">百度一下</a>
    </show-message>
  </div>

  <!-- 3.内容是一张图片 -->
  <show-message>
    <img src="@/img/banner.png" alt="">
  </show-message>
</template>
<script>
import ShowMessage from './ShowMessage.vue'
export default {
  components:{
    ShowMessage
  }
}
</script>
<style lang="">
  
</style>