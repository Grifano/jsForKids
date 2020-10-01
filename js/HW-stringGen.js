var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var index = Math.floor(Math.random() * alphabet.length);
var phrase = "";
while (phrase.length < 6) {
	phrase += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(phrase);