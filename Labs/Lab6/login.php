<?php

    session_start();

?>
<!DOCTYPE html>
<html>
    <head>
        <title>OtterMart - Admin Site</title>
    </head>
    <body>
        <h1>OtterMart - Admin Site</h1>
        
        <form method="post" action="loginProcess.php">
            Username: <input type="text" name="username" />  <br /><br />
            Password: <input type="password" name="password" /> <br /><br />
            
            <input type="submit" name="submitForm" value="Login!" />
            
            <?php
                if($_SESSION['incorrect']) {
                echo "<p class='lead' id='error' style='color:red'>";
                echo "<strong>Incorrect Username or Password!</strong></p>";
                }
            ?>
        </form>
    </body>
</html>