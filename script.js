
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

let playerText = prompt("Rock, paper, or scissors?");
let playerSelection = playerText.toLowerCase(); 
let computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    return "tie.";
}
else if (playerSelection === "rock" && computerSelection === "paper") {
    return "you lose. paper beats rock.";
}
else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "you win. rock beats scissors.";
}
else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "you lose. scissors beats paper.";
}
else if (playerSelection === "paper" && computerSelection === "rock") {
    return "you win. paper beats rock.";
}
else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "you lose. rock beats scissors.";
}
else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "you win. paper beats scissors.";
}
}


console.log(playRound(playerSelection, computerSelection));

/* function game() {
    for (let i = 0; i < 5; i++) {
        
     }
}


