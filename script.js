
let userInput;

function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)];
}
console.log(getComputerChoice());
  // Computer randomly selects "rock," "paper," or "scissors" as its response

/* rock is < paper;
paper < scissors;
scissors < rock; 
let userInput ["rock", "paper", or "scissors"];
let getComputerChoice = random("rock", "paper", or "scissors");
if (userInput < getComputerChoice) {
    return "You lose.";
}
else if (userInput > getComputerChoice) {
    return "You win.";
}
*/

// let playerText = "scissors";
// let playerSelection = playerText.toLowerCase(); 
// let computerSelection = getComputerChoice;

// function singleRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         return "tie.";
//     }
//     else if (playerSelection === "rock" && computerSelection === "paper") {
//         return "you lose.";
//     }
//     else if (playerSelection === "rock" && computerSelection === "scissors") {
//         return "you win.";
//     }
//     else if (playerSelection === "paper" && computerSelection === "scissors") {
//         return "you lose.";
//     }
//     else if (playerSelection === "paper" && computerSelection === "rock") {
//         return "you win.";
//     }
//     else if (playerSelection === "scissors" && computerSelection === "rock") {
//         return "you lose.";
//     }
//     else if (playerSelection === "scissors" && computerSelection === "paper") {
//         return "you win.";
//     }
//     else if (playerSelection === "rock" && computerSelection === "paper") {
//         return "you lose.";
//     }
// }
// console.log(singleRound(playerSelection, computerSelection));



