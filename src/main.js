import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import store from './store' 

import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

app.use(Antd)

app.use(store)

app.mount('#app')
