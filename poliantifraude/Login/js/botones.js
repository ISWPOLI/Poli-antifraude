function redireccion(){
	var exit;
	exit = document.getElementById("exit").value;
	document.location.href="principal.html";
}

	function abrir () {
		var popup = document.getElementById("modal");
		
		popup.style.display = "block";
	}

	function cerrar () {
		var popup = document.getElementById("modal");
		
		popup.style.display = "none";
	}

