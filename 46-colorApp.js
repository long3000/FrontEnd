var colors = [];
var numSquares 6;
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor;
var resetBtn = document.querySelector("#new");
var easyBtn - document.querySelector("#easyBtn");
var hardBtn - document.querySelector("#hardBtn");
var squares = document.querySelectorAll(".sq");
var messageDisplay = document.querySelector("#messageDisplay");
var modeBtn = document.querySelectorAll(".mode");

//Initialize all prep functions
init();
function init() {
	initSquares();
	reset();
}


// function setupMode() {
// 	for(var i = 0; i < modeBtn.length; i++) {

// 	}
// }

function initSquares() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			//match the color of the clicked color to a variable
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor);
			} else {
				messageDisplay.textContent = "Try again.";
				this.style.background = "#232323";
			}
		});
	}

}


//Push random colors into color array
function randomColorGenerator(num) {
	var colorArr = []
	for(i = 0; i < num; i++) {
		colorArr.push(randomColors())
	}
	return colorArr;
}

function changeColors (color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function reset() {
colors = randomColorGenerator(numSquares);
//Set pickedColor to pickColor function
pickedColor = pickColor();
//Let the RGB value displayed out using colorDisplay
colorDisplay.textContent = pickedColor;
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