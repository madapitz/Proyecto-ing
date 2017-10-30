<!--Formulario de prueba-->
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Done!</title>

<!--fuentes de google-->
<link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"/> <!--font-family: 'Quicksand', sans-serif;-->
<link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet"/> <!--font-family: 'Space Mono', monospace;-->
<link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet"/> <!--font-family: 'Megrim', cursive;-->
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/> <!--font-family: 'Roboto', sans-serif;-->
<link rel ="stylesheet" href="estilos.css"/>
<link rel="stylesheet" href="estilos2.css"/>
<!--aqui hay dos hojas, una para las pruebas y otra que se puede usar-->
<link rel="stylesheet" href="estilos3.css"/>
<style type="text/css">
  .boton{
   -webkit-border-radius: 13;
  -moz-border-radius: 13;
  border-radius: 13px;
  font-family: Arial;
  color: #1f0b1f;
  height: 100px;
  font-size: 150%;
  background: #5d96ab;
  padding: 21px 20px 16px 20px;
  text-decoration: none;
  display:block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  position: relative;
  top: 450px;
  white-space:nowrap;
}
input{
    font-family: 'Roboto', sans-serif;
    width : 90%;
    color: #626262;
    background-color: #FFF;
    border: none;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 15px;
    border-radius: 4px;

    padding-left: 7px;
    padding-right: 7px;
    padding-top: 10px;
    padding-bottom: 10px;

    -webkit-box-sizing: border-box; /* Para google chrome */
    -moz-box-sizing: border-box; /* para mozilla firefox */
    -ms-box-sizing: border-box; /* internet explorer, edge */
    -o-box-sizing: border-box; /* opera */
    box-sizing: border-box; /* otros */
     display:block;
     margin-left: auto;
     margin-right: auto;
    position: relative;
    top: 400px;
 }

</style>

</head>

<body>

<!--<h1>Done!</h1>--> <!--titulo-->

<!--<h2>Inicia sesi&oacuten</h2>-->
    <img class="logo" src="Logo.jpg">

<!---inicia el formulario-->

<!--<form method="post" name="datos_usuario" id="datos_usuario" autocomplete="off">-->
  <form  action="Inicio.php" method="POST">
  <!--<table align = "center">-->
    <tr>
      <td id ="identificadorentrada"></td>
      <td><label for="nombre_usuario"></label>
      <input type="text" name="nombre_usuario" id="nombre_usuario"  placeholder="Usuario"></td>
    </tr>
    <tr>
      <td id ="identificadorentrada"></td>
      <td><label for="contrasena_usuario"></label>
      <input type="password" name="contrasena_usuario" id="constrasena_usuario"  placeholder="Constraseña"></td>
    </tr>
    <tr>
			<td>&nbsp;</td> <!--&nbsp crea un espacio horizontal-->
      <td>&nbsp;</td> <!--&nbsp crea un espacio horizontal-->
    </tr>
  <input name="enviando" type="submit" class="boton" value="Entrar"/> <br>

</form>
<!---termina el formulario de inicio-->

<h3>Done</h3>

<?php
 include ("Usuario.php");
 include ("Validador.php");
 $validador = new Validador("usuarios.json");
 if (isset($_POST["enviando"])) {$nombre=$_POST["nombre_usuario"];
 if ($validador->validarinicio($nombre)){
   echo "<p class='validado'> Puedes entrar </p>";
 }
 else echo "<p class='no_validado'> No puedes entrar </p>";
}
?>

</body>

</html>
