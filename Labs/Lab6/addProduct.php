<?php
    session_start();
    include "../Lab5/dbConnection.php";
    
    $conn = getDatabaseConnection("ottermart");
    
    function getCategories() {
        global $conn;
        
        $sql = "SELECT catId, catName
                FROM om_category
                ORDER BY catName";
                    
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        foreach ($records as $record) {
            echo "<option value='" . $record['catId'] . "'>" . $record['catName'] . " </option>";
        }
    }
    
    if (isset($_GET['submitProduct'])) {
        
        $productName = $_GET['productName'];
        $productDescription = $_GET['description'];
        $productImage = $_GET['productImage'];
        $productPrice = $_GET['price'];
        $catId = $_GET['catId'];
        
        $sql = "INSERT INTO om_product
                ( productName, productDescription, productImage, price, catId)
                VALUES ( :productName, :productDescription, :productImage, :price, :catId)";
                
        $np = array(); // name parameters array
        $np[':productName'] = $productName;
        $np[':productDescription'] = $productDescription;
        $np[':productImage'] = $productImage;
        $np[':price'] = $productPrice;
        $np[':catId'] = $catId;
        
        $stmt = $conn->prepare($sql);
        $stmt->execute($np);
        
        header('Location:admin.php');
    }

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Add Product</title>
    </head>
    <body>
        <form>
            <strong>Product name</strong> <input type="text" class="form-control" name="productName"> <br /><br />
            <strong>Description</strong> <textarea name="description" class="form-control" cols=50 rows = 4></textarea> <br /><br />
            <strong>Price</strong> <input type="text" class="form-control" name="price" > <br /><br />
            <strong>Category</strong> <select name="catId" class="form-control">
                <option value="">Select One</option>
                <?php getCategories(); ?>
            </select> <br /><br />
            <strong>Set Image Url</strong> <input type="text" name="productImage" class="form-control"> <br /><br />
            <input type="submit" name="submitProduct" class='btn btn-primary' value="Add Product"> <br /><br />
        </form>

    </body>
</html>