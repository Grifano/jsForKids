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
]
var family = merege.concat(children, grandMothers, grandFathers);

// var jsWorkspace = names[names.length - 1];
var jsWorkspace = family.join(" ");

// console.log(names);

var jsOut = document.getElementById("js-out");
jsOut.innerHTML = jsWorkspace;