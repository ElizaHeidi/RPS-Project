
let userInput;
const rps = ["rock", "paper", "scissors"];

const getComputerChoice = rps[(Math.random() * rps.length) | 0];
console.log(getComputerChoice);




