// 轮播图区域功能函数
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    autoplay: {
      delay: 1000,//轮播图的延迟
      stopOnLastSlide: false,// 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
      disableOnInteraction: false //当用户滑动的时候禁止自动轮播图 不需要禁止就为false
    },
  
    loop: true, // 循环模式选项
  
    // 如果需要分页器(小圆点容器)
    pagination: {
      el: '.swiper-pagination',
    },
  
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  