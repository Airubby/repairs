$(function(){
    // $('#app').niceScroll({
    //     cursorcolor: "rgba(204, 204, 204, 0.4)",//#CC0071 光标颜色
    //     cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
    //     touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
    //     cursorwidth: "2px", //像素光标的宽度
    //     cursorborder: "0", // 游标边框css定义
    //     cursorborderradius: "2px",//以像素为光标边界半径
    //     autohidemode: true //是否隐藏滚动条
    // });
})


//日期格式化
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

















