<template lang="">
  <div>
    <button @click="changeTitle">修改title</button>
    <!-- <home></home>
    <hr>
    <about></about> -->

    <!-- 2.home和about页面的切换 -->
    <button @click="currentPage = 'home'">home</button>
    <button @click="currentPage = 'about'">about</button>

    <component :is="currentPage"></component>

    <!-- <div class="content"></div> -->

    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
  </div>
</template>
<script>
import {ref} from 'vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import useTitle from './hooks/useTitle'

export default {
  components:{
    Home,
    About
  },
  setup(){
    const currentPage = ref("home")

    // document.title = "哈哈哈"
    function changeTitle(){
      useTitle("app title")
    }

    return {changeTitle,currentPage}
  }
}
</script>
<style scoped>
  /* .content{
    width:300px;
    height:100px;
    background-color: orange;
  } */
</style>