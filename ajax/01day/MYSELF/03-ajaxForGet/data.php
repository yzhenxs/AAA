<?php
// 如果输入的姓名在数据库中已经有了,则提示账号已存在,否则提示账号可以使用
$name=$_GET['username'];
if($name=="admin"){
echo '你输入的账号已存在,请使用其他账号';
}else{
    echo '恭喜你,此账号可以使用';
}







?>