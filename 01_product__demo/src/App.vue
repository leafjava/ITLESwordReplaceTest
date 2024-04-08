<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Watch></Watch>
  <h2>--------</h2>
  <WatchEffect></WatchEffect>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Watch from './09_Setup-侦听数据变化/App-watch.vue'
import WatchEffect from './09_Setup-侦听数据变化/watchEffect.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Watch,
    WatchEffect
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
