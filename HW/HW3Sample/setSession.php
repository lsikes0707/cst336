<?php
    session_start();

    if ( isset( $_GET["firstName"] ) ) { //confirming that the value was passed
  
        $_SESSION["user_firstName"] = $_GET["firstName"]; //you can use any variable name

    }

?>