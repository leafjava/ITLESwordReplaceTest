<template>
  <div>
    <h2>当前计数:{{counter}}</h2>
    <button @click="counter++">+1</button>
    <button @click="name = 'kobe'">修改name</button>
    
    <div>
      <h2>当前计数2:{{num}}</h2>
      <button @click="num++">+1</button>
      <button @click="child = 'heihei'">修改child</button>
    </div>
    
  </div>
</template>

<script>
import {watchEffect, ref} from 'vue'

export default {
  name: 'App',
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

    const num = ref(0)
    const child = ref('son')

      const stop = watchEffect(()=> {
        console.log('---', num.value, child.value)

        if(num.value > 5){
          stop()
        }
      })

    return {counter, name, num, child}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
