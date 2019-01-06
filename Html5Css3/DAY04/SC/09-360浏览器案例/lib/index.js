$(function(){

    // 如果是自己写的外联JS文件而且还访问了页面上的元素，建议加一个入口函数，因为你不能保证别人导入前面还是后面
    $('#hm').fullpage({
        navigation:true,
        sectionsColor:['#00bfff','#9acd32','#ffa500','#008000','#87ceeb'],
        // 当页面滚出来后，会调用的事件
        // 参数2：index参数代表的是当前滚出来的页面的页码数，从1开始
        afterLoad:function(a,index){

            // console.log(index);
            //先把所有的animation清掉
            $('.section').removeClass('animation');

            // 哪一屏被滚出来，就给谁加一个类叫animation
            $('.section').eq(index-1).addClass('animation');
        }
    });

})
