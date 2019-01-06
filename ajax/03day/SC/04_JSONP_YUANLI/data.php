<?php 

    //我给你什么函数名你就调用哪个函数
    //所以应该把函数传过来！
    $funcName = $_GET['callback'];


    //echo "$funcName('hello')";  // test('hello');

     echo $funcName.'({"name":"jack","age":16})';   //拼接成了 test( {"name":"jack","age":16} );

   
?>