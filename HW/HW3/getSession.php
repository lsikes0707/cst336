<?php
    session_start();
    if ( isset( $_SESSION["user_firstName"] ) ) { //confirming that the session exists
        echo "I still recall your name… You are " .  $_SESSION["user_firstName"];
    } else {
        echo  "I already forgot your name… probably the session expired!";
    }

?>