
let userInput;

function getComputerChoice() {
    if (userInput === 1) {
        return "rock";
    }
    else if (userInput === 2) {
        return "paper";
    }
    else if (userInput === 3) {
        return "scissors";
    }
    else {
        return "Choose a number from 1 to 3"
    }
}
console.log(getComputerChoice());


