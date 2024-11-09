let gamePoints = 5;
let humanScore = 0;
let computerScore = 0;

const currentPointsDisplay = document.querySelector('#current-points');
const roundWinnerDisplay = document.querySelector('#round-winner');
const gameWinnerDisplay = document.querySelector('#game-winner');
const gameOverModal = document.querySelector('.game-over-modal');
const preGameUI = document.querySelector('.pre-game-ui');
const gameUI = document.querySelector('.game-ui');

const playAgainButton = document.querySelector('.play-again');
playAgainButton.addEventListener('click', () => {
  gameOverModal.close();
  currentPointsDisplay.textContent = 'Score - You: 0 | Computer: 0';
  roundWinnerDisplay.textContent = "Let's go!"
});

const goHomeButton = document.querySelector('.go-home');
goHomeButton.addEventListener('click', () => {
  gameOverModal.close();
  currentPointsDisplay.textContent = 'Score - You: 0 | Computer: 0';
  roundWinnerDisplay.textContent = "Let's go!"
  preGameUI.style.display = 'block';
  gameUI.style.display = 'none';
});

const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', initGame);

const gamePointsSelector = document.querySelector('#points');
gamePointsSelector.addEventListener('change', setGamePoints);

const buttons = document.querySelectorAll('.weapon');
buttons.forEach(button => button.addEventListener('click', handleButtonClick));

function setGamePoints(e) {
  gamePoints = +e.currentTarget.value;
}

function initGame() {
  resetGame();
  preGameUI.style.display = 'none';
  gameUI.style.display = 'block';
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choice = (randomNumber === 0) ? "rock" : (randomNumber === 1) ? "paper" : "scissors";
  return choice;
}

function handleButtonClick(e) {
  let humanChoice = e.currentTarget.getAttribute('id');
  let computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
}

function playRound(humanChoice, computerChoice) {
  let roundWinner;
  
  // determine round winner
  if (humanChoice === 'rock' && computerChoice === 'paper') {
    roundWinner = 'computer';
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    roundWinner = 'human';
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    roundWinner = 'human';
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    roundWinner = 'computer';
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    roundWinner = 'computer';
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    roundWinner = 'human';
  } else {
    roundWinner = 'tie';
  }

  // Increment score based on the round winner
  if (roundWinner === 'human') {
    humanScore++;
    roundWinnerDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else if (roundWinner === 'computer') {
    computerScore++;
    roundWinnerDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  } else {
    roundWinnerDisplay.textContent = `It's a tie!`;
  }

  // Update the score display
  currentPointsDisplay.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

  // check if game is over
  if (humanScore === gamePoints || computerScore === gamePoints) {

    if (humanScore === gamePoints) {
      gameWinnerDisplay.textContent = 'GAME OVER - You win!';
    } else if (computerScore === gamePoints) {
      gameWinnerDisplay.textContent = 'GAME OVER - Computer wins!';
    }

    gameOverModal.showModal();
    resetGame();
  }

}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  console.log("The game has been reset!");
}