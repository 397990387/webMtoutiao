<!--  -->
<template>
<div class='tt-nav'>
  <div class="one">
        <div class="tt-nav-title">{{title}}</div>
    <div class="tt-nav-totiao">{{registered}}</div>
  </div>
   <div class="two">
        <div class="tt-two-totiao">{{infringement}}</div>
        <div class="tt-twoi-totiao">{{product}}</div>
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
    title:"下载APP",
    registered:"注册头条号",
    infringement:"侵权投诉",
    product:"头条产品"
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
.tt-nav {
    display: flex;
    padding: 0px 10px 0px 10px ;
    justify-content: space-between;
    width: 100vw;
    height: 40px;
    background-color: black;
    color:white;

  .one {
      display: flex;
        text-align: center;
        line-height: 40px;
        font-weight: 200;
    .tt-nav-title {
      

    }

    .tt-nav-totiao {
       
        margin-left: 10px;
    }
  }

  .two {
      text-align: center;
        line-height: 40px;
        font-weight: 200;
      display: flex;
    .tt-two-totiao {
        margin-right: 10px;
    }
    .tt-twoi-totiao{

    }
  }

  
}
</style>