"use strict";
define(function(){
    function StringBuffer(s){
        this.strs=[s];
    }
    StringBuffer.prototype.append=function(s){
        this.strs.push(s);
        return this;
    };
    StringBuffer.prototype.toString=function(){
        return this.strs.join("");
    };

    function buffer(s){
      return new StringBuffer(s);
    }

    return buffer;
});