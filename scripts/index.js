

function computerPlay() {
//create an array with three strings in it
    let values = ["Rock","Paper","Scissors"];
//choose one at random
        valueToUse = values[Math.floor(Math.random() * values.length)];
        return valueToUse;            
}

function playRound(playerSelection, computerSelection) {
//input playerSelection and computerSelection
//compare the two values and decide which one beats the other
  //playerWins: rock/scissors, paper/rock, scissors/paper
  //computerWins: " "
    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === "Scissors") {
            return playerWins;
        }
        else if (computerSelection === "Paper") {
            return playerLoses;
        }
        else if (computerSelection === "Rock") {
            return playerDraws;
        }
    }
    else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection === "Rock") {
            return playerLoses;
        }
        else if (computerSelection === "Paper") {
            return playerWins;
        }
        else {
            return playerDraws;
        }
    }
    else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === "Rock") {
            return playerWins;
        }
        else if (computerSelection === "Scissors") {
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

const playerSelection = "paper";
const computerSelection = computerPlay();
//declare the winner
    let playerWins = "You win! " + playerSelection + " beats " + computerSelection + ".";
    let playerLoses = "You lose! " + computerSelection + " beats " + playerSelection + ".";
    let playerDraws = "It's a draw! " + computerSelection + " and " + playerSelection + " cancel eachother out."; 
    let errorMessage = "Please enter a valid response.";

console.log(playRound(playerSelection, computerSelection));


