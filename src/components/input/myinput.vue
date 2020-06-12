<!--  -->
<template>
<div class='input-tab'>
        <div class="tab">
            <!-- 切换头条开始 -->
            <div :class="['input-wt',{'active':tab.id == activeTab}]"
                @click.stop="switchTab(tab.id)"
                v-for="tab in post" :kry="tab.id">
                {{tab.title}}
            </div>
            <!-- 切换头条结束 -->
        </div>
     <!-- tab内容开始 -->
        <div class="tab-cotent">
            <!-- 微头 开始-->
                <div class="tab-conrtent-wb" v-show="activeTab=='weibo'" >
                    <!-- 多行文本 -->
                        <textarea cols="30" rows="10" class="textarea" placeholder="做犀利,乃木娘翻抖"></textarea>
                    <div class="bottom">
                        <div class="left">
                            <div class="bottom-left" @click.stop="toggleUploadArea">图片</div>  
                            <div class="left-img" v-show="showUploadImgArea" >
                                <div class="left-img-div">
                                    <div class="title">+</div>
                                    <input type="file" @change="handchange" multiple accept=".jpg,.png">
                                </div>
                                <div class="img-item" v-for="img,index in uploadImgs" :key="img">
                                    <img :src="img" alt=""/>
                                    <div class="deleteImg" @click.stop="deleteImg(index)">x</div>
                                </div>
                            </div>  
                        </div>  
                            <div class="bottom-right">发布</div>
                    </div>
                </div> 
                       
            <!-- 微头结束 -->
            <!-- 文章开始 -->
                    <div class="tab-conrtent-article" v-show="activeTab=='article'">
                        <input type="text" name="" placeholder="请输入内容"/>
                        <vue-editor v-model="richContent" class="rich-editor" />
                         <div class="rich-publish">
                             <div class="div1">发布</div>
                             </div>
                    </div>
            <!-- 文章结束 -->
        </div>
               <!-- tab内容结束 -->
             
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { VueEditor } from "vue2-editor";

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    VueEditor
},
data() {
//这里存放数据
return {
    post:[{
        id:"weibo",
        title:"发微条"
    },{
        id:"article",
        title:"写文章"
    }],
    activeTab:"weibo",
    showUploadImgArea:false,
    uploadImgs:[]

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //删除图片
    deleteImg:function(index){
        this.uploadImgs.splice(index,1)
    },

    // 文件上传事件
    handchange:function(e){
        Array.from(e.target.files).forEach(f=>{
            let params = new FormData();
            params.append("file",f);
            this.$axios.post("/aliossUpload",params).then(res=>{
                this.uploadImgs.push(res.url)
            })
            console.log(f)
        })

    },
    //点击显示上传图片
    toggleUploadArea:function(){
        this.showUploadImgArea=!this.showUploadImgArea
    },
    //切换头条
    switchTab:function(tabId){
    this.activeTab = tabId
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
    .input-tab {
        width: 100%;
         padding: 10px;
  .tab {
    width: 100%;
     
      padding: 5px;
      display: flex;
    .input-wt {
        margin-left: 20px;
        width: 80px;
        line-height: 40px;
        text-align: center;
        height: 40px;
    }  
    .active{
        border-bottom: 2px solid var(--themeColor);
        color: #46a0fc;
    }
  }
  .tab-cotent {

  .tab-conrtent-wb {
    padding: 5px;

    .textarea {
        width: 100%;
        border: none;
        text-indent: 20px;
        background-color:#f4f5f6 ;
        border: 1px solid #ddd;

    }

    .bottom {
          display: flex;
        justify-content: space-between;
      .left {
        .bottom-left {
            height: 30px;
            line-height: 30px;
            font-size: 16px;
        }

        .left-img {
             display: flex;
            flex-wrap: wrap;
            width: 300px;
          .left-img-div {
                 position: relative;
              width: 100px;
              height: 100px;
            .title {
                 font-size: 50px;
                line-height: 100px;
                text-align: center;
                width: 100px;
                height: 100px;
                border: 1px dashed #ddd;
                font-weight: 100;
            }

            input {
                 opacity: 0;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
          }

          .img-item {
                padding: 5px;
              width: 100px;
              height: 100px;
              position: relative;
            img {
                 height: 100%;
                width: 100px;
            }

            .deleteImg {
                display: none;
                position: absolute;
                font-size: 20px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

            }
             &:hover {
                background-color: #7f7f7f;
                opacity: 0.8;
                transition: all 0.5s;
                .deleteImg {
                  color: black;
                  display: block;
                }
              }
          }
        }
      }

      .bottom-right {
          height: 30px;
          line-height: 30px;
          width: 100px;
          text-align: center;
          color: white;
          font-size: 16px;
          background-color: var(--themeColor);
      }
    }
  }

  .tab-conrtent-article {
      width: 100%;
      input {
          width: 100%;
          height: 40px;
          border: none;
        }
    .rich-editor {
    
    }
    .rich-publish {
        position: relative;
       width: 100%;
       height: 50px;
    //    background-color: yellow;
       text-align: right;
       .div1{
           position: absolute;
           top: 0;
           right: 0;
            width: 120px;
            height: 50px;
            line-height: 50px;
            text-align: center; 
            color: white;    
            background-color: var(--themeColor);  
       }
    }
  }
}

}
</style>