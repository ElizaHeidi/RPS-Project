const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const results = document.querySelector('.results');
const rps = ["rock", "paper", "scissors"];
const winners = [];

// function game() {
// // play 5 rounds, report winner, best of 5
//     for (let i = 1; i <= 5; i++) { 
//     playRound(i);
//     }
//     logWins();
//     }



function playRound(round) {
    // Get playerSelection using prompt function, make computerSelection using randomizer function, tally score++ 
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    const winner = checkWinner(playerSelection, computerSelection); // Who won that indiv game?
    console.log(winner); 
    winners.push(winner); // stores winner of each game in array 
    logRound(playerSelection, computerSelection, winner, round)
}

function playerChoice() {
// get input from player 
let input = prompt("Which do you choose, rock, paper, or scissors?");
return input; // Allows computer to use input values
}

function getComputerChoice() {
// randomly iterate through array of strings
return rps[Math.floor(Math.random()*rps.length)]
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
      return "Tie"; // source for arrays in logWins()
    } else if (
      (choiceP === "rock" && choiceC == "scissors") ||
      (choiceP === "paper" && choiceC == "rock") ||
      (choiceP === "scissors" && choiceC == "paper")
    ) {
      return "Player"; // source for arrays in logWins()
    } else {
      return "Computer"; // source for arrays in logWins()
    }
  }

function logWins() {
// new arrays: looks at each winner, whichever winner = player/computer/tie, store it in respective array. .length tells how many # x won.   
  let playerWins = winners.filter((winner) => winner == "Player").length; 
  let computerWins = winners.filter((winner) => winner == "Computer").length;
  let ties = winners.filter((winner) => winner == "Tie").length;
  // displays results of above arrays  
  console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
  }
  
  function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round);
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner, "Won the Round");
    console.log("-----------");
  }

  rockButton.addEventListener('click', ) {
    const computerSelection = getComputerChoice; 
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
}

