<!--  -->
<template>
<div class='registered'>
    <!-- 登入界面 -->
    <div class="div">
        <div class="title">账号登入</div>
        <input type="text" v-model="username"/>
        <input type="password" v-model="password" />
        <div class="btn" @click.stop="config">确定</div>
        <div class="registered-a">
            <div class="left">
                 登陆/注册即表示你同意
                 <a href="#">用户协议</a>和<a href="#">隐私政策</a>        
            </div>
            <div class="right">
                <a href="#" @click.prevent.stop="goToUserRegister">注册账号</a>
            </div>  
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {UPDATE_USER_INFO} from "../../vuex/mutationsType"
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    username:"",
    password:""
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    goToUserRegister:function(){
        debugger
        this.$router.push({
            path:"/UserRegister"
        })
    },
    config:function(){
        //获取输入框的值
        let username = this.username;
        let password = this.password;
       if (!password || !username) {
        this.$message({
          msg: "账号或者密码不能为空！"
        });
        return false;
      }
        //发送信息给后台
       this.$axios
        .post("/loginCheck", {
          username,
          password
        })
        .then(res => {
          console.log(res);
          this.$message({
              msg:res.msg
          })
          if(res.status === 0){
              // 登陆成功
              // a. 将用户信息保存到本地 localStorage
              // b. 将用户信息 使用 vuex 存起来 方便实现页面组件间的数据共享
              // c. 跳转到首页
              this.$store.commit(UPDATE_USER_INFO,res.wdata)
              this.$router.push({"name":"index"}); // 跳转回首页
          }
        })
        .catch(err => err);
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

.div {
    width: 400px;
    height: 220px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% ,-50%);
    border: 1px solid #dddddd;
    padding: 5px;
  .title {
      width:100%;
      height: 45px;
      text-align: center;
      line-height: 45px;
      font-size: 16px;
      border-bottom: 1px solid #dddddd;
  }

  input {
      width: 100%;
      height: 40px;
      margin-top: 8px;
      border: 1px solid #dddddd;
  }

  .btn {
      width:100%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-color: #e63849;
      border-radius: 5px;
      color: white;
    margin-top: 8px;
  }

  .registered-a {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    .left {
      a {
    text-decoration: none;
      }
    }

    .right {
      a {
          text-decoration: none;
      }
    }
  }
}

</style>