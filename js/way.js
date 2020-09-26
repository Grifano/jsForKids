var landMarks = [];
landMarks.push("Shop");
landMarks.push("Cinema");
landMarks.push("Trees");
landMarks.push("Gym");
landMarks.push("Home");
landMarks.pop();
landMarks.pop();
landMarks.pop();
landMarks.pop();

landMarks = landMarks.join(" <= ");

var jsWorkspace = landMarks;

var jsOut = document.getElementById("js-out");
jsOut.innerHTML = jsWorkspace;