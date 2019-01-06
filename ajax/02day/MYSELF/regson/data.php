<?php
// 接收传过来的数据
$pId=$_REQUEST['region_parent_id'];

//链接数据库
$link=mysqli_connect('127.0.0.1','root','root','yangzhen');
//执行sql语句
$sql="select * from ch_region where region_parent_id=$pId";
$result=mysqli_query($link,$sql);
//转换成数组
$arr=mysqli_fetch_all($result,1);

//关闭数据库
mysqli_close($link);

//因为得到的数据$arr是php格式的,需要转换成为json格式的
echo json_encode($arr);

//复习巩固
// php转换成为json格式  json_encode(php数据)
// json格式转换成为php  json_decode(json数据)

// json格式转换成为js   JSON.parse(json数据)
// js转换成文json格式   JSON.stringify(js数据)



?>