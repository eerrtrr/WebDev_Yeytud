function login(){
	//get elements
	var input_un  = document.querySelector("#input-un");
	var input_pw  = document.querySelector("#input-pw");
	var output    = document.querySelector("#output"  );

	//try login
	output.innerHTML = "";
	switch(input_un.value){
		case "eerrtrr":
			if(input_pw.value == "axel-pw"){
				window.location.replace("dictionnary_editor.html");
				return;
			}
		break;
		case "iasebsil83":
			if(input_pw.value == "984236571"){
				window.location.replace("dictionnary_editor.html");
				return;
			}
		break;
		case "terminator9896":
			if(input_pw.value == "fred-pw"){
				window.location.replace("dictionnary_editor.html");
				return;
			}
		break;
	}
	output.innerHTML = "Invalid username or password";
}

