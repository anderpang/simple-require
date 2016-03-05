"use strict";

//define(依赖，别名,工厂);
define("StringBuffer.js","sb",function(buffer){ 

    function cut(len){
        var str;
         str=buffer("0123").append("456").append("78").append(9).toString();
        return str.substring(0,len);
    }    

   return cut;
});