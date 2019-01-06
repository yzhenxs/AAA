$(function() {
    var letao = new Letao();
    //调用添加搜索历史记录
    letao.addHistory();
    //调用查询历史记录的函数
    letao.queryHistory();
    //调用删除搜索历史记录
    letao.deleteHistory();
    //调用清空搜索历史记录
    letao.clearHistory();
})

var Letao = function() {

}

Letao.prototype = {
    // 添加搜索历史记录
    addHistory: function() {
        //因为后面有按钮的点击事件 在事件里面this就是调用事件的对象 当前dom元素
        //但是事件里面的函数是letao调用的 事件外面的this就是letao对象 that就是letao对象
        var that = this;
        // 1. 给搜索按钮添加点击事件
        $('.btn-search').on('tap', function() {
            // 2. 获取当前输入框输入的值
            var search = $('.input-search').val();
            // 3. 判断当前输入框的是否有输入
            if (!search) {
                alert('请输入要搜索的商品');
                return false;
            }
            // 4. 获取本地存储中是否有值 有值就使用存储中的值 没有值就使用空数组
            var historyData = localStorage.getItem('historyData');
            // 5. 判断当前本地存储的是否有值  
            if (historyData) {
                // 如果有值就把值转成数组（因为在本地存储中都是字符串 ）
                historyData = JSON.parse(historyData)
            } else {
                // 如果没有值就是要空数组
                historyData = [];
            }
            // 6. 判断当前输入的值是否在数组存在
            if (historyData.indexOf(search) != -1) {
                // 7. 如果存在就把旧的值删掉
                historyData.splice(historyData.indexOf(search), 1);
                // 8. 把新的值添加 让新增在最后面
                historyData.unshift(search);
            } else {
                // 9. 如果输入值在数组中不存在 直接追加到最后面
                historyData.unshift(search);
            }
            // 10. 把添加完成的数组保存到本地存储中 设置值要把数组转成字符串存储
            localStorage.setItem('historyData', JSON.stringify(historyData));
            // 11. 在添加完成后调用查询刷新页面
            that.queryHistory();
            // 12. 添加完成后清空输入框
            $('.input-search').val('');
        });
    },
    //查询搜索历史记录
    queryHistory: function() {
        // 1. 获取本地存储值有值就转换 没有值就为空数组
        var historyData = JSON.parse(localStorage.getItem('historyData')) || [];
        // 2. 调用模板的时候把数组包装成对象调用模板 数组不能用在模板里面必须是对象
        var html = template('searchHistoryTpl', { 'rows': historyData });
        // 3. 把默认渲染到页面
        $('.content ul').html(html);
    },
    //删除搜索历史记录
    deleteHistory: function() {
        var that = this;
        // 1. 给所有删除xx添加点击事件
        $('.content ul').on('tap', 'li span', function() {
            // 2. 获取当前点击xx的删除的索引
            var index = $(this).data('index');
            console.log(index);
            // 3. 获取当前本地存储的数组 把当前索引的值删掉
            var historyData = JSON.parse(localStorage.getItem('historyData')) || [];
            historyData.splice(index, 1);
            // 4. 删除完成后存储到本地存储中 把数组转成字符串
            localStorage.setItem('historyData', JSON.stringify(historyData));
            // 5. 在删除完成后调用查询刷新页面
            that.queryHistory();
        });
    },
    clearHistory: function() {
    		var that = this;
        // 1. 给清空按钮添加单击事件
        $('.fa-trash').on('tap', function() {
            //2. 调用本地存储removeItem 删除某个键和值
            localStorage.removeItem('historyData');
            // 3. 在清空完成后调用查询刷新页面
            that.queryHistory();
        });
    }
}
