let playerPoints = 0;
let ComputerPoints = 0;
let playerChoice;
let resultsContainer;
let pointsContainer;

function getComputerChoice() {
   if (compChoice <= 0.33) {
    return "rock"
   } else if (compChoice <= 0.66) {
    return "paper"
   } else {
    return "scissors"
   }
   
}

function distritbutePoints(properChoice) {
  if ((properChoice === "rock" && getComputerChoice() === "scissors")
       || (properChoice === "scissors" && getComputerChoice() === "paper")
       || (properChoice === "paper" && getComputerChoice() === "rock" )) {
       ++playerPoints
       return resultsContainer.textContent = `The computer has chosen ${getComputerChoice()}.`;
       
  }
  else if ((properChoice === "rock" && getComputerChoice() === "paper")
          || (properChoice === "paper" && getComputerChoice() === "scissors")
          || (properChoice === "scissors" && getComputerChoice() === "rock")) {
          ++ComputerPoints
       return resultsContainer.textContent = `The computer has chosen ${getComputerChoice()}.`;
  }
  else if (properChoice === getComputerChoice()) {
       return resultsContainer.textContent = "Both of you have chosen the same. No points awarded."
  }
  
}

function playGame(properChoice) {
     compChoice = Math.random();
     getComputerChoice()
     distritbutePoints(properChoice)
        if (playerPoints === 5) {
         resultsContainer.textContent = "congrats Player. You win.";
          container.removeEventListener("click", returnDisplay);
        }
        else if (ComputerPoints === 5) {
         resultsContainer.textContent = "Maybe next time player. Computer wins.";
         container.removeEventListener("click", returnDisplay);   
        }
}

function returnPoints() {
 return "Player Points: " + playerPoints + ", " + "Computer Points: " + ComputerPoints;
}



let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let container = document.querySelector(".button-container");

pointsContainer = document.createElement("div");
pointsContainer.textContent = returnPoints();
document.body.insertBefore(pointsContainer, container)

resultsContainer = document.createElement("div");
resultsContainer.textContent = "Click on any choice to play the game.";
document.body.appendChild(resultsContainer) 


let choice;
container.addEventListener("click", returnDisplay = (e) => {
  choice = (e.target.textContent)
  if (choice === "rock"   ||
      choice === "paper"  ||
      choice === "scissors") {
      playGame(choice)
      pointsContainer.textContent = returnPoints();
    }
})









