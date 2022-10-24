import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from 'router';
import App from './App.vue';
import '@/assets/css/reset.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(Router);
app.use(ElementPlus);


app.mount('#app')
