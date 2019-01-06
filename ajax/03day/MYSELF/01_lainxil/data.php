
<?php

// 链接数据库
$link=mysqli_connect('127.0.0.1','root','root','yangzhen');
$sql="select * from students";
$rows=mysqli_query($link,$sql);
$arr = mysqli_fetch_all($rows,1);
mysqli_close($link);

//把数据从php格式转换成json格式
echo json_encode($arr);






?>