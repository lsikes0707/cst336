<?php

    if ( isset($_GET['name']) ) {
	echo "Welcome " . $_GET['name'];
    } else {
        echo "At least there it is reporting."
    }

    //echo  "Welcome  " .  $_POST["name"] . " You had this feedback: "  . $_POST["feedback"] ;

?>