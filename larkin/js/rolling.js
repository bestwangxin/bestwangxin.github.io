var i;
function change(a)
{
	x=document.getElementById("banner_img");
	i=a;
	x.src="images/banner"+i+".jpg";
	y=document.getElementById("banner_dot_1");
	if(i==4){
		y.src="images/dot2.png";
}	else{
		y.src="images/dot1.png";
}
	y=document.getElementById("banner_dot_2");
	if(i==2){
		y.src="images/dot2.png";
}
	else {
		y.src="images/dot1.png";
}
	y=document.getElementById("banner_dot_3");
	if(i==3){
		y.src="images/dot2.png";
}	else {
		y.src="images/dot1.png";
}
}
