// 1. 引入 Vue
import Vue from "vue"
// 2.1. 引入路由组件
import VueRouter from "vue-router"
// 2.2 使用 VueRouter
Vue.use(VueRouter)
    //4. 引入组件
import Index from "../components/index"
import Userlogin from "../components/login/Userlogin.vue"
import UserRegister from "../components/login/UserRegister.vue"
import NewsDetail from "../components/news/NewsDetail"
import UserCenter from "../components/user/userCenter"
import UserData from "../components/user/userData"

// 3. 路由配置文件
let routes = [{
        path: "/",
        name: "index",
        component: Index
    }, {
        path: "/Userlogin",
        name: "Userlogin",
        component: Userlogin
    }, {
        path: "/UserRegister",
        name: "UserRegister",
        component: UserRegister
    }, {
        path: "/NewsDetail",
        name: "NewsDetail",
        component: NewsDetail
    }, {
        path: "/UserCenter",
        name: "UserCenter",
        component: UserCenter
    }, {
        path: "/UserData",
        name: "UserData",
        component: UserData
    }]
    // 5. 新建一个 VueRouter 实例 将routes 作为参数传进入,同时将路由导出
export default new VueRouter({
    routes
})