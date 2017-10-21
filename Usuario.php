<?php

class Usuario{

//atributos
  private $id;
  private $edad;
  private $contrasena; private $contrasena_2;
  private $email;
  private $nacimiento;
  private $genero;

//constructor
 function Usuario(){

   if (isset($_POST["enviando"])){ //comprueba si hemos pulsado el boton enviar
     $this->id = $_POST["nombre_usuario"]; // $post es una variable superglobal de psp (array)
     $this->edad=$_POST["edad_usuario"];
     $this->contrasena=$_POST["contrasena_usuario"];
     $this->contrasena_2=$_POST["contrasena_usuario_repetir"];
     $this->email=$_POST["email_usuario"];
     $this->nacimiento=$_POST["fecha_nacimiento"];
     $this->genero=$_POST["genero_usuario"];

     /*con las dos lineas de codigo anteriores lo que estamos haciendo es
      *asignarle a una variable local de php lo que el usuario introdujo
      *en el nombre_usuario, que es almacenado automaticamente en el
      *$POST_*/
  }
}

//metodos
function ImprimirDatosUsuario(){
  echo "<br><br>Lo que se registro:";
  echo "<br> Nombre del usuario: ". $this->id."<br>";
  echo "<br> Edad del usuario: ". $this->edad."<br>";
  echo "<br> Constraseña del usuario: ".$this->contrasena."<br>";
  echo "<br> Contrasena del usuario (intento 2): ".$this->contrasena_2."<br>";
  echo "<br> Email: ".$this->email."<br>";
  echo "<br> Nacimiento: ".$this->nacimiento."<br>";
  echo "<br> Genero del usuario: ".$this->genero."<br>";
}



        function getnombre(){
        	return $this->nombre;
        }
        function getedad(){
        	return $this->edad;
        }
        function getcontrasena(){
        	return $this->contrasena;
        }
        function getcontrasena_2(){
        	return $this->contrasena_2;
        }
        function getemail(){
        	return $this->email;
        }
        function getnacimiento(){
        	return $this->nacimiento;
        }
        function getgenero(){
        	return $this->genero;
        }



}

?>
