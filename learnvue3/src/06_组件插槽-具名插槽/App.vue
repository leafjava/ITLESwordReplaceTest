<template>
  <nav-bar>
    <template v-slot:left>
      <button>{{ leftText }}</button>
    </template>

    <template #center>
      <span>内容</span>
    </template>

    <template v-slot:right>
      <a href="#">注册</a>
    </template>
    
    
  </nav-bar>

  <!-- nav-bar只给一个插槽传入数据 -->
  <nav-bar>
    <template v-slot:[position]>
      <a href="#">注册</a>
    </template>
  </nav-bar>
  <button @click="btnClick('left')">左边</button>
  <button @click="btnClick('center')">中间</button>
  <button @click="btnClick('right')">右边</button>
</template>
<script>
import NavBar from './NavBar.vue'

export default {
  components:{
    NavBar
  },
  data(){
    return {
      position:'center',
      leftText: '返回'
    }
  },
  methods:{
    btnClick(val){
      this.position = val
    }
  }
}
</script>
<style lang="">
  
</style>