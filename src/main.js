import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from 'router';
import App from './App.vue';
import '@/assets/css/reset.css';

const app = createApp(App);

app.use(Router);
app.use(ElementPlus);


app.mount('#app')
