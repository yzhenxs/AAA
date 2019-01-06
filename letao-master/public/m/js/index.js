$(function() {
    // 创建构造函数的实例
    var letao = new Letao();
    // 使用实例调用原型对象的方法
    letao.initSlide();
    //调用初始化区域滚动的函数
    letao.initScroll();
});
// 创建乐淘构造函数
var Letao = function() {

}

Letao.prototype = {
    //创建一个函数 初始化轮播图
    initSlide: function() {
        //获得slider插件对象
        var gallery = mui('.mui-slider');
        gallery.slider({
            interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
        });
    },
    //初始化区域滚动(这里是做滑动效果的)
    initScroll: function() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0001 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
