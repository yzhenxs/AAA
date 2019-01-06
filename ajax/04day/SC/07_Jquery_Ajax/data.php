<?php 

    $name = $_GET['name'];
    $age = $_GET['age'];

    $arr = [
        "name" => $name,
        "age" => $age
    ];

    echo json_encode($arr);

    echo "hello";


   