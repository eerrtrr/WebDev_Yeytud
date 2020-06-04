// ---- element accessors ----
var input_fra  = document.querySelector("#input-fra" );
var input_yey  = document.querySelector("#input-yey" );
var output_fra = document.querySelector("#output-fra");
var output_yey = document.querySelector("#output-yey");

var yey = [
	"good morning",
	"hello",
	"eat",
	"drink",
	"sleep",
	"paper",
	"leaf",
	"sheet"
];
var fra = [
	"salut",
	"boire",
	"manger",
	"dormir",
	"bonjour",
	"bouffer",
	"grailler",
	"feuille",
	"papier"
];
var ref = [
	[0,1], //[fra,yey]
	[1,3],
	[2,2],
	[3,4],
	[4,0],
	[5,2],
	[6,2],
	[7,5],
	[7,6],
	[7,7],
	[8,5],
	[8,7]
];






// ---- modification detection ----
function checkModif(){
	if(input_fra.value != "")
		searchFromFra();
	if(input_yey.value != "")
		searchFromYey();
}
setInterval(checkModif, 100);






// ---- functions ----
function searchFromFra(){
	output_yey.innerHTML = "";
	for(var f=0; f < fra.length; f++){

		//find a corresponding french word
		if(f == input_fra.value){
			
			//search for all references in yeytud
			for(var r in ref){
				if(r[0] == f)
					output_yey.innerHTML += yey[ r[1] ] + "<br>";
			}
		}
	}
	output_yey.innerHTML = "No result found";
}

function searchFromYey(){
	output_fra.innerHTML = "";
	for(var y=0; y < yey.length; y++){

		//find a corresponding yeytud word
		if(y == input_yey.value){

			//search for all references in french
			for(var r in ref){
				if(r[1] == y)
					output_fra.innerHTML += fra[ r[0] ] + "<br>";
			}
		}
	}
	output_fra.innerHTML = "Aucun résultat trouvé";
}
