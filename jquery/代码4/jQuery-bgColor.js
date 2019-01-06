(function ($) {
  //给$的原型添加方法.
  $.fn.bgColor = function (bgC) {
    //console.log(this); //此时这里的this是一个jQuery对象,代表的是调用这个方法的jQuery对象.
    this.css('backgroundColor',bgC);

    //设置方法最好返回这个jQuery对象本身.
    return this;
  }
}(jQuery));