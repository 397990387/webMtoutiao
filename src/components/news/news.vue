<!--  -->
<template>
<div class='right-news'>
   <div class="refresh">点击刷新</div>
   <div class="navs">
       <div class="img">
           <img src="http://wlanya.oss-cn-shenzhen.aliyuncs.com/2020_06_11/1c872634-9527-7d84-5da2-a72e5911078b.jpg" alt=""></div>
       <div class="navs-tab">
           <div class="navs-top">删除文章</div>
           <div class="navs-middle">
               <div class="middle-img">
                   <img src="http://wlanya.oss-cn-shenzhen.aliyuncs.com/2020_06_11/1c872634-9527-7d84-5da2-a72e5911078b.jpg" alt=""></div>
               <div class="middle-text">小菜比</div>
           </div>
           <div class="data">2020-06-12-13:30:51</div>
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