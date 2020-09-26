var randomBodyParts = [
	"Face",
	"Hands",
	"Nouse",
	"Legs",
	"Fingers",
];
var randomAdjectives = [
	"Stoundy",
	"Repulsive",
	"Terrible"
];
var randomWords = [
	"Dog",
	"Rat",
	"Snake",
	"Monkey",
	"Pidgin"
];
// Select random part of body
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// Select random Adjective
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Select random Word
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// To combine it all in place
var randomInsult = "You have a " + randomBodyPart + " - like a " + randomAdjective + " " + randomWord + " :)";
// Get first letter to uppercase
var randomInsultFirstLetter = randomInsult[0].toLocaleUpperCase();
var randomInsultOut = randomInsultFirstLetter + randomInsult.slice(1, randomInsult.length);
// *******************************************
var jsWorkspace = randomInsultOut;
console.log(randomInsultFirstLetter);
var jsOut = document.getElementById("js-out");
jsOut.innerHTML = jsWorkspace;