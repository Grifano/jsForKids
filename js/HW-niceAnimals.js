var animals = ["Cat", "Dog", "Hourse", "Lemur"];
var phrase = " - a nice animal;";
for (var i = 0; i < animals.length; i++) {
	animals[0] = animals[i] + phrase;
	console.log(animals[0]);
}