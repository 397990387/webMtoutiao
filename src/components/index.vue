<!--  -->
<template>
<div class='tt-index'>
    <!-- 头条 -->
    <div class="nav">
        <Header></Header>
    </div>
    <div class="content">
        <div class="content-left">
            <Nav></Nav>
        </div>
        <div class="content-middel"></div>
        <div class="content-right">
            <div class="content-input">
               <searchInput></searchInput>
            </div>
            <!-- 登入框 -->

            <div class="login">
            <Login></Login>
             </div>
              <div class="news">
            <News></News>
        </div>
    </div>
        <!--  登入框-->
        <!--  -->
       
    </div>      
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Login from "../components/login/Login"
import Header from "../components/header/Header"
import searchInput from "../components/searchInput/searchInput"
import Nav from "../components/nav/Nav"
import News from "../components/news/news"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Login,//登入框
    Nav, //左边列表
    Header, //头条
    searchInput, //搜索框
    News, //新闻
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
div.tt-index {
  

  div.nav {

    header {

    }
  }

  div.content {
      display: flex;
      padding: 10px 5vw 0 10vw;
    div.content-left {
        flex: 1;
    }

    div.content-middel {
        flex: 2;
    }

    div.content-right {
        flex: 2;
        
      div.login {
        login {

        }
      }
    }

   
  }
}
</style>