<?php
    include 'functions.php';
    
    // Start the session in any php file where sessions will be used
    session_start();
    
    // Create an array in the Session to hold our cart items
    if(!isset($_SESSION['cart'])) {
        $_SESSION['cart'] = array();
    }
    
    // Check to see if the form is submitted
    if (isset($_GET['query'])) {
        // Get access to our APT function
        include 'wmapi.php';
        $items = getProducts($_GET['query']);
    }
    
    // Check to see if an item has been added to the cart
    if(isset($_POST['itemName'])) {
        // Create associative array for item properties
        $newItem = array();
        $newItem['name'] = $_POST['itemName'];
        $newItem['price'] = $_POST['itemPrice'];
        $newItem['img'] = $_POST['itemImg'];
        $newItem['id'] = $_POST['itemId'];
        
        // Check to see if other items with this id are in th array
        // If they are, this item isn't new. Only update quantity
        // Must be passed by reference so each item can be updated!
        foreach ($_SESSION['cart'] as $item) {
            if($newItem['id'] == $item['id']) {
                $item['quantity'] += 1;
                $found = true;
            }
        }
        
        // else  add it to array
        if ($found != true) {
            $newItem['quantity'] = 1;
            array_push($_SESSION['cart'], $newItem);
        }
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <title>Products Page</title>
    </head>
    <body>
    <div class='container'>
        <div class='text-center'>
            
            <!-- Bootstrap Navagation Bar -->
            <nav class='navbar navbar-default - navbar-fixed-top'>
                <div class='container-fluid'>
                    <div class='navbar-header'>
                        <a class='navbar-brand' href='#'>Shopping Land</a>
                    </div>
                    <ul class='nav navbar-nav'>
                        <li><a href='index.php'>Home</a></li>
                        <li><a href='scart.php'>Cart</a></li>
                        <span class='glypicon glyphicon-shopping-cart' aria-hidden='true'>
                        </span> Cart: <?php displayCartCount(); ?> >/a></li>
                    </ul>
                </div>
            </nav>
            <br /> <br /> <br />
            
            <!-- Search Form -->
            <form enctype="text/plain">
                <div class="form-group">
                    <label for="pName">Product Name</label>
                    <input type="text" class="form-control" name="query" id="pName" placeholder="Name">
                </div>
                <input type="submit" value="Submit" class="btn btn-default">
                <br /><br />
            </form>
            
            <!-- Display Search Results -->
            <?php displayResults();?>
        </div>
    </div>
    </body>
</html>