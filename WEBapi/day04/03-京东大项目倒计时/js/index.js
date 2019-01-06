
//-------------页面顶部广告开始-----------------------------
//1.获取元素
var closeTopAd = id("closeTopAd");
var banner = id("banner");
//2.给关闭按钮注册一个单击事件
closeTopAd.onclick = function () {

    //第一种方式：隐藏banner
    //banner.style.display = "none";

    //2.第二种方式：清空banner的innerHTML
    //2.1 清空banner  这个div里面的内容
    banner.innerHTML = "";
    //2.2 把banner 这个div的高度设置为0
    // banner.style.height = "0";

}
//-------------页面顶部广告结束-----------------------------


//-----------------页面秒杀部分开始-------------------------------------

/*需求分析：
    * 1.每隔1s钟，秒span - 1
    * 2.当前秒为0的时候，变成59，并且分span  -1
    * 3.当分为0的时候，变成59，并且时span-1
    * 4.时分秒如果<10，则需要在前面加上0
  思路分析：
    * 1.获取元素
    * 2.开启定时器，时间间隔是1s
    * 3.开始计时

 */

//1.获取元素
var spanSec = document.getElementById('spanSec');//秒
var spanMin = document.getElementById('spanMin');//分
var spanHour = document.getElementById('spanHour');//时

//获取元素的文本(字符串)
var s = spanSec.innerText;
var m = spanMin.innerText;
var h = spanHour.innerText

//2.开启定时器

setInterval(function (  ) {
    //3.开始计时
    //3.1    1每隔1s钟，秒 - 1
    s--;
    //3.2. 当前秒小于0的时候，变成59，并且分span  -1
    if(s<0){
        s = 59;
        m--;
    }
    //3.3.当分小于0的时候，变成59，并且时span-1
    if(m < 0){
        m = 59;
        h--;
    }
    //3.4. 时分秒如果<10，则需要在前面加上0
    //s m h都是字符串，需要转成number类型
    s = parseInt(s);
    m = parseInt(m);
    h = parseInt(h);
    s = s<10?'0'+s:s;
    m = m<10?'0'+m:m;
    h = h<10?'0'+h:h;

    //3.5将计时后的时间赋值给页面span元素
    spanSec.innerText = s;
    spanMin.innerText = m;
    spanHour.innerText = h;
},1000);






//-----------------页面秒杀部分结束-------------------------------------
