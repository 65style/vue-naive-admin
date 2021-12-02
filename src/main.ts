import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import { setupNaive, setupDirectives } from '@/plugins';

import {
  // create naive ui
  create,
  // component
  NButton
} from 'naive-ui'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
// import 'vfonts/FiraCode.css'


const naive = create({
  components: [NButton]
})

const app = createApp(App)
app.use(router)
app.use(naive)
app.mount('#app')
