<!--  -->
<template>
<div class='tt-user'>
    <div class="header">
        <div class="tt-user-img"><img :src="userInfo.avator" alt=""></div>
        <div class="tt-user-name">{{userInfo.nickname}}</div>
        <div class="tt-user-counten" @click.stop="goTotoUserData">编辑</div>
   </div>
   <!-- 微头条 -->
   <div class="news">
        <div class="tt-suer-tab">
            <div :class="['tab',{active:nav.id == activeTab}]"  
            @click.stop="add(nav.id)"
            v-for="nav in navs" :key="nav.id">{{nav.text}}</div>
        </div>
        <div class="tt-user-title">
                <div v-if="activeTab=='toutiao'">
                    <div class="toutiao-item" v-for="item in toutiaos" :key="item.nid">
                        <div class="toutiao-top">
                            <img :src="userInfo.avator" alt="">
                            <span>{{userInfo.nickname}}</span>
                        </div>
                        <div class="toutiao-midel">{{item.title}}</div>
                        <div class="toutiao-bontton">
                            <div class="left">{{item.created_at}}</div>
                            <div class="right" @click.stop="deleteItem(item.nid)">删除</div>
                        </div>
                    </div>
                </div>
            <div v-if="activeTab=='article'">
                <div class="toutiao-item" v-for="item in articles" :key="item.nid">
                        <div class="toutiao-top">
                            <img :src="userInfo.avator" alt="">
                            <span>{{userInfo.nickname}}</span>
                        </div>
                        <div class="toutiao-midel">{{item.title}}</div>
                        <div class="toutiao-bontton">
                            <div class="left">{{item.created_at}}</div>
                            <div class="right" @click.stop="deleteItem(item.nid)">删除</div>
                        </div>
                    </div>
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
    activeTab:"toutiao",
    navs:[{
        id:"toutiao",
        text:"微头条"
    },{
        id:"article",
        text:"文章"
    }],
    toutiaos:[],//头条数据
    articles:[] //文章数据

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
    goTotoUserData:function(){
        this.$router.push({
            path:"/UserData"
        })
    },
    deleteItem: function(nid) {
        console.log(nid)
      this.$axios
        .post("/deleteArticle", {
          nid: nid
        })
        .then(res => {
          this.$message({
            msg: res.msg
          });
          // res.status ==0 代表删除成功
          if (res.status == 0) {
            let index = this.articles.findIndex(v => v.nid == nid);
            if (index != -1) {
              this.articles.splice(index, 1);
              return true;
            }
            index = this.toutiaos.findIndex(v => v.nid == nid);
            if (index != -1) {
              this.toutiaos.splice(index, 1);
              return true;
            }
          }
        });
    },
    add:function(id){
        this.activeTab = id
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
 this.$axios
      .post("/getArticlesByType", {
        type: "TT"
      })
      .then(res => {
        //console.log(res)
        this.toutiaos = res.articles;
      });
    // 文章数据
    this.$axios
      .post("/getArticlesByType", {
        type: "article"
      })
      .then(res => {
        // console.log(res)
        this.articles = res.articles;
      });
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
.tt-user {
  .header {
    margin-top: 50px;
      display: flex;
      
    .tt-user-img {
        
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .tt-user-name {
        height: 50px;
        line-height: 50px;
        margin-left: 20px;
    }

     .tt-user-counten{
         height: 50px;
         width: 50px;
         text-align: center;
         line-height: 50px;
         border-radius: 50%;
         margin-left: 20px;
         background-color: greenyellow;
    }
  }
  .news {
      margin-top: 10px;
    .tt-suer-tab {
        display: flex;
        .tab {
            width: 100px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            border-bottom: 1px solid #dddddd;
        }
        .active {
            border-bottom: 2px solid var(--themeColor);
            color: #66b0fd;
        }
    }
    
    .tt-user-title {

   
    .toutiao-item {
         height: 150px;
        display: flex;
        padding: 10px;
        flex-direction: column;
        justify-content: space-around;
      .toutiao-top {
            display: flex;
          align-items: center;
        img {
              height: 30px;
            width: 30px;
            border-radius: 50%;
        }

        span {

        }
      }

      .toutiao-midel {
           font-size: 16px;
      }
      &:hover {
          .toutiao-bontton {
            .right {
              display: block;
            }
          }
        }
      .toutiao-bontton {
           display: flex;
          justify-content: space-between;
        .left {
             font-size: 14px;
        }

        .right {
               font-size: 14px;
            display: none;
        }
        
      }
    }
  
}
    

  }
    
}
</style>