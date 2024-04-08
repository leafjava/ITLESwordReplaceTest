<template lang="">
  <div>
    <h2>当前计数:{{counter}}</h2>
    <button @click="counter++">+1</button>
    <button @click="name = 'kobe'">修改name</button>
  </div>
</template>
<script>
import {watchEffect,watch, ref} from 'vue'
export default {
  setup(){
    const counter = ref(0)
    const name = ref("why")

    
    //1.watchEffect传入的函数默认会直接被执行
    //2.在执行的过程中，会自动的收集依赖（依赖哪些响应式数据）
    //只要函数里的依赖发生变化，就会自动执行
    const stopWatch = watchEffect(() => {
      console.log('---', counter.value, name.value)

      //判断counter.value > 10
      if(counter.value > 10){
        stopWatch()
      }
    })
    return {counter, name}
  }
}
</script>
<style lang="">
  
</style>