var laborer_array = ["Jose Cuervo","Mr Potato","Miso Horny","Ching Chong","Mexican Rash",
	"Jose Cuervo","Mr Potato","Miso Horny","Ching Chong","Mexican Rash",
	"Jose Cuervo","Mr Potato","Miso Horny","Ching Chong","Mexican Rash",
	"Jose Cuervo","Mr Potato","Miso Horny","Ching Chong","Mexican Rash",
	"Jose Cuervo","Mr Potato","Miso Horny","Ching Chong","Mexican Rash",
	"Jose Cuervo","Mr Potato","Miso Horny","Ching Chong","Mexican Rash",
	"Jose Cuervo","Mr Potato","Miso Horny","Ching Chong","Mexican Rash",
	"Jose Cuervo","Mr Potato","Miso Horny","Ching Chong","Mexican Rash",
	"Jose Cuervo","Mr Potato","Miso Horny","Ching Chong","Mexican Rash",
	"Jose Cuervo","Mr Potato","Miso Horny","Ching Chong","Mexican Rash",
	"Jose Cuervo","Mr Potato","Miso Horny","Ching Chong","Mexican Rash"
]

console.log(laborer_array.length);

// n=1
for (i=0; i < laborer_array.length; i++) {
	$("#card-right")
		// console.log(laborer_array[i]);
		// .append("<button> Play </button>" + n + ". " + data[i].title + "; " + data[i].permalink_url + "</br></br>");
		.append($("<div class='card-panel blue-grey col s12 m3 l3 hoverable laborer-margin'> <p>" + 
			"<h5>" + laborer_array[i] + "</h3>" + 
			"</p> <div class='card-action'> <a href='#'> Profile </a> </div> </div>"));
	// n+=1;
	console.log(laborer_array[i]);
}