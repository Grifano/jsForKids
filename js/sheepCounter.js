var jsOut = document.getElementById("js-out");

var sheepCount = 0;
var jsWorkspace = 0;

while (sheepCount < 10) {
	jsWorkspace = "Sheep " + sheepCount + "!";
	sheepCount++;
};
jsOut.innerHTML = jsWorkspace;

// *******************************************
// console.log(name);