<?php

function displayCart() {
    // if there are islands in the Session, display them
    if(isset($_SESSION['cart']) && count($_SESSION['cart'])>0) {
        echo "<table class='table'>";
        foreach($_SESSION['cart'] as $item) {
            $productId = $item['productId'];
            $productName = $item['productName'];
            $price = $item['price'];
            $productImage = $item['productImage'];
            
            // display data as table row
            echo "<tr>";
            echo "<td><img src='img/$productImage' width='200'></td>";
            echo "<td><h4><a href='#' class='productLink' productId=$productId>$productName</a></h4></td>";
            echo "<td><h4>$price</h4></td>";
            
            // updating form for remove button
            echo "<form method='post'>";
            echo "<input type='hidden' name='removeId' value='$productId'>";
            echo "<td><button class='btn btn-danger'>Remove</button></td>";
            echo "</form>";
            
            echo "</tr>";
        }
        echo "</table>";
        echo "<!-- Cart Items -->";
        echo "<hr><form method='post'><input type='hidden' name='clearCart' value='true'><button class='btn btn-outline-danger'>Clear Cart</button></form><br />";
        echo "<form method='post' action='summary.php'><input type='hidden' name='summary' value='true'><button class='btn btn-outline-warning'>Check out</button></form>";   
                
    } else {
        echo "<h1>Your cart is empty</h1><br />"; 
        echo "<h2>Please add some products</h2>"; 
        echo "<a href='catalog.php' class='btn btn-primary btn-lg active' role='button' aria-pressed='true'>Go to Catalog</a>"; 
        echo "</div>";
        echo "</body>";
        echo "</html>"; 
        die; 

        
    }
}

function totalCart() {
    //if there are island in session add total
    $price=0;
    
    $taxrate = .0875; //If Change tax here but also <h3> tag in summary page 
    
    if(isset($_SESSION['cart'])) {
        foreach($_SESSION['cart'] as $item) {
            $price += $item['price'];
        }
    }
    $tax = $price * $taxrate;
    $total = $tax+ $price;
    echo $total;
}

function displayCartCount() {
    echo count($_SESSION['cart']);
}

?>
