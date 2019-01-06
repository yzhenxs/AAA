function ajax(type, url, data,success) {

    //1. 创建请求对象
    var xhr = new XMLHttpRequest();

    //既要满足是get请求，又要满足data不为空，才给你拼接url
    //type无论你给的是大写还是小写，我都统一转为小写来判断
    if (type.toLowerCase() == 'get' && data != undefined) {

        url += "?" + data;
    }

    //2. 设置请求行
    xhr.open(type, url);

    if (type.toLowerCase() == "get") {
        //4. 发送请求
        xhr.send();

    } else {
        //肯定是post请求

        //3. 设置请求头（get不用设置）
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

        //4. 发送请求
        xhr.send(data);
    }

    //5. 监听响应完成
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            //只是打印了响应体
            //你这个函数私下里把响应体给打印了
            //而我拿到响应体可能是为了做其他操作
            //能不能私下打印？肯定不能
            // console.log(xhr.responseText);
            //每个调用者的需求是不一样的
            //调用者A：想把响应体展现到table上
            //调用者B：想把响应体展现到p标签上
            //调用者C：想把响应体只是打印出来

            //每个调用者拿到响应体后要执行的代码是不一样的
            //能在这里把处理响应体的代码写死吗？不能
            //封装的思想：不一样的东西当做参数传递进来
            //要把代码传进来！那么怎么传递代码？？传递一个函数，因为函数里面就保存了代码
            //只要别人把函数传进来，你在这调用，就行了
            success( xhr.responseText );
        }
    }
}