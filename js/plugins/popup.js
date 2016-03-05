"use strict";
define(function(){

    function showbox(){
        var div=document.createElement("div");
        div.style.cssText="position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0);";
        div.innerHTML='<div style="position:absolute;left:0;top:0;right:0;bottom:0;border:1px solid #CCC;box-shadow:0 0 20px #CCC;margin:auto;width:300px;height:220px;line-height:200px;text-align:center;background:#FFF;">这是加载popu的效果</div>';
        document.body.appendChild(div);
        div.onclick=function(){
            this.style.display="none";
        };
    };

    return showbox;
});