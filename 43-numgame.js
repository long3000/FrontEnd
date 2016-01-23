var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var reset = document.getElementById("rest");
var winningscore = 5;
var p1score = 0;
var p2score = 0;
var p1d = document.querySelector("#score1");
var p2d = document.querySelector("#score2");
var winning = false;


player1.addEventListener("click", function(){
	if(!winning){
		p1score++;
		p1d.textContent = p1score;
	} else {
		alert("Game Over!");
		p1d.classList.add("winner");

	}
});

player2.addEventListener("click", function(){
if(p2score!=winningscore){
		p2score++;
		p2d.textContent = p2score;
	} else {
		alert("Game Over!");
		p2d.classList.add("winner");
	
	}
});

reset.addEventListener("click", restGame());

function restGame(){
	p1score = 0;
	p2score = 0;
	p1d.textContent = 0;
	p2d.textContent = 0;
	p1d.classList.remove("winner");
	p1d.classList.remove("winner");
}