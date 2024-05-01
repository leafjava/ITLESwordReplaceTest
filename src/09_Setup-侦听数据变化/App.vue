<template lang="">
  <div>
    AppContent
    <button @click="message = '你好啊，李银河'">修改message</button>
    <button @click="info.name = 'kobe'">修改info</button>
    <button @click="info.friend.name = 'james'">修改friend</button>
  </div>
</template>
<script>
import {ref, watch, reactive} from 'vue'
export default {
  setup(){
    //1.定义数据
    const message = ref("Hello world")
    const info = reactive({
      name:"why",
      age:18,
      friend:{
        name:'kobe'
      }
    })

    //2.侦听数据变化
    watch(message,(newValue, oldValue) => {
      console.log(newValue,oldValue)
    })

    // watch(info,(newValue, oldValue) => {
    //   console.log(newValue,oldValue)
    // },{
    //   immediate:true
    // })

    //3.侦听reactive数据变化后,获取普通对象
    watch(() => ({...info}),(newValue, oldValue) => {
      console.log(newValue,oldValue)
    },{
      immediate:true,
      deep:true
    })

    return {
      message,
      info
    }
  }

  

  // data(){
  //   return {
  //     message:''
  //   }
  // },
  // watch:{
  //   message(newValue, oldValue){

  //   }
  // }
}
</script>
<style lang="">
  
</style>