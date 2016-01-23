var item = document.querySelectorAll("li");

for(i = 0; i < item.length ; i++){
	item[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	});
	item[i].addEventListener("mouseout" , function(){
		this.classList.remove("selected");
	});
	item[i].addEventListener("click" , function(){
		this.classList.add("done");
	});
}


// function hovering(){
// 	this.style.color = "green";
// }
// function outt(){
// 	this.style.color = "black";
// }