var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends:["James","Kevin"];
}


//NAMESPACING
var dogSpace = {};
dogSpace.speak = function() {
    return "WooF";
    }

var catSpace = {}; 
catSpace.speak = function() {
        return "MOEWW";
    }

