<!DOCTYPE html>
<html lang="en">


<!-- This is the head -->
<!-- All styles and javascript go inside the head -->
    <head>
        <title> Homework 2: Now With Code Restrictions </title>
        <meta charset="utf-8" />
        
        <link href="css/styles.css" rel="stylesheet" type="text/css" />
        
        <style>
          .flip-card {
            background-color: transparent;
            width: 300px;
            height: 200px;
/*            border: 1px solid #f1f1f1;*/
            perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .flip-card-front {
          background-color:#000066;
          color: white;
        }

        .flip-card-back {
          background-color: #00cc00;
          color: white;
          transform: rotateY(180deg);
        }
</style>
    </head>
<!-- closing head -->
    <!-- This is the body -->
    <!-- This is where we place the content of our website -->
    <body>
        <div id="header">
            <h1> Test your Integral Strength </h2>
        </div>
        
        <div id="WelcomeText">
          <p>For some, Calculus comes easy, for others, it takes extra work to master the material.
          This page will provide you an opportunity to test yourself on some of the more common
          integrals. Hover you mouse over to reveal the solution to the integral on deck. Click the
          "Refresh" button to view a new integral.</p>
          
          <p>Keep in mind some tools that can help with retaining the information:</p>
          <p>-Listen to classical music while learning</p>
          <p>-Keep some kind of mint handy while you study</p>
          
          <p>Enjoy some Mozart while you scroll:</p>
          <audio controls>
            <source src="audio/Mozart.mp3" type="audio/mpeg">
          </audio>
        </div>
        
        <div class="flip-card">
        <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2>Integral</h2>
          <?php $img = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
                $random = array_rand($img); ?>
          <img src='img/<?php echo $random; ?>.png' alt="Integral<?php echo $random; ?>" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <h2>Integral Result</h2>
          <?php $symbol = matchResult($random); ?>
          <img src="img/<?php echo $symbol; ?>.png" alt="img/<?php echo $symbol; ?>" style="width:300px;height:300px;">
        </div>
        </div>
        </div>

        <button class="button">Refresh</button>

      <script language=php>
        function matchResult($random){
          switch ($random) {
            case 1: $symbol = "1_result";
                    break;
            case 2: $symbol = "2_result";
                    break;
            case 3: $symbol = "3_result";
                    break;
            case 4: $symbol = "4_result";
                    break;
            case 5: $symbol = "5_result";
                    break;
            case 6: $symbol = "6_result";
                    break;
            case 7: $symbol = "7_result";
                    break;
            case 8: $symbol = "8_result";
                    break;
            case 9: $symbol = "9_result";
                    break;
            case 10: $symbol = "10_result";
                    break;
            case 11: $symbol = "11_result";
                    break;
            case 12: $symbol = "12_result";
                    break;
            case 13: $symbol = "13_result";
                    break;
          }

        return "$symbol";
        }
    
      </script>

        </main>
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <!-- This is the footer -->
        <!-- The footer goes inside the body but not always -->
        <footer>
            <hr>
            Internet Programming. 2018&copy; Sikes <br />
            <strong>Disclaimer:</strong> The information in this webpage is fictitous. <br />
            It is used for academic purposes only.
            <figure id="csumbLogo">
                <img src="img/csumbLogo.jpg" alt="Logo for CSUMB" width="10%"/>
            </figure>
        </footer>
        <!-- closing footer -->
        
    </body>
    <!-- closing body -->

</html>