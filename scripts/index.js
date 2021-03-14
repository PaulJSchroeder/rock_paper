

function computerPlay() {
//create an array with three strings in it
    let values = ["Rock","Paper","Scissors"];
//choose one at random
        valueToUse = values[Math.floor(Math.random() * values.length)];
        return valueToUse;            
}
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
//input playerSelection and computerSelection
    playerSelection = prompt("Enter: 'Rock' 'Paper' or 'Scissors'");
    computerSelection = computerPlay(); 
//Declare the winner of the round    
    let playerWins = "You chose: " + playerSelection + ", Computer chose: " + computerSelection + 
    ", You win this round! "
    let playerLoses = "You chose: " + playerSelection + ", Computer chose: " + computerSelection + 
    ", Computer wins this round! " 
    let playerDraws = "You chose: " + playerSelection + ", Computer chose: " + computerSelection + 
    ", Its a draw! "
    let errorMessage = "Please enter a valid response.";
//compare the two values and decide which one beats the other
//add a point to whoever wins round
    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === "Scissors") {
            ++playerScore;
            return playerWins; 
        }
        else if (computerSelection === "Paper") {
            ++computerScore;
            return playerLoses;
        }
        else if (computerSelection === "Rock") {
            return playerDraws;
        }
    }
    else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection === "Rock") {
            ++computerScore;
            return playerLoses;
        }
        else if (computerSelection === "Paper") {
            ++playerScore;
            return playerWins;
        }
        else {
            return playerDraws;
        }
    }
    else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === "Rock") {
            ++playerScore;
            return playerWins;
        }
        else if (computerSelection === "Scissors") {
            ++computerScore;
            return playerLoses;
        }
        else {
            return playerDraws;
        }
    }
    else {
        return errorMessage;
    }
   
}   
//use playRound to play 5 rounds
 function game(playerSelection, computerSelection) {
    for (let round = 0; round < 5; round++) {
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score: " + playerScore + " Computer score: " + computerScore);
    }
//report the winner at the end
    if (playerScore > computerScore) {
        console.log("You win the game! Final score: You: " + playerScore + ", Computer: " + computerScore);
    } 
    else if (computerScore > playerScore) {
        console.log("Computer wins the game! Final score: You: " + playerScore + ", Computer: " + computerScore);
    }
    else if (computerScore === playerScore) {
        console.log("It's a tie! Final score: You: " + playerScore + ", Computer: " + computerScore);
    }
 }
 console.log(game());

 
   




