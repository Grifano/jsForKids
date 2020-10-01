var jsOut = document.getElementById("js-out");

var yourName = "Grif";
var fatherName = "Vikto1r";
var motherName = "Liudmyla";
var jsWorkspace = [
	"Hello! Unknower",
	"Hello! Friend",
	"Hello! Viktor",
	"Hello! Liudmyla"
];
if (yourName === "Grif") {
	jsOut.innerHTML = jsWorkspace[1];
} else if (fatherName === "Viktor") {
	jsOut.innerHTML = jsWorkspace[2];
} else if (motherName === "Liudmyla") {
	jsOut.innerHTML = jsWorkspace[3];
} else {
	jsOut.innerHTML = jsWorkspace[0]
};
// *******************************************
// console.log(name);
