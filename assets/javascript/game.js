
// create array of letters to be chosen
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// create array to randomly select a letter from the array of letters
var computerGuess = letters[Math.floor(Math.random() * letters.length - 1)];
console.log(computerGuess)
// run the script when a user pushes a key, determine which key is pressed
document.onkeyup = function(event) {
    var userGuess = event.key;

// other variables
    var wins = 0;
    var losses = 0;
    var guessesRemaining =9;

// connect to HTML
var winsDisplay = document.getElementById("wins")

if (userGuess === computerGuess) {
    wins++;
    
    // display to html
    winsDisplay.innerHTML = "You have won " + wins + " times!";
    console.log("wins =" + wins);
}
// connect to html
//var lossesDisplay = document.getElementById("losses")

else if (userGuess !== computerGuess) 
     losses++;
     // display to html
     lossesDisplay.innerHTML = "You have lost " + losses + "times!";
     console.log("losses =" +losses);
    
    
  
 }
    



