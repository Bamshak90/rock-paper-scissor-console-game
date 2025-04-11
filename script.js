console.log('Hello World')

// Creating a function that allows the computer to randomly  generate a move

function getComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber == 0 || randomNumber <= 1/3) {
      console.log("Rock")

  } else if (randomNumber == 1/3 || randomNumber <= 2/3) {
      console.log("Paper");

  } else if ( randomNumber == 2/3 || randomNumber <= 1) 
      console.log("Scissors")
  

  // console.log(randomNumber)


}

getComputerMove()