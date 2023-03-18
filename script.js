let rbtn = document.querySelector('#rock');
let pbtn = document.querySelector('#paper');
let sbtn = document.querySelector('#scissors');
let resultsdiv = document.querySelector('#results');
let playerScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();

function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)];
}
  // Computer randomly selects "rock," "paper," or "scissors" as its response

  
function playRound(playerSelection, computerSelection) {
   getComputerChoice();
   if (playerSelection === computerSelection) {
   const p = document.createElement('p');
   // p.classList.add('');
   p.textContent = "tie.";
   resultsdiv.appendChild(p);
}
else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++
    const p = document.createElement('p');
    p.textContent = "you lose. paper beats rock.";
    resultsdiv.appendChild(p);
}
else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    const p = document.createElement('p'); 
    p.textContent = "you win. rock beats scissors.";
    resultsdiv.appendChild(p);
}
else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++
    const p = document.createElement('p');
    p.textContent = "you lose. scissors beats paper.";
    resultsdiv.appendChild(p);
}
else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    const p = document.createElement('p');
    p.textContent = "you win. paper beats rock.";
    resultsdiv.appendChild(p);
}
else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++
    const p = document.createElement('p');
    p.textContent = "you lose. rock beats scissors.";
    resultsdiv.appendChild(p);
}
else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    const p = document.createElement('p');
    p.textContent = "you win. paper beats scissors.";
    resultsdiv.appendChild(p);
}
}
checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const p = document.createElement('p');
        p.textContent = "You win best of 5!";
        resultsdiv.appendChild(p);
    } else if (computerScore === 5) {
        const p = document.createElement('p');
        p.textContent = "Computer wins, best of 5.";
        resultsdiv.appendChild(p);
    }
    }

  

rbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice(); 
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    }); 

pbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice(); 
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    });

sbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice(); 
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    });


// console.log(playRound(playerSelection, computerSelection));







