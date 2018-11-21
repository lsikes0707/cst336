<?php

    session_start();
    
    include "../Lab5/dbConnection.php";
    
    $conn = getDatabaseConnection("ottermart");
    
    if(!isset($_SESSION['adminName'])) {
        
        header("Location:login.php");
    }
    
    function displayAllProducts() {
        global $conn;
        
        $sql = "SELECT * 
                FROM om_product
                ORDER BY productId";
                
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        return $records;
    }

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Admin Main Page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        
        <script>
            function confirmDelete() {
                return confirm("Are you sure you want to delete the product?");
            }
        </script>
    </head>
    <body>
        <h1>Admin Main Page</h1>
        
        <h3>Welcome <?=$_SESSION['adminName']?>!</h3><br /><br />
        
        <form action="addProduct.php">
            <input type="submit" class='btn btn=secondary' id="beginning" name="addProduct" value="Add Product" /> <br /><br />
        </form>
        
        <form action="logout.php">
            <input type="submit" class='btn btn-secondary' id="beginning" value="Logout"/>
        </form>
        
        <?php
            $records = displayAllProducts();
            
            echo "<table class='table table-hover'>";
            echo "<thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Update</th>
                        <th scope='col'>Remove</th>
                    </tr>
                    </thead>";
            echo "<tbody>";
            foreach($records as $record) {
                
                echo "<tr>";
                echo "<td>" . $record['productId'] . "</td>";
                echo "<td>" . $record['productName'] . "</td>";
                echo "<td>" . $record['productDescription'] . "</td>";
                echo "<td>" . $record['price'] . "</td>";
                echo "<td><a class='btn btn-primary' href='updateProduct.php?productId=" . $records['productId'] . "'>Update</a></td>";
                
                echo "<form action='deleteProduct.php' onsubmit='return confirmDelete()'>";
                echo "<input type='hidden' name='productId' value= '" . $record['productId'] . "'/>";
                echo "<td><input type='submit' class='btn btn-danger' value='Remove'></td>";
            }
            
            echo "</tbody>";
            echo "</table>";
        
        ?>
    </body>
</html>