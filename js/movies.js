var movies = {
	"Teleport": {
		realise: 2003,
		actors: ["Den Braun", "Antony Hopkins"],
		format: "DVD",
	},
	"Harry Potter": {
		realise: 2001,
		actors: ["Daniel Redklif", "Stiven Sigal"],
		format: "BlueRay",
	},
};
movies["Rock"] = {
	realise: 2010,
	actors: ["Miranda Bum", "Jerry Hopkins"],
	format: "DVD",
}
var cars = {
	realise: 2010,
	actors: ["Red car", "Blue car"],
	format: "VHS",
};
movies["Cars"] = cars;
var aboutMovi = movies["Cars"];
// *************************************
console.log(Object.keys(movies));