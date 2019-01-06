(function ($) {
  /**
   * 给$的原型添加tabs方法.
   * @param options 参数对象
   * @param options.tabHeads        页签选择器
   * @param options.tabHeadsClass   页签选中的样式类
   * @param options.tabBodys        页面选择器
   * @param options.tabBodysClass   页面选中的样式类
   */
  $.fn.tabs = function (options) {
    var $tabDiv = this; //先把整个tab栏切换的这个大div保存起来.

    //通过参数传递过来的页签选择器,找到需要点击的这些标签,设置点击事件.
    $(options.tabHeads).on('click', function () {
      //当前鼠标点击的这个页签添加上参数传入的类, 其他的兄弟标签移除这个类.
      $(this).addClass(options.tabHeadsClass).siblings().removeClass(options.tabHeadsClass);
      //找到当前鼠标点击的这个页签的索引
      var idx = $(this).index();
      //找到索引匹配的页面标签显示(添加传入的类),其他的影藏.
      $(options.tabBodys).eq(idx).addClass(options.tabBodysClass).siblings().removeClass(options.tabBodysClass);
    });

    //返回当前这个元素
    return $tabDiv;
  }

}(jQuery));