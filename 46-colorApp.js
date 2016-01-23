var colors = [];
var numSquares = 6;
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor;
var resetBtn = document.querySelector("#new");
var squares = document.querySelectorAll(".sq");

//Initialize all prep functions
init();

function init() {
	reset();
}


//Push random colors into color array
function randomColorGenerator(num) {
	var colorArr = []
	for(i = 0; i < num; i++) {
		colorArr.push(randomColors())
	}
	return colorArr;
}

function reset() {
colors = randomColorGenerator(numSquares);
for(i = 0 ; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	}
}

function pickColor() {
	var random  = Math.floor(Math.random()* squares.length)
	return colors[random];
}

//Generate random color
function randomColors() {
	//random RED, GREEN, BLUE using 255 scale
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	//Return correct RGB format
	return "rgb("+r+", "+g+", "+b+")";
}