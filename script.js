let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    console.log("Rock");
    return "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    console.log("Paper");
    return "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    console.log("Scissors");
    return "scissors";
  }

  // console.log(randomNumber)
}

function getHumanChoice() {
  const userMove = prompt("Enter your move: Rock, Paper, Scissors");
  return userMove.toLowerCase();
}



function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
      console.log("It's a tie");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose");
      computerScore++; 
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win"); 
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose.");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose.");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win.");
      humanScore++;
    } else {
      console.log("Invalid input. Please enter Rock, Paper, or Scissors.");
    }

    console.log("Human: " + humanScore + " Computer: " + computerScore);
    // console.log("-------------------------------");
  }

  for (let i = 1; i <= 5; i++) {
    console.log("Round " + i);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game.");
  } else {
    console.log("It's a draw!");
  }

}

playGame();