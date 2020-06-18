/*
    简易 消息控件的实现
    @options.msg 提示的信息 默认为空
    @options.duartion  提示的时间 默认是 3s
*/

function Message(options = { msg: "" }) {
    let msg = options.msg;
    let duartion = options.duartion || 3000;
    //创建一个提示元素
    let tipEl = document.createElement("div")
    tipEl.innerHTML = msg;
    //添加自定义消息类名 
    tipEl.classList.add("tt-message")
        //将创建的提示元素 发女到页面中
    document.body.appendChild(tipEl)
        //默认3s之后移除该元素 
    setTimeout(function() {
        document.body.removeChild(tipEl);
    }, duartion)
}
export { Message }