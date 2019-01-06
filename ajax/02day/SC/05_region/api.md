## 获取所有省、市、区划分的接口

url:region.php
type: get post

参数：
    region_parent_id
        说明：如果传入1，代表查所有的省
                如果要查某省下面所有的市，就传这个省自己的ID
                如果要查某个市下面所有的区，就传这个市自己的ID


响应体形式：json格式

    例：
        [
            {},
            {},
        ];