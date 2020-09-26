var merege = [
	"Serhii",
	"Katrusia"
];
var children = [
	"Irynka",
	"Polinka"
];
var grandMothers = [
	"Liudmyla",
	"Nadia"
];
var grandFathers = [
	"Viktor",
	"Grygorij"
];

// Merge all to one string
var family = merege.concat(children, grandMothers, grandFathers);
// Out to screen
var jsWorkspace = family[Math.floor(Math.random() * 10)];
// *******************************************
// console.log(names);
var jsOut = document.getElementById("js-out");
jsOut.innerHTML = jsWorkspace;