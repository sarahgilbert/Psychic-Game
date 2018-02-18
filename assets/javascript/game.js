var wins =0;
var losses =0;
var guessesLeft = 9;
var guessesSoFar = [];
//create array of letters for the computer to choose from
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// run the script when a user pushes a key, determine which key is pressed
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode (event.keyCode).toLowerCase(); 
//change to lower case

// create array to randomly select a letter from the array of letters
var computerGuess = letters[Math.floor(Math.random() * letters.length - 1)];
guessesSoFar.push(userGuess); 
//push the user guess to the guesses so far- this is working in that it adds the guesses to the list, but users are still able to push the same key multiple times, and it accepts keys other than letters.
console.log(computerGuess);




// connect to HTML
var winsDisplay = document.getElementById("wins")
// this only works once, doesn't add additional wins if the player keeps winning (but maybe because the game doesn't stop at 9 missed letter guesses...)
if (userGuess === computerGuess) {
    wins++;
    guessesLeft =9; //the guesses aren't changing
    guessesSoFar.length = 0;
    // take away previous guesses since the user won
    // display to html
    winsDisplay.innerHTML = "You have won " + wins + " times!";
    console.log("wins =" + wins);
}
// connect to html
var lossesDisplay = document.getElementById("losses")

if (guessesLeft == 0) {
     losses++;
     guessesLeft = 9; //guesses aren't changing
     guessesSoFar.length =0;
     //take away previous guesses to play again
     // display to html
     lossesDisplay.innerHTML = "You have lost " + losses + "times!";
     console.log("losses =" +losses); //display isn't working
   
 }
 // other html connections
 //can't get adequate spacing in guesses so far, or guesses left-
 var guessesDisplay = document.getElementById("guesses")
 guessesDisplay.innerHTML = "Guesses Left:  " + guessesLeft + " !";
 var yourGuess = document.getElementById("yourguess")
 yourGuess.innerHTML = "Your guesses so far:  " + guessesSoFar + " !";


}

