<?php
$usuario=$_POST['usuario'];
$clave=$_POST['clave'];

//conexion a BD

$conexion=mysqli_connect("localhost", "sebastian", "", "ProyectoInfSoft2");
$consulta="SELECT * FROM usuarios WHERE usuario='$usuario' and clave='$clave'";
$resultado=mysqli_query($conexion, $consulta);
$filas=mysqli_num_rows($resultado);

if ($filas>0) {
    header("location:principal.html");
} else {
    echo "Error de Autenticación";
}
mysqli_free_result($resultado);
mysqli_close($conexion);
