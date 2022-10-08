import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import store from './store'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueLazyload from 'vue-lazyload'
// import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus, { size: 'small', zIndex: 3000 }).use(store).use(router).use(VueLazyload)
// app.use(VueLazyLoad, {
//   loading: '',
//   error: ''
// })

app.mount('#app')
