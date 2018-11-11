<?php
//Check whether the form has been submitted
if (array_key_exists('check_submit', $_POST)) {
   //Converts the new line characters (\n) in the text area into HTML line breaks (the <br /> tag)
   $_POST['comments'] = nl2br($_POST['comments']); 
   //Check whether a $_GET['Languages'] is set
   if ( isset($_POST['likes']) ) { 
     $_POST['likes'] = implode(', ', $_POST['likes']); //Converts an array into a single string
   }

   //Let's now print out the received values in the browser
   echo "Your name: {$_POST['name']}<br />";
   echo "Your business: {$_POST['state']}<br />";
   echo "Your maturity: {$_POST['maturity']}<br /><br />";
   echo "You like:<br />{$_POST['likes']}<br /><br />";
   echo "You enjoy:<br />{$_POST['comments']},br /><br />";
} else {
    echo "You need to fill out the form to see a change.";
}
?>