
//  Variables

var correct = 0;
var incorrect = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var pyschicChoice = "";
var userGuess = "";

// alphabet array 
var alphabet = [
			"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
			"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
			];
// Functions used
// for loop through the alphabet array
// for (let i = 0; i < alphabet.length; i++) {
// 		// console.log(alphabet[i]);
// 	};

// Randomly choice by computer or pyschic

var pyschic = () =>  {
	pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];


}

// Function to Reset 
var resetGame = () => {
	guessesLeft = 9;
	guessesSoFar = [];
	pyschic();
};






// user event key input
document.onkeyup = (event) => {

	userGuess = event.key.toLowerCase();

	pyschic();

	console.log(userGuess);


	if (userGuess == pyschicChoice) {
		correct++;
		alertWin();
	} 
	if (userGuess != pyschicChoice) {
		guessesLeft--;
		guessesSoFar.push(userGuess);
	



	// game output to display on the game webpage
	var html = 
				
		"<p>Correct </p>" + 
		"<p>"+ correct + "</p>" +
		"<p>Incorrect </p>" + 
        "<p>"+ incorrect + "</p>"+
        "<br>"+
        "<p>Guesses Left </p>" +
        "<p>"+ guessesLeft + "</p>" +
        "<p>Your Guesses so far</p>" + 
		"<p>"+ guessesSoFar + "</p>";

	// Set the inner HTML contents of the game_output id to our html string
    document.querySelector("#game_output").innerHTML = html;

    if ( guessesLeft === 0 ) {
        incorrect++;
        resetGame();
        alertLoss();
        
		}
	}

};

var alertWin = () => {
	alert("Congratulations we were thinking of " + pyschicChoice + ".");
	resetGame();
};

var alertLoss = () => {
	alert("We are sorry your guess was incorrect, we were thinking of " + pyschicChoice + ". " + "You Guessed " + userGuess + ".");
	resetGame();
};