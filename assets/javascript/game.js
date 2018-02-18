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


// here are the main problems: I'm pretty sure that the computer thinks it's a new game each time a letter is pressed. The guesses left never change from 9. If you pick the right letter, the list of letters guessed goes away, and it registers a win, but the guesses remaining never change, and you can never lose...

// connect to HTML
var winsDisplay = document.getElementById("wins")

if (userGuess === computerGuess) {
    wins++;
    guessesLeft =9; //the guesses aren't changing -I think it's a new "game" with each letter press?
    guessesSoFar.length = 0;
    
    winsDisplay.innerHTML = "You have won " + wins + " times!";
    console.log("wins =" + wins);
}
// connect to html
var lossesDisplay = document.getElementById("losses")

if (guessesLeft == 0) {
     losses++;
     guessesLeft = 9; //guesses aren't changing
     guessesSoFar.length =0;
     //same problem as above
     // display to html
     lossesDisplay.innerHTML = "You have lost " + losses + "times!";
     console.log("losses =" +losses); //display isn't working
   
 }
 // other html connections
 
 var guessesDisplay = document.getElementById("guesses")
 guessesDisplay.innerHTML = "Guesses Left:  " + guessesLeft + " !";
 var yourGuess = document.getElementById("yourguess")
 yourGuess.innerHTML = "Your guesses so far:  " + guessesSoFar + " !";


}

