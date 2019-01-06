<?php 

    //需要别人传入父级id
    $parentId = $_REQUEST['parentID'];

    //1. 打开数据库
    $link = mysqli_connect('127.0.0.1','root','root','yangzhen');

    //2. 操作数据库
    $sql = "select * from ch_region where region_parent_id = $parentId";
    $result = mysqli_query($link,$sql);
    //转成数组
    $data = mysqli_fetch_all($result,1);

    //3. 关闭数据库
    mysqli_close($link);

    // 转成JSON输出
    echo json_encode($data);
?>