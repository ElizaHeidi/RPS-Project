
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)];
}
console.log(getComputerChoice());
  // Computer randomly selects "rock," "paper," or "scissors" as its response


let playerSelection = prompt("Rock, paper, or scissors?", "").toLowerCase();
let computerSelection = getComputerChoice();



function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    return "tie.";
}
else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++
    return "you lose. paper beats rock.";
}
else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    return "you win. rock beats scissors.";
}
else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++
    return "you lose. scissors beats paper.";
}
else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    return "you win. paper beats rock.";
}
else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++
    return "you lose. rock beats scissors.";
}
else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    return "you win. paper beats scissors.";
}
}



console.log(playRound(playerSelection, computerSelection));

function game(){

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, paper, or scissors?", "").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        
    }
    if (playerScore > computerScore) {
        return "You won best of 5.";
    }
    else if (playerScore < computerScore) {
        return "You lost best of 5."
    }
    else {
        return "You tied best of 5."
    }
    }
    
console.log(game());



