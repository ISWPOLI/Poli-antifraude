<?php
//capturar los datos 
$usuario=$_POST['usuario'];
$clave=$_POST['clave'];
$email=$_POST['email'];

//conexion a BD

$conexion=mysqli_connect("localhost", "sebastian", "", "ProyectoInfSoft2");

//obtiene la longitud de un string
$req = (strlen($usuario)*strlen($clave)*strlen($email));

//encriptar pass
//$contraseña = md5($clave);

//insertar los datos
$insertar="INSERT INTO usuarios VALUES ('','$usuario','$clave','$email')";
$resultado=mysqli_query($conexion, $insertar);

echo '<h1>Registro Completo</h1>';

mysqli_free_result($resultado);
mysqli_close($conexion);
