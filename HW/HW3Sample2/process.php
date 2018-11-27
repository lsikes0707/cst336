<?php
//Check whether the form has been submitted
if (array_key_exists('check_submit', $_POST)) {
   //Converts the new line characters (\n) in the text area into HTML line breaks (the <br /> tag)
   $_POST['Comments'] = nl2br($_POST['Comments']); 
   //Check whether a $_GET['Languages'] is set
   if ( isset($_POST['Colors']) ) { 
     $_POST['Colors'] = implode(', ', $_POST['Colors']); //Converts an array into a single string
   }

   //Let's now print out the received values in the browser
   echo "Your name: {$_POST['Name']}<br />";
   echo "Your password: {$_POST['Password']}<br />";
   echo "Your favourite season: {$_POST['Seasons']}<br /><br />";
   echo "Your comments:<br />{$_POST['Comments']}<br /><br />";
   echo "You are from: {$_POST['Country']}<br />";
   echo "Colors you chose: {$_POST['Colors']}<br />";
} else {
    echo "You can't see this page without submitting the form.";
}
?>