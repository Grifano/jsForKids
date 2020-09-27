var car = {
	model: "ford",
	color: "silver",
	type: "hatchback",
	places: 5
};
car["status"] = "free";
var cat = {};
cat.name = "Eva";
cat.color = "Tiger";
cat.weight = 5;
var flat = {
	floors: 5,
	chambers: 2,
	bathroom: true,
	people: 4
};
var house = [
	{
		model: "standart",
		flors: 2,
		chambers: 4,
		garage: true,
	},
	{
		model: "Big Star",
		flors: 5,
		chambers: 12,
		garage: true,
		basen: true,
		pets: cat,
	}
];

// *******************************************
var jsWorkspace = house[1]["pets"];
console.log(house[1].pets);
var jsOut = document.getElementById("js-out");
jsOut.innerHTML = jsWorkspace;