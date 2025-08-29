let playerPoints = 0;
let ComputerPoints = 0;
let playerChoice;

function getComputerChoice() {
   if (compChoice <= 0.33) {
    return "rock"
   } else if (compChoice <= 0.66) {
    return "paper"
   } else {
    return "scissors"
   }
   
}

function distritbutePoints() {
  if ((properChoice === "rock" && getComputerChoice() === "scissors")
       || (properChoice === "scissors" && getComputerChoice() === "paper")
       || (properChoice === "paper" && getComputerChoice() === "rock" )) {
       ++playerPoints
  }
  else if ((properChoice === "rock" && getComputerChoice() === "paper")
          || (properChoice === "paper" && getComputerChoice() === "scissors")
          || (properChoice === "scissors" && getComputerChoice() === "rock")) {
          ++ComputerPoints
  }
  else if (properChoice === getComputerChoice()) {
  }
  else {
        return console.log("error. Try again.")
  }
}

function playGame() {
    
    choice = prompt("Choose: Rock, Paper or Scissors"); 
     properChoice = choice.toLowerCase();
     compChoice = Math.random();
     getComputerChoice()
     distritbutePoints()
         if (playerPoints === 3) {
         return console.log("congrats Player. You win.")
          }else if (ComputerPoints === 3) {
          return  console.log("Maybe next time player. Computer wins.")
          }else {
           return console.log("Player Points: " + playerPoints + ", " + "Computer Points: " + ComputerPoints);
          }
        }



