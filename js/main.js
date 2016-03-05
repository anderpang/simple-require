"use strict";

var showbox={
   init:function(){
       var cover=document.createElement("div");
       cover.style.cssText="display:none;position:fixed;left:0;top:0;width:100%;height:100%;z-index:999;box-sizing:border-box;padding-top:10em;color:#FFF;text-align:center;background:rgba(0,0,0,.8);";
       cover.innerHTML="组件加载中...";
       document.body.appendChild(cover);
       this._cover=cover;
   },
   show:function(){
       if(!this._over)this.init();
       this._cover.style.display="block";
   },
   hide:function(){
       this._cover.style.display="none";
   }
};


//配置
require.config({
     alias:{
        //"jquery":"lib/jquery.js",
        "popup":"./plugins/popup.js"
     },
      beforeLoad:function(){
          showbox.show();
          alert("加个alert以看到加载层...");
      },
      loaded:function(){
         showbox.hide();
      }
  }
);

//点击加载组件
document.getElementById("testBtn").addEventListener("click",function(e){
    e.preventDefault();
    require("popup",function(a){
        a();
    });
});
