<!--  -->
<template>
<div class='right-news'>
   <div class="refresh" @click.stop="refresh">点击刷新</div>
   <div class="navs" @click.stop="goToNewsDetail(article.nid)" v-for="article in articles" :key="article.nid"  >
       <div class="img" v-if="article.img">
           <img :src="article.img" alt></div>
       <div class="navs-tab">
           <div class="navs-top">{{article.title}}</div>
           <div class="navs-middle">
               <div class="middle-img">
                   <img :src="article.user.avator" alt=""></div>
               <div class="middle-text">{{article.user.nickname}}</div>
           </div>
           <div class="data">{{article.created_at}}</div>
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
     lastid: 0, // 最新一条资讯的id
      articles: [] // 文章列表
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  goToNewsDetail:function(nid){
    console.log(nid)
    this.$router.push({
      path:"/NewsDetail",query:{
        nid:nid
      }
    })
  },
refresh:function(){
    this.$axios.post("/getArticles",{lastid:this.lastid}).then(res=>{
        this.articles = (res.articles || []).concat(this.articles);
        if(this.articles.length>0){
            this.lastid = this.articles[0].nid
        }
    })
}

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
       this.$axios
      .post("/getArticles", {
        lastid: this.lastid
      })
      .then(res => {
        this.articles = res.articles || [];
        if (this.articles.length > 0) {
          // 获取最后一条文章或头条的 id
          this.lastid = this.articles[0].nid;
        }
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
    .right-news {
  .refresh {
      width: 100%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: skyblue;
      border: 1px solid skyblue;
      border-radius: 5px;
      font-size: 16px;

  }

  .navs {
      margin-top: 20px;
      width: 100%;
      display: flex;
    .img {
        flex: 1;
        width: 100%;
      img {
          height: 100px;
      }
    }

    .navs-tab {
        display: flex;
        flex-direction: column;
       justify-content: space-between;
        padding: 5px;
        flex: 2;
      .navs-top {
          font-size: 20px;
          font-weight: 600;
      }

      .navs-middle {
          display: flex;
        .middle-img {
            width: 30px;
            height: 30px;
        
           
          img {
               border-radius: 50%;
              width: 100%;
              height: 100%;
          }
        }

        .middle-text {
            padding: 5px;
            font-size: 16px;
            color:#7b7b7b;
        }
      }

      .data {
          font-size: 16px;
           color:#7b7b7b;
      }
    }
  }
}

</style>