

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
//compare the two values and decide which one beats the other
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

const playerSelection = prompt("Enter: 'Rock' 'Paper' or 'Scissors'");
let computerSelection = computerPlay();

//declare the winner
    let playerWins = "You chose: " + playerSelection + " Computer chose: " + computerSelection + 
    " You win this round! "
    let playerLoses = "You chose: " + playerSelection + " Computer chose: " + computerSelection + 
    " Computer wins this round! " 
    let playerDraws = "You chose: " + playerSelection + " Computer chose: " + computerSelection + 
    " Its a draw! "
    let errorMessage = "Please enter a valid response.";
    
//use playRound to play 5 rounds
 function game(playerSelection, computerSelection) {
    for (let round = 0; round < 5; round++) {
        computerPlay();
        playerSelection = prompt("Enter: 'Rock' 'Paper' or 'Scissors'");
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score: " + playerScore + " Computer score: " + computerScore);
    }
 }
 

 
 //report the winner at the end   

console.log(game(playerSelection, computerSelection));


