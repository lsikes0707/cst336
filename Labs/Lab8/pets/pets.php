
<!DOCTYPE html>
<html>
    <head>
        <title> CSUMB: Pet Shelter </title>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

        <style>
          body {text-align: center;}
        </style>
    </head>
    <body>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
          <a class="navbar-brand" href="https://csumb.edu">CSUMB</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="index.php">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="pets.php">Adoptions</a>
              <a class="nav-item nav-link" href="about.php">About Us</a>
            </div>
          </div>
        </nav>
        
        
        <div class="jumbotron">
          <h1> CSUMB Animal Shelter</h1>
          <h2> The "official" animal adoption website of CSUMB </h2>
        </div>  
      <script>

          $(document).ready( function(){
        
              $(".petLink").click( function(){
            
                  //alert($(this).attr('id'));
                  $('#petInfoModal').modal("show");
                  $("#petInfo").html("<img src='img/loading.gif'>");
            
                  $.ajax({

                      type: "GET",
                      url: "api/getPetInfo.php",
                      dataType: "json",
                      data: { "id": $(this).attr('id')},
                      success: function(data,status) {
                
                      //   console.log(data);
                         $("#petInfo").html(" <img src='img/" + data.pictureURL + "'><br >" + 
                                              " Age: " + data.age + "<br>" +
                                              " Breed: " + data.breed + "<br>" +
                                             data.description);   
                 
                         $("#petNameModalLabel").html(data.name);                   
                
                      },
                      complete: function(data,status) { //optional, used for debugging purposes
                      //alert(status);
                      }
                
                  });//ajax
            
              }); //.getLink click
        
          });//document.ready

    
      </script>            

      Name: <a href='#' class='petLink' id='1' >Charlie</a><br>Type: Dog<br><button id='1' type='button' class='btn btn-primary petLink'>Adopt Me!</button><hr><br>Name: <a href='#' class='petLink' id='2' >Carl</a><br>Type: Cat<br><button id='2' type='button' class='btn btn-primary petLink'>Adopt Me!</button><hr><br>Name: <a href='#' class='petLink' id='3' >Samantha</a><br>Type: Panda<br><button id='3' type='button' class='btn btn-primary petLink'>Adopt Me!</button><hr><br>Name: <a href='#' class='petLink' id='4' >Ted</a><br>Type: Sloth<br><button id='4' type='button' class='btn btn-primary petLink'>Adopt Me!</button><hr><br>Name: <a href='#' class='petLink' id='5' >Sally</a><br>Type: Cat<br><button id='5' type='button' class='btn btn-primary petLink'>Adopt Me!</button><hr><br>Name: <a href='#' class='petLink' id='6' >Alex</a><br>Type: Lion<br><button id='6' type='button' class='btn btn-primary petLink'>Adopt Me!</button><hr><br>
      <!-- Modal -->
      <div class="modal fade" id="petInfoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="petNameModalLabel"></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                 <div id="petInfo"></div> 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>



        
      <footer>
          Disclaimer: The information in this site is not real.
      </footer>

    </body>
</html>
