<?php 

    //让别人把函数名传过来
    $funcName = $_GET['callback'];

    echo "$funcName( { name:'jack',age:16 } );";
?>