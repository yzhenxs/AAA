$(function () {

    // 调用初始化代码
    $('#demo').fullpage({
        navigation: true,
        sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#ffeedd', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],

        afterLoad: function (a, index) {

            //先清空所有屏的animation这个类
            $('.section').removeClass('animation');

            $('.section').eq(index-1).addClass('animation');

            // 清掉search的style，让它复原
            // 如果是jquery加的动画，那么其实就只要把style清掉就还原了，因为jquery的动画本质上改的是行内的style
            $('.section2 .search').attr('style', '').attr('src', 'images/02/search01.png');
            $('.section2 .sofas').attr('style', '');

            $('.section4 .carBox').attr('style', '');
            $('.section4 .keyboard').attr('style', '');

            $('.section6').attr('style','');
            $('.section6 .girl').attr('style','');
            $('.section6 .man').attr('style','');
            $('.section6 .door').attr('style','');
            $('.section6 .sofaBox').attr('style','');

            //下面这句话跟上面一堆话是一样一样的！
            //解释：.section里面有个fullpage插件自动生成的div，这个div包住了我们自己写的元素
            //.section>div>div才是真正找到我们写的div元素。逗号是并集选择器的意思，代表找到所有自己写的div
            // 和自己写的所有Img,去掉行内的style样式
            // $('.section>div>div,.section>div>img').attr('style','');

            // 如果是第二屏
            if (index == 2) {

                //做第二页的动画
                $('.search').animate({

                    right: 500

                }, 1000, "easeOutBounce", function () {

                    //动画执行完了，就换掉图片
                    //注意这里给的是行内属性，那么就应该以html的路径来给
                    $('.search').attr('src', 'images/02/search02.png');

                    $('.search').delay(500).animate({

                        right: 380,
                        marginTop: -173,
                        height: 30
                    }, 500);

                    // 沙发的放大动画，必须跟搜索框往上走的动画同时进行，所以沙发往上走延迟500毫秒，沙发也应该延迟500毫秒
                    $('.sofas').delay(500).animate({
                        width: 441,
                        height: 218
                    }, 500);
                });
            }

            if (index == 3) {

                $('.section3').addClass('animation');
            }


            if (index == 4) {

                $('.carBox').animate({

                    marginLeft: 1000

                }, 2000, 'easeInElastic', function () {

                    //购物车跑完后，要淡入键盘
                    $('.keyboard').animate({
                        opacity: 1
                    }, 500);
                })
            }

            if (index == 5) {

                $('.section5').addClass('animation');
            }

            if (index == 6) {

                $('.sofaBox').animate({

                    top: 12
                }, 1000, function () {

                    $('.section6').animate({

                        backgroundPositionX:-1200

                    },2500,function(){

                        $('.man').animate({
                            height:120

                        },800,function(){

                            $('.man').animate({
                                right:-130,

                            },800,function(){

                                $('.door').show();
                               
                                // 延迟0.5秒执行
                                setTimeout(function(){
                                    $('.girl').show();
                                },500);
                            });
                        });
                    });
                });

            }


            if(index == 8){

                $('.section8').mousemove(function(e){

                    e = e || window.event;

                    $('.section8 .hand').css('top',e.pageY);
                    $('.section8 .hand').css('left',e.pageX - 60);

                })

                $('.section8 .begin').mouseover(function(){

                    $(this).css('background','url(images/08/begin.gif)');
                })


                $('.section8 .again').click(function(){

                    // location.reload();

                    // 如果你用了fullpage，它就会有这个方法
                    // 这个方法就是指定跳转到第几屏，从1开始
                    $.fn.fullpage.moveTo(1);
                })
            }
        }
    });
})