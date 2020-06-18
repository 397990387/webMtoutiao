<!--  -->
<template>
<div class="div1">
    <div class='tt-index-login' v-if="!userInfo.oauth_token">
        <p class="text">登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</p>
        <div class="login-button" @click="registered">登陆</div>
        <!-- <div>注册</div> -->
    </div>
    <div class="div2" v-else >
        <div class="title" @click.stop="logout">退出登入</div>
        <div class="image" @click.stop="goToUserCenter">
            <img :src="userInfo.avator" alt=""/>
        </div>
        <div class="name">{{userInfo.nickname}}</div>
        <div class="foot">
            <div class="left">
                <div class="count">{{userInfo.tt_count}}</div>
                <div class="text">头条数</div>
            </div>
            <div class="right">
                <div class="count">{{userInfo.article_count}}</div>
                <div class="text">头条数</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import Usersign from "../Usersign/Usersign"
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { UPDATE_USER_INFO } from "../../vuex/mutationsType"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    // Usersign
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
    userInfo:function(){
        return this.$store.state.userInfo
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    goToUserCenter:function(){
        this.$router.push({
            path:"/UserCenter"
        })
    },
    logout:function(){
        this.$axios.post("/logout").then(res=>{
            this.$message({
                msg:res.msg
            });
            this.$store.commit(UPDATE_USER_INFO,{})
        })
    },
    registered:function(){
        this.$router.push({
            path:"/Userlogin"
        })
    }
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
<style lang='less' scoped >
.div1{
    .tt-index-login {
            margin: auto;
            border: 1px solid gray;
            margin-top: 10px;
            width: 350px;
            height: 250px;
            display: flex;
            flex-direction: column;
            align-content: center;
            padding: 50px;
            justify-content: space-around;
        .text {
            text-align: center;
            font-size: 12px;
            color: #777777;
        }

        .login-button {
            border-radius: 5px;
            font-size:16px;
            background-color:var(--themeColor);
            line-height: 40px;
            text-align: center;
            color:white;
            height:40px;
            width:250px;
        }
    }
    .div2 {
         width: 350px;
        border: 1px solid #ddd;
        margin-top: 20px;
        padding: 5px;
  .title {
        text-align: right;
    font-size: 14px;
    color: #dbdbdb;
  }

  .image {
        text-align: center;
    img {
         height: 50px;
      width: 50px;
      border-radius: 50%;
    }
  }

  .name {
       text-align: center;
  }

  .foot {
       display: flex;
    justify-content: space-around;
    .left {
      .count {
           text-align: center;
      }

      .text {
            text-align: center;
        font-size: 16px;
      }
    }

    .right {
      .count {
           text-align: center;
      }

      .text {
            text-align: center;
        font-size: 16px;
      }
    }
  }
}
}

</style>