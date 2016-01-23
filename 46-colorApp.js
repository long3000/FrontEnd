var colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(255, 0, 255)",
]


var square = document.querySelectorAll(".sq");

var pickColor = colors[3];
var displayText = document.getElementById("pick");


displayText.textContent = pickColor;

for(i = 0 ; i < square.length ; i++) {
	//Add initial colors to the squares
	square[i].style.background = colors[i];
	//Listening event for squares
	square[i].addEventListener("click",function(){
		//grab color
		var clickedColor = this.style.background;
		//compare the color
		if(clickedColor === pickColor){
			alert("Correct");
		//square[i].style.background = #232323;
		} else {
			alert("Wrong");
		//this.style.background = #232323;
		}
	});
}
