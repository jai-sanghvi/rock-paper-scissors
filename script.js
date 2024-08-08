function getComputerChoice() {
  const gameOptions = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * 3);
  return gameOptions[computerChoice];
}

function getHumanChoice() {
  const humanChoice = prompt("Choose your weapon").toLowerCase();
  return humanChoice;
}



function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
      console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`)
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
      console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`)
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
      console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`)
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper");
      computerScore++;
      console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`)
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
      console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`)
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
      console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`)
    } else {
      console.log("It's a tie!");
      console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`)
    }
  }
  while (humanScore < 5 && computerScore < 5) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore === 5) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}

playGame();