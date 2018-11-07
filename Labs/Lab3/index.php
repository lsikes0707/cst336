<?php
    $backgroundImage = "img/sea.jpg";
    
    // API call goes here
    if (isset($_GET['keyword'])) {
        include 'api/pixabayAPI.php';
        $imageURLs = getImageURLs($_GET['keyword']);
        $backgroundImage = $imageURLs[array_rand($imageURLs)];
/*        print_r($imageURLs);*/
/*        echo "You searched for: " . $_GET['keyword'];*/
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Image Carousel</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
        <style>
            @import url("css.styles.css");
            body {
                background-image: url('<?=$backgroundImage ?>');
            }
        </style>
    </head>
    <body>
        <br /> <br />
        <?php
            if (!isset($imageURLs)) {
                echo "<h2> Type a keyword to display a slideshow <br /> with random images from Pixabay.com </h2>";
            } else {
                // Display Carousel Here
                for ($i=0; $i<5; $i++) {
                    do {
                        $randomIndex = rand(0, count($imageURLs));
                    }
                    while (!isset($imageURLs[$randomIndex]));
                    
                    echo "<img src='" . $imageURLs[$randomIndex] . "' width='200' >";
                    unset($imageURLs[$randomIndex]);
                }
            ?>
            <h1>I'm a regular HTML tag inside the PHP else statement!</h1>
            
            <?php
                } // End of the else statement
            ?>
            
        <!-- HTML form goes here! -->
        <form>
            <input type="text" name="keyword" placeholder="keyword">
            <!-- Post tutorial additions -->
            <div id="layout">
                <input type="radio" name="layout" value="horizontal" id="layout_hor" />
                <label for="layout_hor"> Horizontal </label><br />
                <input type="radio" name="layout" value="vertical" id="layout_vert" checked />
                <label for="layout_vert"> Vertical </label><br />
            </div>
            <br />
            <select name="category" style="color:black; font-size:1.5em">
                <option value=""> - Select One - </option>
                <option value="galaxy" > Galaxy </option>
                <option > Eruptions </option>
                <option > Sea Life </option>
                <option > Happiness </option>
            </select><br /><br />
            <input type="submit" value="Submit" />
        </form>
        <br /> <br />
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators Here -->
            <ol class="carousel-indicators">
                <?php
                for ($i=0; $i<5; $i++) {
                    echo "<li data-target='#carousel-example-generic' data-slide-to='$i'";
                    echo ($i==0)?" class='active'": "";
                    echo ">,/li>";
                }
                ?>
            </ol>
            
            <!-- Wrapper for Images -->
            <div class="carousel-inner" role="lsitbox">
                <?php
                for ($i=0; $i < 5; $i++) {
                    do {
                        $randomIndex = rand(0, count($imageURLs));
                    }
                    while (!isset($imageURLs[$randomIndex]));
                    
                    echo '<div class="item ';
                    echo ($i==0)?"active": "";
                    echo '">';
                    echo '<img src="' . $imageURLs[$randomIndex] . '">';
                    echo '</div>';
                    unset($imageURLs[$randomIndex]);
                }
                ?>
            </div>
            
            <!-- Controls Here -->
            <a class="left carousel-control" href="#carousel-example-generic" roole="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    </body>
</html>