<!--  -->
<template>
<div class='editor'>
    <div class="tabs" >
        <div :class="['tab-item',{active:item.id == activeTab}]"
        @click.stop="add(item.id)"
         v-for="item in navs" :key="item.id">{{item.text}}</div> 
    </div>
    <div class="tab-content">
        <div v-if="activeTab=='account'">
            <div class="tab-account-name">
                <div class="top">

                    <div class="text">名称</div>
                    <input type="text" v-model="nickname" />
                </div>
                <div class="midel">
                    <div class="text">头像</div>
                    <div class="swper">
                      <img :src="updateImgUrl" alt />
                        <input type="file" name="" id=""  @change="uploadImg" name id accept=".jpg, .png" />
                    </div>
                </div>
                <div class="bottom" @click.stop="updateAccount">更新资料</div>
            </div>
        </div>
        <div v-if="activeTab=='password'">
           <div class="updatePassword">
                <div class="updateInputBox">
                    <div class="text">当前密码</div>
                    <input type="password"  v-model="currentPassword"/>
                </div>
                <div class="updateInputBox">
                    <div class="text">新密码</div>
                    <input type="password" v-model="updatePassword"/>
                </div>
                <div class="updatePasswordBtn" @click="updatePasswordFunc">更新资料</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
        nickname:this.$store.state.userInfo.nickname, //当前的名称
        updateImgUrl: this.$store.state.userInfo.avator, //当前的图片
        activeTab:"account",
    navs:[{
        id:"account",
        text:"账户信息"
    },{
        id:"password",
        text:"密码管理"
    }]
};
},
//监听属性 类似于data概念
computed: {
    userInfo: function() {
      return this.$store.state.userInfo;
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
     updatePasswordFunc: function(e) {
        if(!this.currentPassword||!this.updatePassword){
            this.$message({
                msg:"提示密码不能为空"
            })
            return false;
        }
        this.$axios.post("/updatePassword",{
            //当前密码
            currentPassword:this.currentPassword,
            //新密码
            updatePassword:this.updatePassword
        }).then(res=>{
            this.$message({
                msg:res.msg
            })
        }).catch(err=>{
            console.log(err);
        })
    },
    //切换
        add:function(id){
            this.activeTab = id
        },
        // 上传图片功能
        uploadImg:function(e){
            Array.from(e.target.files).forEach(f => {
                //1. 构造请求的参数
                // {
                //     file:文件的数据
                // }
                let params = new FormData();
                params.append("file", f);
                //2. 发请求
                this.$axios
                .post("/aliossUpload", params)
                .then(res => {
                    this.updateImgUrl = res.url;
                })
                .catch(err => {
                    console.log(err);
                });
                // console.log(f);
            });
        },
        //
        updateAccount: function(e) {
      let nickname = this.nickname;
      if (!nickname) {
        this.$message({
          msg: "输入昵称不能为空！"
        });
        return false;
      }
      this.$axios
        .post("/updateUserInfo", {
          nickname,
          avator: this.updateImgUrl
        })
        .then(res => {
          this.$message({
            msg: res.msg
          });
          if (res.status == 0) {
            let userInfo = this.$store.state.userInfo;
            userInfo.nickname = nickname;
            userInfo.avator = this.updateImgUrl;
            this.$store.commit(UPDATE_USER_INFO, userInfo);
          }
        })
        .catch(err => console.log(err));
    },
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
.editor {
  .tabs {
       display: flex;
    border-bottom: 1px solid #ddd;
    .tab-item {
    width: 100px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
    }
    .active{
        border-bottom: 2px solid var(--themeColor);
        color: #46a0fc;
    }
  }
  .tab-content {
   
    .tab-account-name {
      .top {
            padding: 5px;
        display: flex;
        .text {
             height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 16px;
          flex: 1;
        }

        input {
            height: 30px;
          width: 100%;
          border: 1px solid #ddd;
          flex: 9;
        }
      }

      .midel {
          display: flex;
        .text {
             flex: 1;
          text-align: center;
          font-size: 16px;
        }
        .swper{
             position: relative;
          flex: 9;
     img {
          width: 120px;
            height: 120px;
        }

        input {
             position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            width: 120px;
            height: 120px;
        }
}
       
      }

      .bottom {
          height: 40px;
        line-height: 40px;
        text-align: center;
        width: 100px;
        background-color: #46a0fc;
        color: white;
        font-size: 16px;
        margin-left: 100px;
        border-radius: 5px;
      }
    }
  .updatePassword {
      padding: 10px;
      .updateInputBox {
        display: flex;
        margin-bottom: 5px;
        .text {
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          text-align: right;
          margin-right: 5px;
          flex: 1;
        }

        input {
          flex: 9;
          height: 30px;
          width: 100%;
          border: 1px solid #ddd;
        }
      }

      .updatePasswordBtn {
        height: 40px;
        line-height: 40px;
        text-align: center;
        width: 100px;
        background-color: #46a0fc;
        color: white;
        font-size: 16px;
        margin-left: 100px;
        border-radius: 5px;
      }
    }
}
}
</style>