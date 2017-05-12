function iniciar() {
	var usuario, clave;
	usuario = document.getElementById("usuario").value;
	clave = document.getElementById("clave").value;

	if (usuario === "" || clave === "") {
		alert("Todos los campos son obligatorios");
		return false;
	} else if (usuario.length > 20 || clave.length > 20) {
		alert("El usuario y contraseña son muy extenso");
		return false;
	}
}
