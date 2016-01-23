var link = document.querySelector("a");
link.getAttribute("href"); //www.google.com
link.setAttribute("href", "http://bing.com");

var button = document.querySelector("button");
var para = document.querySelector("p");

button.addEventListener("click", function(){
	// para.setAttribute("p", "SOmeone has clicked me");
	para.textContent = "SOMEONE HAS CLICKED ME!";
});