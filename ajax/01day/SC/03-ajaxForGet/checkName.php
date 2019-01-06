<?php 

  //接收传递过来的数据
   $name = $_GET['username'];

   if($name == "admin"){

        echo "账号已存在";

   }else{

        echo "账号可以使用！";
   }
?>