function registrar() {
	var usuario, clave, email;
	usuario = document.getElementById("usuario").value;
	clave = document.getElementById("clave").value;
    email = document.getElementById("email").value;
    
    expresion = /\w+@\w+\.+[a-z]/;

	if (usuario === "" || clave === "" || email === "") {
		alert("Todos los campos son obligatorios");
		return false;
	} else if (usuario.length > 20 || clave.length > 20) {
		alert("Los registros ingresados son muy extensos");
		return false;
	} else if (email.length > 50) {
        alert("El correo es muy extenso");
    } else if (!expresion.test(email)) {
        alert("El correo no es valido")
        return false;
    }
}

function enviar() {
	var usuario, email;
	usuario = document.getElementById("usuario").value;
	email = document.getElementById("email").value;
    
    expresion = /\w+@\w+\.+[a-z]/;

	if (usuario === "" || email === "") {
		alert("Todos los campos son obligatorios");
		return false;
        
	} else if (usuario.length > 20 ) {
		alert("El usuario es muy extenso");
		return false;
        
	} else if (email.length > 50) {
        alert("El correo es muy extenso");
        
    } else if (!expresion.test(email)) {
        alert("El correo no es valido")
        return false;
    }
}
