<?php

//获取传过来的元素
$name=$_POST['username'];

//链接数据库
$link=mysqli_connect('127.0.0.1','root','root','yangzhen');
//操作数据库
$sql="select * from user where userName = '$name'";
$rows=mysqli_query($link,$sql);
$arr=mysqli_fetch_all($rows,1);
//关闭数据库
mysqli_close($link);

if(count($arr)>0){
    //说明数据库中有这个信息
    echo '此账号已经存在';
}else{
    echo "这个账号可以存在";
}





?>