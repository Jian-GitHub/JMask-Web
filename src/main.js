import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router";
import {Expand, ChatRound} from '@element-plus/icons-vue'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.use(ElementPlus)
app.component('Expand', Expand)
app.component('chat-round', ChatRound)
app.mount('#app')
// app.all('*', (req, res, next) => {
//     let origin = req.headers.origin;
//     res.header('Access-Control-Allow-Origin', origin);
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
//     next()
// });
