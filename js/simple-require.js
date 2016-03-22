/*!
 *  author:ander <anderpang@qq.com> 2016/3/5
 *  version: 0.0.3

 *  require.config({
 *    alias:{
        "jquery":"lib/jquery.js"
 *    },
      beforeLoad:function(){
          alert("准备加载...");
      },
      loaded:function(){
          alert("加载完毕!");
      }
 *  });
 **/
"use strict";(function(){var f={},o=document,d={},j=false,a=m(),n=a.src,b=n.slice(0,n.lastIndexOf("/"));function e(r,q,s){if(typeof q==="function"){s=q;q=void 0}switch(typeof r){case"string":if(arguments.length===1&&f[r]){return f[r].exports}p(r,q,s);break;case"object":if(r instanceof Array){g(r,q,s)}else{s&&s(r)}break;default:s&&s(r)}}e.config=function(q){if(typeof q!=="object"){return}for(var r in q){q.hasOwnProperty(r)&&(d[r]=q[r])}};function i(t,r,s){var q=f[c()],u=function(){q.exports=s.apply(null,[].slice.call(arguments));q.complete=1;q.callbacks.forEach(function(v){v(q.exports)});q.callbacks.length=0};switch(typeof t){case"function":s=t;u();break;case"string":if(!s&&typeof r==="function"){s=r;r=void 0}p(t,r,u);break;default:if(!s&&typeof r==="funtion"){s=r;r=void 0}g(t,r,u)}}function h(q){this.complete=0;this.callbacks=q?[q]:[]}function p(s,r,t){var q=f[s];if(q){q.complete===0?t&&q.callbacks.push(t):t&&t(q.exports);return q}if(d.alias&&d.alias.hasOwnProperty(s)){r=s;s=d.alias[s]}return k(s,r,t)}function g(z,v,x){var q=z.length,u=0,y=q,r,w=[],s=typeof v,t=function(){if(--q===0&&x){var A=[];w.forEach(function(B){A.push(B.exports)});x.apply(null,A)}};if(s!=="object"){v=s==="undefined"?[]:[v]}for(;u<y;u++){w.push(k(z[u],v[u],t))}}function m(){var q=o.currentScript||l();return q}function l(){var q=o.querySelectorAll("head>script"),q,r=q.length,s=r,u;while(r--){if(q[r].readyState==="interactive"){return q[r]}}try{throw new Error("ie")}catch(t){if(t.stack){u=t.stack.toString().match(/\([^)]+?(?=\:\d+\:\d+\)$)/)}}if(u){r=s;u=u[0].substr(1);while(r--){if(q[r].src===u){return q[r]}}}return q[s-1]}function c(){return m().src}function k(v,u,w){var t,s,q=o.createElement("script"),r;if(v.indexOf("http://")!==0&&v.indexOf("https://")!==0){v=v[0]==="/"?b+v:b+"/"+v}q.src=v;r=q.src;t=f[r];if(t){t[v]=t;w&&w(t.exports)}else{if(!j&&d.beforeLoad){j=true;d.beforeLoad()}t=new h(w);f[v]=f[r]=t;u&&(f[u]=t);s=o.head||o.getElementsByTagName("head")[0];q.async=true;q.onload=function(){s.removeChild(q);if(t.complete===0){t.complete===1;t.callbacks.forEach(function(x){x(t.exports)});t.callbacks.length=0}if(j&&d.loaded){j=false;d.loaded()}};s.appendChild(q)}return t}e.clearOther=function(r){var q=f[r],s;if(q){for(s in f){f.hasOwnProperty(s)&&f[s]!==q&&(delete f[s])}}else{f={}}};o.addEventListener("DOMContentLoaded",function(){var q=a.getAttribute("data-main");if(q){/\.js\b/i.test(q.split("/").pop())||(q+=".js");e(q)}},false);this.require=e;this.define=i}).call(this);
