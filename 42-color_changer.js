var isOrange = false;
document.getElementById("but1").addEventListener("click",function(){
	if(isOrange){
		document.body.style.background = "white";
		isOrange = false;
	} else {
		document.body.style.background = "orange";
		isOrange = true;
	}
	
});