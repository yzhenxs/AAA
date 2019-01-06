<?php 

/*

   json_encode
            把PHP数据转成JSON字符串

   json_decode
            把JSON字符串转成PHP数据

*/

    $arr = [
        "name" => "jack",
        "age" => 16
    ];

    //我想把这个数组给JS去用
    //要想办法把这个数组转成字符串，就能给JS用了
    //一般支持JSON的语言（几乎所有语言都支持JSON），都提供了一些函数用来把数据转成JSON格式的字符串

    //得到一个JSON格式的字符串
    echo json_encode($arr);

    //能不能把JSON字符串转为PHP数据？
    // $res =  json_decode(  '{"name":"andy","age":16}' );

    // var_dump($res);
?>