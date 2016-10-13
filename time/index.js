function date(){
	var tag = document.getElementById("date");
	var today=new Date();
	var year=today.getFullYear();
	var month=today.getMonth()+1;
	var day=today.getDate();
	var hour=today.getHours();
	var minute=today.getMinutes();
	var second=today.getSeconds();
	year=checkTime(year);
	month=checkTime(month);
	day=checkTime(day);
	hour=checkTime(hour);
	minute=checkTime(minute);
	second=checkTime(second);
	 var dateStr= year+"年"+month+"月"+day+"日"+ hour+":"+minute+":"+second;
	 dateStr = img(dateStr);
	 tag.innerHTML = dateStr;
	 t=setTimeout(date,500);
	 countdown();
}
function checkTime(i){
		if(i<10)
			{i="0"+i;}
			return i;
}
function img(dateStr)  {
	var n = "\0";
	for(a=0;a<dateStr.length;a++){
		switch(dateStr[a]){
			 case "0": n+= "<img src=\"images/0.png\">";break;
			 case "1": n+= "<img src=\"images/1.png\">";break;
			 case "2": n+= "<img src=\"images/2.png\">";break;
			 case "3": n+= "<img src=\"images/3.png\">";break;
			 case "4": n+= "<img src=\"images/4.png\">";break;
			 case "5": n+= "<img src=\"images/5.png\">";break;
			 case "6": n+= "<img src=\"images/6.png\">";break;
			 case "7": n+= "<img src=\"images/7.png\">";break;
			 case "8": n+= "<img src=\"images/8.png\">";break;
			 case "9": n+= "<img src=\"images/9.png\">";break;
			 case"年": n+= "<img src=\"images/year.png\">";break;
			 case"月": n+= "<img src=\"images/month.png\">";break;
			 case"日": n+= "<img src=\"images/day.png\">";break;
			 case":": n+= "<img src=\"images/sign.png\">";break;
		  	 }
}return n;
}
function countdown(){
	var tag = document.getElementById("countdown");
	var current=new Date().getTime();
	var endTime = new Date("2015,7,20 11:55:00");
	var surplus = endTime-current;
	var surplusDay= parseInt(surplus/(1000*60*60*24));
	var allHour= parseInt (surplus/(1000*60*60));
	var surplusHour=allHour-surplusDay*24;
	var allMinute=parseInt (surplus/(1000*60));
	var surplusMinute=allMinute-(allHour*60);
	var allSecond=parseInt (surplus/1000);
	var surplusSecond=allSecond-(allMinute*60);
	surplusDay=checkTime(surplusDay);
	surplusHour=checkTime(surplusHour);
	surplusMinute=checkTime(surplusMinute);
	surplusSecond=checkTime(surplusSecond);
	var dateStr= surplusDay+"日"+ surplusHour+":"+surplusMinute+":"+surplusSecond;
	dateStr = img(dateStr);
	tag.innerHTML = dateStr;
function checkTime(i){
		if(i<10)
			{i="0"+i;}
			return i;
}
function img(dateStr)  {
	var n = "\0";
	for(a=0;a<dateStr.length;a++){
		switch(dateStr[a]){
			 case "0": n+= "<img src=\"images/0.png\">";break;
			 case "1": n+= "<img src=\"images/1.png\">";break;
			 case "2": n+= "<img src=\"images/2.png\">";break;
			 case "3": n+= "<img src=\"images/3.png\">";break;
			 case "4": n+= "<img src=\"images/4.png\">";break;
			 case "5": n+= "<img src=\"images/5.png\">";break;
			 case "6": n+= "<img src=\"images/6.png\">";break;
			 case "7": n+= "<img src=\"images/7.png\">";break;
			 case "8": n+= "<img src=\"images/8.png\">";break;
			 case "9": n+= "<img src=\"images/9.png\">";break;
			 case"年": n+= "<img src=\"images/year.png\">";break;
			 case"月": n+= "<img src=\"images/month.png\">";break;
			 case"日": n+= "<img src=\"images/day.png\">";break;
			 case":": n+= "<img src=\"images/sign.png\">";break;
		  	 }
}return n;
}
}