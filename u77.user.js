// ==UserScript==
// @name        u77
// @namespace   http://www.u77.com
// @include     http://www.u77.com/topic/*
// @include		http://www.u77.com/index.php*
// @version     1
// @grant       none
// ==/UserScript==

var hrefChange = true; //用户设置，当为真时替换页面中所有不可用的旧链接

//任何情况下，只要访问不可用旧链接自动转向对应的新链接
if(location.href.match(/http:\/\/www\.u77\.com\/index\.php\?m=content&c=index&a=show&catid=/)){
	var a=location.href.match(/&id=\d+/),b='http://www.u77.com/game/'+a[0].match(/\d+/);
	location.href=b;
}

if(hrefChange == true){
	var a = document.getElementsByTagName('a');
	for (var b = 0; b < a.length; b++){
		var link = a[b].href;
		if(link.match(/http\:\/\/www\.u77\.com\/index\.php\?m=content&c=index&a=show&catid=\d+&id=\d+/)){
			a[b].href = 'http://www.u77.com/game/' + link.match(/&id=\d+/)[0].match(/\d+/);		
		}
  }
}
