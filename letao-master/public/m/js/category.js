$(function() {
	var letao = new Letao();
	// 调用初始化区域滚动的函数
	letao.initScroll();
	//调用获取一级分类的函数
	letao.queryTopCategory();
	//调用获取二级分类的函数
	letao.querySecondCategory();
});

var Letao = function() {

}

Letao.prototype = {
    initScroll: function() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    //获取一级分类
    queryTopCategory:function () {
    		// 1. 调用ajax请求请求一级分类
    		$.ajax({
    			url:'/category/queryTopCategory',
    			success:function (data) {
    				// 2. 调用模板生成html
    				var html = template('categoryLeftTpl',data);
    				// 3. 把生成模板渲染到页面
    				$('.category-left ul').html(html);
    			}
    		});
    },
    //获取二级分类
    querySecondCategory:function () {
    	// 1. 给1级分类的a添加点击事件 注意由于元素的动态的事件需要使用委托方式添加
    	$('.category-left ul').on('tap','li a',function () {    		
    		querySecondCategoryData($(this).data('id'));
    		$(this).parent().addClass('active').siblings().removeClass('active');
    	});
    	querySecondCategoryData(1);
    	function querySecondCategoryData(id) {
    		// 2. 获取当前点击的a的一级分类id
    		//data函数就是专门用来获取自定义属性的函数 只要写data-后面的名称
    		// attr是获取普通的属性需要带全称
    		// var id = $(this).attr('data-id');
    		// 3. 调用获取二级分类的APi传入一级分类的id
    		$.ajax({
    			url:'/category/querySecondCategory',
    			data:{'id':id},//由于API需要传入id参数 
    			success:function (data) {
    				// 4. 到用模板生成html
    				var html = template('categoryRightTpl',data);
    				// 5. 渲染到右侧分类的页面row里面
    				$('.category-right .mui-row').html(html);
    			}
    		})
    	}
    }
}
