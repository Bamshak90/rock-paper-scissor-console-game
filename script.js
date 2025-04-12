

// Creating a function that allows the computer to randomly  generate a move

let humanScore = 0;

let computerScore = 0;


function getComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1/3) {
  
    console.log("Rock");
    
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {

      console.log("Paper");

  } else if ( randomNumber >= 2/3 && randomNumber < 1) {

    console.log("Scissors");
  }


  // console.log(randomNumber)


}

getComputerMove()

function getHumanChoice() {
  const userMove = prompt("Enter your move: Rock, Paper, Scissors");
}

getHumanChoice()


function playRound(humanChoice, computerChoice) {

  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {

    console.log("It's a tie");

  } else if (humanChoice === "rock" && computerChoice === "paper") {

    console.log("You lose");

  } else if (humanChoice === "rock" && computerChoice === "scissors") {

    console.log("You win");

  } else if (humanChoice === "paper" && computerChoice === "rock") {

    console.log("You win"); 
    
  } else if (humanChoice === "paper" && computerChoice === "scissors") {

    console.log("You lose.")

  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    
    console.log("You lose.")

  } else if (humanChoice === "scissor"  && computerChoice === "paper" ) {

    console.log("You win.")

  }

    

}