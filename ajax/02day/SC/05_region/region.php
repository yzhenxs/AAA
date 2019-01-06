<?php 

    //不能写死的东西让别人当做参数传进来
    $pId = $_REQUEST['region_parent_id'];  //如果你用get接收，那么当你以后写接口文档，就应该写你这个接口支持的是GET请求。如果你写的是post,那么就要写POST请求,如果写的是_REQUEST代表get和post都支持，如果你参数写的是region_parent_id，那么写接口文档的时候也要规定说提交的参数的key叫 region_parent_id

    // 去查数据库
    // 1. 连接数据库
    $link = mysqli_connect('127.0.0.1','root','root','yangzhen');

    // 2. 操作数据库
    $sql = "select *from ch_region where region_parent_id = $pId";
    $result = mysqli_query($link,$sql);
    //转成数组
    $data = mysqli_fetch_all($result,1);

    // 3. 关闭数据库
    mysqli_close($link);

    //转成json
    echo json_encode($data);
?>