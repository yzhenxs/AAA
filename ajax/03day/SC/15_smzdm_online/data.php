<?php 

    //获取文件的内容，把内容当返回值
    //除了可以读取本地的文件，还可以读取网络请求的接口
    $result = file_get_contents("https://www.smzdm.com/homepage/json_more?timesort=153544639369&p=2");

    echo $result;
?>