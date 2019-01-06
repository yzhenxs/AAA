<?php

    //先获得提交过来的数据
    $name = $_POST['username'];

    //去数据库查询有没有以这个账号的信息，如果有代表以前注册过，就不能使用
    //如果没有就可以注册

    //1. 连接数据库
    $link = mysqli_connect('127.0.0.1','root','root','manage');

    //2. 操作数据库
    $sql = "select *from user where name = '$name'";
    $result = mysqli_query($link,$sql);
    $data = mysqli_fetch_all($result,1);

    //3. 关闭数据库
    mysqli_close($link);

    //判断结果
    if(count($data) > 0){

        //大于0代表查到结果，查到结果就证明账号已存在
        echo "账号已存在，请重新输入！";
        
    }else{

        echo "恭喜！账号可以使用！";
    }
?>