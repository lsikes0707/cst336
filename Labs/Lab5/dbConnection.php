<?php

function getDatabaseConnection($dbname = 'ottermart'){
    
    //C9 db info
    $host = "localhost";
    //$dbname = 'tcp';
    $username = 'root';
    $password = '';
    
    // When connecting from heroku
    if (strpos($_SERVER['HTTP_HOST'], 'herokuapp') != false) {
        $url = parse_url(getenv("CLEARDB_DATABASE_URL"));
        $host = $url["host"];
        $dbname = substr($url["path"], 1);
        $username = $url["user"];
        $password = $url["pass"];
    }
    
    //creates db connection
    $dbConn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    // display errors when accessing tables
    $dbConn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    return $dbConn;
}

?>