(function ($) {
  /**
   * 给$的原型fn添加方法table
   * @param arrTHead 数组 这个数组用来生成表头的
   * @param arrTBody 数组 这个数组用来生成表主体数据的.
   */
  $.fn.table = function (arrTHead,arrTBody) {
    //方法体:根据传入的2个参数,生成一个table,这个table给this添加.
    var arr = [];
    arr.push('<table>');
    //生成表头
    arr.push('<tr>');
    for(var i = 0 ; i < arrTHead.length; i++){
    	arr.push('<th>');
        arr.push(arrTHead[i]);
    	arr.push('</th>');
    }
    arr.push("</tr>");
    //生成表格主体部分.
    for(var i = 0 ; i < arrTBody.length; i++){
    	arr.push('<tr>')
        arr.push("<td>"+(i+1)+"</td>"); //自动生成主体部分的序号列
        for(var key in arrTBody[i]){
          arr.push('<td>');
          arr.push(arrTBody[i][key]);
          arr.push('</td>');
        }
    	arr.push('</tr>')
    }

    arr.push('</table>')

    //生成的表格交给this.
    this.html(arr.join(""));


    //返回当前这个this
    return this;
  }
}(jQuery));
