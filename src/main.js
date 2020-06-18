import Vue from 'vue'
import App from './App.vue'
//引入自定义的请求库
import axios from "./common/axios"
import { Message } from "./common/utils"
import store from "./vuex/store"
//挂载到vue的原型商
Vue.prototype.$axios = axios
Vue.prototype.$message = Message;


// a.1 引入路由配置信息
import router from "./router"
Vue.config.productionTip = false
    // Vue.prototype.$apoURL = 'http://tt.linweiqin.com/api/tt';
    // axios.defaults.baseURL = Vue.prototype.$apoURL

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')