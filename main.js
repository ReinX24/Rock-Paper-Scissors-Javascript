const choices = ["rock", "paper", "scissors"];
const winners = []

function game() {

  for (let i = 1; i <= 5; i++){

playRound(i);

}
document.querySelector("button").textContent = "Play new game";
logWins();
        
}

function playRound(round) {

  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  //console.log(computerSelection) //shows computer's choice
  const winner = checkWinner(playerSelection, computerSelection);
  //console.log(winner)
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}


    

function playerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
}
    input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
   input = prompt(
      "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesn't matter"
      );
  while (input == null) {
  input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  check = validateInput(input);
  }
  return input;
}
  
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
  
function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {

//console.log(choiceP, choiceC) //shows your choice and the computer's choice

if (choiceP === choiceC) {

return "Tie";

}

else if (
    
    (choiceP === 'scissors' && choiceC == 'paper') || 
    (choiceP === 'paper' && choiceC == 'rock') || 
    (choiceP === 'rock' && choiceC == 'scissors')
    
) {

return "You win!(Player Wins)";

}

else {

return "You lose!(Computer Wins)";

}

}

function logWins() {

let playerWins = winners.filter((item) => item == "You win!(Player Wins)").length; //item here is a placeholder
let computerWins = winners.filter((item) => item == "You lose!(Computer Wins)").length; //length counts the number of times won/lost/tied
let ties = winners.filter((item) => item == "Tie").length;

console.log("Results: ")
console.log("Player Wins: ", playerWins)
console.log("Computer Wins: ", computerWins)
console.log("Ties: ", ties)

}

function logRound(playerChoice, computerChoice, winner, round) {

console.log("Round: ",round);
console.log("Player Choice:",playerChoice);
console.log("Computer Choice:",computerChoice);
console.log("Winner: ",winner)
console.log("-------------------------------")

}