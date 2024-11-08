function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choice = (randomNumber === 0) ? "rock" : (randomNumber === 1) ? "paper" : "scissors";
  return choice;
}

function getHumanChoice() {
  let choice;

  do {
    choice = String(prompt("Enter your weapon between rock, paper, and scissors")).toLowerCase();
  } while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors');

  return choice;
}


let gamePoints = 5;

function playGame(points) {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // determine round winner
    let roundWinner;
  
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
    }
  
    // increment round winner's score
    (roundWinner === 'human') ? humanScore++ : (roundWinner === 'computer') ? computerScore++ : null;
  
    //announce round winner
    if (roundWinner === 'human') {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`)
    } else if (roundWinner === 'computer') {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`)
    } else {
      console.log(`It's a tie!`);
      console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`)
    }
  }

  do {
    playRound(getHumanChoice(), getComputerChoice());
  } while (humanScore !== points && computerScore !== points);

  console.log(`GAME OVER -  ${(humanScore === 5) ? 'You win!': 'Computer wins!'}`);
}