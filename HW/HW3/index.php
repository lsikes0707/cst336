<!DOCTYPE html>
<html>
<body>

<h2>HTML Forms</h2>

<form action="action_page.php" target="_self">
     <label for="name">Name:</label><br />
         <input id="name" type="text" placeholder="Enter Name" name="name" value = "">
  <br />
  
    Last name:<br />
    <input type="text" name="lastname" value="">
    <br><br>
  
    <hr>
        <label for="Question1">1) How do you say 'Hello'?</label>
        <span class="error">* </span>
    <br /><br />
    
    <input type="submit" value="Submit">
</form> 

<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>

</body>
</html>
