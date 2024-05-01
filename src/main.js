
// import App from './App.vue'
// import App from './09_Setup-侦听数据变化/App.vue'
// import App from './10_Setup-Hooks练习/App.vue'
// import App from './03_tabcontrol/App.vue'
// import App from './05_组件插槽-基本使用/App.vue'
// import App from './06_组件插槽-具名插槽/App.vue'
// import App from './07_组件插槽-作用域插槽/App.vue'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './同义替换/week1/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)

app.mount('#app')
