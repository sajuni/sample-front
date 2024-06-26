import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { store } from '@/pinia'

const app = createApp(App)

app.use(router).use(store).mount('#app')
