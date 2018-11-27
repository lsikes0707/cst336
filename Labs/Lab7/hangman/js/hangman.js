// VARIABLES
var selectedWord ='';
var selectedHint = '';
var board = [];
var remainingGuesses = 6;
var words = [{ word: "snake", hint: "It's a reptile" },
             { word: "monkey", hint: "It's a mammal" },
             { word: "beetle", hint: "It's an insect" },
             { word: "eagle", hint: "It's a large bird of prey" },
             { word: "parrot", hint: "It's a colorful bird" },
             { word: "frog", hint: "It's an amphibian" },
             { word: "wasp", hint: "It's an insect" },
             { word: "tiger", hint: "It's a large feline" }];
// Creating an array of available letters
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
                'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
                'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        
// LISTENER
window.onload = startGame();

$(".letter").click(function() {
    checkLetter($(this).attr("id"));
    disableButton($(this));
});

// View Hint
$(".hint").click(function() {
    giveHint($(this));
});
    

// Reload page when clicking on the replay button
$(".replayBtn").on("click", function() {
    location.reload();
});

function initBoard() {
    $('#won').hide();
    $('#lost').hide();
    // for (var letter in selectedWord) {
        // board += '_';
    // }
    for (var letter in selectedWord) {
        board.push("_");
    }
}

function giveHint(click) {
    $("#hints").show();
    
    if (click) {
        $('#hints').hide();
        $("#word").append("<br />");
        $("#word").append("<span class='hint'>Hint: " + selectedHint + "</span>");

    } else {
        $('#hint').show();
    }
}

function startGame() {
    pickWord();
    initBoard();
    createLetters();
    updateBoard();
}

function pickWord() {
    var randomInt = Math.floor(Math.random() * words.length);
    selectedWord = words[randomInt].word.toUpperCase();
    selectedHint = words[randomInt].hint;
}

// Create alphabet letters inside the letters div
function createLetters() {
    for (var letter of alphabet) {
        let letterInput = '"' + letter + '"';
        $("#letters").append("<button class='btn btn-success letter' id='" + letter + "'>" + letter + "</button>");
    }
}

function checkLetter(letter) {
    var positions = new Array();
    for (var i =0; i< selectedWord.length; i++) {
        if (letter == selectedWord[i]) {
            positions.push(i);
        }
    }
    if (positions.length > 0) {
        updateWord(positions, letter);
    } else {
        remainingGuesses -= 1;
        updateMan();
        
        if (remainingGuesses <= 0) {
            endGame(false);
        }
    }
}

// Calculates and updates the image for our stick man
function updateMan() {
    $("#hangImg").attr("src", "img/stick_" + (6 - remainingGuesses) + ".png");
}

function updateWord(positions, letter) {
    for (var pos of positions) {
        board[pos] = letter;
    }
    updateBoard(board);
    
    // This checks to see if this is a winning guess
    if (!board.includes('_')) {
        endGame(true);
    }
}

function updateBoard() {
    $("#word").empty();
    
    for (i=0; i < board.length; i++) {
        $("#word").append(board[i] + " ");
    }
    
// this is where the Hint was
    
}

// Ends the game by hiding game divs and displaying the win or loss divs
function endGame(win) {
    $("#letters").hide();
    
    if (win) {
        $('#won').show();
    } else {
        $('#lost').show();
    }
}

// Disables the button and changes the style to tell the user it's disabled
function disableButton(btn) {
    btn.prop("disabled", true);
    btn.attr("class", "btn btn-danger");
}