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
	"sîgmöd"
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
	searchFromFra();
	searchFromYey();
}
setInterval(checkModif, 100);






// ---- functions ----
function searchFromFra(){
	var output_text = "No result found";
	for(var f=0; f < fra.length; f++){

		//find a corresponding french word
		if(fra[f] == input_fra.value){
			output_text = "";

			//search for all references in yeytud
			for(var r=0; r < ref.length; r++){
				if(ref[r][0] == f)
					output_text += yey[ ref[r][1] ] + "<br>";
			}
		}
	}
	output_fra.innerHTML = output_text;
}

function searchFromYey(){
	var output_text = "Aucun résultat trouvé";
	for(var y=0; y < yey.length; y++){

		//find a corresponding yeytud word
		if(yey[y] == input_yey.value){
			output_text = "";

			//search for all references in french
			for(var r=0; r < ref.length; r++){
				if(ref[r][1] == y)
					output_text += fra[ ref[r][0] ] + "<br>";
			}
		}
	}
	output_yey.innerHTML = output_text;
}
