// 如果自己写一个独立的js文件，建立加入口函数
$(function(){

    $('#shop').fullpage({
        navigation:true,
        sectionsColor:['#f9dd67','#84a2d4','#ef674d','#ffeedd','#cf4759','#85d9ed','#8ac060','#84d9ed' ],
        afterLoad:function(a,index){

            //记得把第六屏复原
            $('.section6').css('backgroundPositionX',"-220px");


            //单独把图片换回来
            $('.section2 .search').attr('src','images/02/search01.png');

            // 清除jQuery动画，其实就是把style属性给清空就行了
            $('.section>div div,.section>div img').attr('style','');

            //默认清空所有屏的animation 
            $('.section').removeClass('animation');

            if(index == 2){

                //所以就做第二屏的动画
                $('.section2 .search').animate({
                    marginRight:-111

                },800,'easeOutBounce', function(){

                    //动画完成后把图片替换为有文字的图片
                    //注意：因为你给的是什么值，就直接是把什么值赋给html的行内属性
                    //所以你这个路径应该是给html的路径
                    $('.section2 .search').attr('src','images/02/search02.png');
                    
                    // 记得先停顿一下，那样的效果就是文字先变出来在往右上走
                    $('.section2 .search').delay(500).animate({
                        marginRight:-260,
                        marginTop:-172,
                        height:30
                    },800);

                    $('.section2 .sofas').delay(500).animate({
                        width:441,
                        height:218
                    },800)
                })
            }

            if(index == 3){

                $('.section3').addClass('animation');
            }

            if(index == 4){

                $('.section4 .carBox').animate({

                    marginLeft:1000
                },2500,'easeInElastic',function(){

                    //动画完了后，要把键盘淡入
                    $('.section4 .keyboard').animate({
                        opacity:1
                    },800);
                });
            }

            if(index == 5){

                $('.section5').addClass('animation');
            }

            if(index == 6){

                $('.section6 .box').animate({
                    bottom:0
                },1500,function(){

                    $('.section6 .box').hide();

                    //箱子掉下来后，小车开动
                    $('.section6').animate({

                        backgroundPositionX:-1180

                    },1800,function(){

                        //车到了后出人
                        $('.section6 .man').animate({

                            height:150

                        },500,function(){

                            //人变出来后再往右移动
                            $('.section6 .man').animate({
                                
                                right:-150

                            },500,function(){

                                $('.section6 .door').show();
                                
                                setTimeout(function(){
                                    $('.section6 .girl').show();
                                },300);
                            });
                        });
                    });
                });
            }

            if(index == 7){

                $('.section7').addClass('animation');
            }

            if( index == 8 ){

                $('.section8').mousemove(function(e){

                    // console.log(e);
                    
                    $('.section8 .hand').css('left',e.pageX - 60);

                    var y  = e.pageY < 170 ? 170 : e.pageY;
                    $('.section8 .hand').css('top',y); //最小是155，最大随便
                    
                });

                $('.section8 .begin').mouseover(function(){
                    
                    $(this).attr('src','images/08/begin.gif');
                });

                $('.section8 .begin').mouseout(function(){
                    
                    $(this).attr('src','images/08/begin.png');
                });


                $('.section8 .again').click(function(){
                    
                    // 参数1：代表跳转到第几屏
                    // 参数2：代表跳转到这一屏哪一栏（一屏里有横向轮播）
                    $.fn.fullpage.moveTo(1,0);
                });
            }
        }
    });

})