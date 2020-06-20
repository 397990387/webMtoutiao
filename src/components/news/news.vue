<!--  -->
<template>
<div class='right-news'>
   <div class="refresh" @click.stop="refresh">点击刷新</div>
   <div class="navs" @click.stop="goToNewsDetail(article.nid)" v-for="article in articles"   >
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
      articles: [], // 文章列表
       page:0, //当前请求的页码
      number:20,//请求的条数
      is_loading:false //是否正在请求
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
 refresh: function() {
    
      if(this.is_loading){
        return false;
      }
      this.is_loading = true;//正在发请求
      this.$axios
        .post("/getArticles", {
          lastid: this.lastid,
          page:this.page++,// 0 1 2 3 4 ..... 17 
          number:this.number
        })
        .then(res => {
          console.log(res);
          // 将最新的数据 拼接到 现有的数据上 
          this.articles = (this.articles).concat(res.articles || []);
          this.page = res.current_page || this.page;// 设置当前的页码
          // 判断是否是最后一页 总页数17  当前页码 17,16
          if(res.counts/this.number <= res.current_page){
            this.$message({
              msg:"已经到最后一页了"
            })
          }
        }).catch(err=>{console.log(err)}).finally(()=>{
          this.is_loading = false;
        });
    }
  },
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  let  _this = this
  window.addEventListener("scroll",()=>{
      //1. 获取整个屏幕可以滚动的高度
      let scrollHeight = document.documentElement.scrollHeight
      //获取当前滚动的距离
      let scrollTop = document.documentElement.scrollTop 
      //3. 获取当前浏览器可视区域的高度
      let clientHeight = document.documentElement.clientHeight;
      //触底了
      console.log(scrollHeight-scrollTop<=clientHeight?"触底":"继续努力，还没触底")
      // 如果触底
      scrollHeight-scrollTop<=clientHeight?_this.refresh():"";
  })
   this.refresh();
     
  
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