let rockButton = document.querySelector('#rock-button');
let paperButton = document.querySelector('#paper-button');
let scissorsButton = document.querySelector('#scissors-button');
let resultsDiv = document.querySelector('#results');

let humanScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', (e) => playRound( "rock", getComputerChoice() ));
paperButton.addEventListener('click', (e) => playRound( "paper", getComputerChoice() ));
scissorsButton.addEventListener('click', (e) => playRound( "scissors", getComputerChoice() ));

function getComputerChoice() {
  const gameOptions = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * 3);
  return gameOptions[computerChoice];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    let result = document.createElement('p');
    result.textContent = "You lose! Paper beats Rock";
    computerScore++;
    let score = document.createElement('p');
    score.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;
    resultsDiv.appendChild(result);
    resultsDiv.appendChild(score);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    let result = document.createElement('p');
    result.textContent = "You win! Rock beats Scissors";
    humanScore++;
    let score = document.createElement('p');
    score.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;
    resultsDiv.appendChild(result);
    resultsDiv.appendChild(score);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    let result = document.createElement('p');
    result.textContent = "You win! Paper beats Rock";
    humanScore++;
    let score = document.createElement('p');
    score.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;
    resultsDiv.appendChild(result);
    resultsDiv.appendChild(score);
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    let result = document.createElement('p');
    result.textContent = "You lose! Scissors beats Paper";
    computerScore++;
    let score = document.createElement('p');
    score.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;
    resultsDiv.appendChild(result);
    resultsDiv.appendChild(score);
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    let result = document.createElement('p');
    result.textContent = "You lose! Rock beats Scissors";
    computerScore++;
    let score = document.createElement('p');
    score.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;
    resultsDiv.appendChild(result);
    resultsDiv.appendChild(score);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    let result = document.createElement('p');
    result.textContent = "You win! Scissors beats Paper";
    humanScore++;
    let score = document.createElement('p');
    score.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;
    resultsDiv.appendChild(result);
    resultsDiv.appendChild(score);
  } else {
    let result = document.createElement('p');
    result.textContent = "It's a tie!";
    let score = document.createElement('p');
    score.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;
    resultsDiv.appendChild(result);
    resultsDiv.appendChild(score);
  }

  if (humanScore === 5 || computerScore === 5) {
    let winner = document.createElement('p');
    if (humanScore === 5) {
      winner.textContent = "GAME OVER! You win!";
    } else {
      winner.textContent = "GAME OVER! Computer wins!";
    }
    resultsDiv.appendChild(winner);
    humanScore = 0;
    computerScore = 0;
  }

}

function playGame(e) {
  // while (humanScore < 5 && computerScore < 5) {
  //   playRound(getHumanChoice(), getComputerChoice());
  // }
  // if (humanScore === 5) {
  //   console.log("You win!");
  // } else {
  //   console.log("You lose!");
  // }

  playRound(getHumanChoice(), getComputerChoice());
}