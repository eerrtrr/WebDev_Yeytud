// ---- global vars ----
var user_input  = document.querySelector("user-input" );
var user_output = document.querySelector("user-output");






// ---- functions ----
function readFromFile(fileName){
	var file = new XMLHttpRequest();
	file.open("GET", file, false);
	rawFile.onreadystatechange = function(){
		if( file.readyState === 4 && (file.status === 200 || file.status == 0) )
			return file.responseText;
	}
	file.send(null);
}

document.onload = function(){
	user_output.innerHTML = readFromFile("fra_yey.dico");
}