import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueMaskDirective } from 'v-mask'

import '@/app/providers'

import App from './App.vue'
import { router } from './router'

const app = createApp(App)

app.use(createPinia()).use(router).directive('mask', VueMaskDirective.bind).mount('#app')
