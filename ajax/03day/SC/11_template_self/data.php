<?php 

    //1. 连接数据库
    $link = mysqli_connect('127.0.0.1','root','root','test');

    //2，操作数据库
    $sql = "select *from students";
    $result = mysqli_query($link,$sql);
    //转换成数组
    $data = mysqli_fetch_all($result,1);

    //3. 关闭数据库
    mysqli_close($link);

    //把数组转成JSON格式的字符串
    echo json_encode( $data );

?>