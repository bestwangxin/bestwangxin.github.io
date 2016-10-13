function Change(tag,num,b){  /*tag:根目录 num: 像左就是-1，向右就是1 b：照片的总数。*/
	var put = document.getElementById("show_img");/*例如有入下元素：
<input type="text" id="button1" value="Click Me"/>
那么当调用document.getElementById("button1").Value的时候，返回的就是"Click Me"了*/

	
	
	
	var put1 = document.getElementById("www");
	var image1 = document.getElementById("www").src;
	var a1 = image.charAt(image.indexOf(tag) + (tag).length) + image.charAt(image.indexOf(tag) + (tag).length + 1);
	a1 = tag + Judge((Number(a) + num),b) + ".jpg";
	put.src = a1;
}
function Judge(a,b){
	if(a == 0){
		return b;
	}
	else if(a > b){
		return 1;
	}
	return a;
}
function AutoCut(tag,b){
	setInterval(AutoSwitch(tag,b),2000);
}
function AutoSwitch(tag,b){
	return function(){
	var put = document.getElementById("show_img");
	var image = document.getElementById("show_img").src;
	var a = image.charAt(image.indexOf(tag) + (tag).length) + image.charAt(image.indexOf(tag) + (tag).length + 1);
	a = tag + Judge((Number(a) + 1),b) + ".jpg";
	put.src = a;
}
}
function Change(tag,num,b){  /*tag:根目录 num: 像左就是-1，向右就是1 b：照片的总数。*/
	var put = document.getElementById("www");/*例如有入下元素：
<input type="text" id="button1" value="Click Me"/>
那么当调用document.getElementById("button1").Value的时候，返回的就是"Click Me"了*/

	var image = document.getElementById("www").src;
	var a = image.charAt(image.indexOf(tag) + (tag).length) + image.charAt(image.indexOf(tag) + (tag).length + 1);
	a = tag + Judge((Number(a) + num),b) + ".jpg";
	put.src = a;
}
function Judge(a,b){
	if(a == 0){
		return b;
	}
	else if(a > b){
		return 1;
	}
	return a;
}
function AutoCut(tag,b){
	setInterval(AutoSwitch(tag,b),2000);
}
function AutoSwitch(tag,b){
	return function(){
	var put = document.getElementById("www");
	var image = document.getElementById("www").src;
	var a = image.charAt(image.indexOf(tag) + (tag).length) + image.charAt(image.indexOf(tag) + (tag).length + 1);
	a = tag + Judge((Number(a) + 1),b) + ".jpg";
	put.src = a;
}
}

