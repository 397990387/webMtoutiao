import Vue from 'vue'
import App from './App.vue'

// a.1 引入路由配置信息
import router from "./router"
Vue.config.productionTip = false
    // Vue.prototype.$apoURL = 'http://tt.linweiqin.com/api/tt';
    // axios.defaults.baseURL = Vue.prototype.$apoURL

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')