# Simple-require.js

## 介绍

Simple-require是一个简单易用的javascript模块按需加载程序。兼容IE9+

[测试地址](http://anderpang.github.io/simple-require)

## 版本

0.0.1

## 使用

<script src="js/simple-require.js" data-main="../js/main"></script>
引用simple-require.js，绑定data-main即可

## 配置简单

```
require.config({

     //配置别名
	 alias:{
		"jquery":"lib/jquery.js",       
		"popup":"./plugins/popup.js"
	 },

	 //配置加载模块前的事件，一般用于loading
	  beforeLoad:function(){
		  
	  },

	  //配置加载模块后的事件,一般用于取消loading
	  loaded:function(){
		
	  }
	}
);
```
	 
## 说明

以simple-require.js所在目录为根目录，从而解决了javascript模块中目录引用出错的问题。（无需配置根目录）。

