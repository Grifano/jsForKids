var answers = [
	"Take a rest",
	"Lat's do it!",
	"Go sleep!",
	"Lat's try again",
	"Think diferent",
	"Great idea!",
	"No way!",
	"I have no choise(",
	"I have no choise(",
	"I have no choise(",
	"I have no choise(",
	"I have no choise(",
	"I have no choise(",
];

// *******************************************
jsWorkspace = answers[Math.floor(Math.random() * answers.length)];
// console.log(jsWorkspace);
var jsOut = document.getElementById("js-out");
jsOut.innerHTML = jsWorkspace;