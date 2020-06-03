// ---- init ----
var user_input  = document.querySelector("user-input" );
var user_output = document.querySelector("user-output");






// ---- functions ----
function searchFromFra(){
	user_output.innerHTML = "";
	for(var f=0; f < fra.length; f++){

		//find a corresponding french word
		if(f == user_input.value){
			
			//search for all references in yeytud
			for(var r in ref){
				if(r[0] == f)
					user_output.innerHTML += yey[ r[1] ] + "<br>";
			}
		}
	}
	user_output.innerHTML = "Pas de résultat trouvé";
}

function searchFromYey(){
	user_output.innerHTML = "";
	for(var y=0; y < yey.length; y++){

		//find a corresponding yeytud word
		if(y == user_input.value){

			//search for all references in french
			for(var r in ref){
				if(r[1] == y)
					user_output.innerHTML += fra[ r[0] ] + "<br>";
			}
		}
	}
	user_output.innerHTML = "Pas de résultat trouvé";
}
