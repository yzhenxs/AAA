
//-------------1.点击顶部关闭按钮隐藏banner条-----------------------------

//1.获取关闭xx按钮
var closeTopAd = id('closeTopAd');
var banner = id('banner');//banner条
//2.注册事件
closeTopAd.onclick = function (  ) {
    //隐藏banner条
    //第一种方式：设置display属性为none
    //banner.style.display = 'none';

    //第二种方式：innerHTML
    console.log ( banner.innerHTML );
    banner.innerHTML = '';//清空广告条的内容
    banner.style.height = '0px';//清空内容之后，banner自身的样式还在，需要设置高度为0
}


//-------------页面顶部广告结束-----------------------------
