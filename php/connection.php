<?php

if(isset($_POST['login'])){
	switch($_POST['username']){
		case "eerrtrr":
			if($_POST["password"] == "axel_password")
				header("Location: dictionnary_editor.html");
		break;
		case "iasebsil83":
			if($_POST["password"] == "984236571")
				header("Location: dictionnary_editor.html");
			break;
		case "Terminator9896":
			if($_POST["password"] == "fred_password")
				header("Location: dictionnary_editor.html");
		break;
		default:
			echo "Invalid username or password";
	}
}

?>