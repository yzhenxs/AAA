$(function () {
    $('#buy').fullpage({

        // 设置显示出导航（分页指示器）
        navigation: true,
        // 设置每一屏的颜色，传入一个数组，数组中每个元素会依次给每一屏
        sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#ffeedd', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],

        afterLoad: function (a, index) {
            $(".section6").css({ "background-position": " -220px center" });

            //发现一个bug,每次从其他网页在滑动到这个网页的时候,会发现网页不是按照新打开的那种方式有动作
            // 首先是把search的图片路径换回来
            $(".section2 .search").attr('src', 'images/02/search01.png')
            // 清除jQuery动画，其实就是把style属性给清空就行了
            $('.section>div div,.section>div img,.section img').attr('style', '');

            //清除掉动画效果
            $(".section").removeClass('animation');



            if (index == 2) {
                //这里做的是第二屏的动画
                $(".section2 .search").animate({
                    marginLeft: -100
                }, 800, "easeOutBounce", function () {
                    //在这里添加一个左右跳动的效果既是easeOutBounce

                    $(".section2 .search").attr('src', 'images/02/search02.png');
                    //图片移动后更改图片路径,变更图片

                    //图片变更路径后,会在原地停顿下,然后往右上位置移动
                    $(".section2 .search").delay(500).animate({
                        // delay:这是延迟的意思
                        marginLeft: 120,
                        marginTop: -180,
                        height: 30
                    }, 800);

                    $('.section2 .sofas').delay(500).animate({
                        width: 441,
                        height: 218

                    }, 800);
                })
            }

            if (index == 3) {
                $(".section3 .color").animate({

                }, 2000, function () {
                    $(".section3 .color").attr('src', 'images/03/color02.gif');
                    $(".section3 .add").attr('src', 'images/03/add02.gif');
                })
            }

            if (index != 3) {
                $(".section3 .color").animate({

                }, 2000, function () {
                    $(".section3 .color").attr('src', 'images/03/color01.gif');
                    $(".section3 .add").attr('src', 'images/03/add01.gif');
                })
            }

            if (index == 4) {
                // $(".section4 .cloud").animate({
                //     marginLeft: -1000
                // }, 40000);

                //这个位置的白云应该用c3里面的动画效果来做,这样的话可以做到无限次数循环

                $(".section4 .car").animate({
                    marginLeft: 900
                }, 3000, "easeInElastic")

                $(".section4 .sofa").animate({
                    marginLeft: 900
                }, 3000, "easeInElastic")

                $(".section4 .keyboard").delay(3300).animate({
                    opacity: 1
                }, 800)

                $(".section4 .address").delay(3300).animate({
                    opacity: 1
                }, 800)
            }

            if (index == 5) {

                $('.section5').addClass('animation');

                $(".section5 .hand").animate({
                    marginBottom: -333
                }, 1000, function () {
                    $(".section5 .mouse").css('background-image', 'url(images/05/mouse02.png)');
                });

                $(".section5 .bill").delay(1200).animate({
                    marginTop: -220
                }, 1000);   

            }

            if (index == 6) {
                   

                $(".section6 .box").animate({
                    marginBottom: -200

                }, 1800)

                $(".section6 .sofa").animate({
                    marginBottom: -200
                }, 1800, function () {
                    //之后要做的就是移动小车,但并不是车子移动,而是背景图片向左移动
                    $('.section6').animate({
                        backgroundPositionX: -1180

                    }, 3000, function () {
                        //之后要做的就是俩个员工带着沙发出来
                        $('.section6 .man').animate({
                            height: 130
                        }, 800, function () {
                            $('.section6 .man').animate({
                                marginRight: -243
                                //搬运工到达位置后,电梯门打开
                            }, 2000, function () {
                                $('.section6 .door').animate({
                                    width: 107
                                    //电梯门打开后,人开始显示出来
                                }, 1000, function () {
                                    $('.section6 .girl').animate({
                                        width: 35
                                    }, 1000);
                                });
                            });
                        });

                    });
                });
            }

            if (index == 7) {
                $('.section7').addClass('animation');
            }


            if (index == 8) {

                var hand = document.getElementsByClassName('handXX')[0];
                //这时候需要给鼠标一个移动事件
                document.onmousemove = function (e) {
                    e = e || window.event;
                    //得到当前数遍触发点的位置
                    console.log(getPagePoint(e).pageX, getPagePoint(e).pageY);
                    //这个时候需要修改手的位置为鼠标触发点的位置
                    hand.style.left = getPagePoint(e).pageX - 60 + "px";
                    hand.style.top = getPagePoint(e).pageY + "px";
                }

                //鼠标移入之后,图片变成会跳动的那个
                $('.section8 .begin').mouseover(function () {
                    // alert(111);
                    $('.section8 .begin').attr('src', 'images/08/begin.gif');
                })

                //鼠标移走之后,图片又变成不会跳动的那个
                $('.section8 .begin').mouseout(function () {
                    // alert(111);
                    $('.section8 .begin').attr('src', 'images/08/begin.png');
                })

                //鼠标点击再来一次之后,会跳回到第一页
                $('.section8 .again').click(function () {
                    // 参数1：代表跳转到第几屏
                    // 参数2：代表跳转到这一屏哪一栏（一屏里有横向轮播）
                    $.fn.fullpage.moveTo(1, 0);
                })


            }


        }
    })


})













