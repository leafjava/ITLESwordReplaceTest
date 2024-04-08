<template lang="">
  <div>
    {{a}}
  </div>
</template>
<script>
import {watchEffect,watch, ref} from 'vue'
export default {
  setup(){
    let a = ref(1)
    
    const stopWatch = watchEffect(() => {
      console.log(a)
    })



    return {a}
  }
}
</script>
<style lang="">
  
</style>