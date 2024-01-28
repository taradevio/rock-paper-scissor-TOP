const rockPaperScissor = ["Rock", "Paper", "Scissor"];

// Function that triggers random output of the Computer's choice
function game(rockPaperScissor) {
  return rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];
}

// Function for the outcome after the user inputs either rock, paper, or scissor
function newGame(playerSelection) {
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      alert("TIE");
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        alert("Paper beats rock. Computer Wins!");
      } else {
        alert("Rock beats Scissor. Player Wins!");
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "scissor") {
        alert("Scissor beats paper. Computer Wins!");
      } else {
        alert("Paper beats rock. Player Wins!");
      }
    } else if (playerSelection === "scissor") {
      if (computerSelection === "rock") {
        alert("Rock beats scissor. Computer Wins!");
      } else {
        alert("Scissor beats paper. Player Wins!");
      }
    }
  }
  const computerSelection = game(rockPaperScissor);
  playRound(playerSelection, computerSelection);
}

// Function to run the game
function playNow() {
  const numberOfGames = 3; 
  for (let i = 0; i < numberOfGames; i++) {
  let playerStart = prompt(`Game ${i + 1}: Choose your skill: Rock, Paper, Scissor`)
  newGame(playerStart);
}
}

// Trigger the function manually after the content is loaded
window.playNow = playNow;