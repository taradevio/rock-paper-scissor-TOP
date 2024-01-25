const rockPaperScissor = ["Rock", "Paper", "Scissor"];
// Function that triggers random output of the Computer's choice
function game(rockPaperScissor) {
  return rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];
}

// function that triggers the result between player and computer
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    alert("TIE");
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      alert("Computer Wins!");
    } else {
      alert("Player Wins!");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissor") {
      alert("Computer Wins!");
    } else {
      alert("Player Wins!");
    }
  } else if (playerSelection === "scissor") {
    if (computerSelection === "rock") {
      alert("Computer Wins!");
    } else {
      alert("Player Wins!");
    }
  }
}
const computerSelection = game(rockPaperScissor);
let playerStart = prompt("Choose your skill: Rock, Paper, Scissor");

playRound(playerStart, computerSelection);
