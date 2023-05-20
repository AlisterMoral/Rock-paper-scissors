const  choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;
let roundCount = 0;

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button =>{
  button.addEventListener('click', playerRound);
});

function playerRound (e){
  const userChoice = e.target.id;
  const computerChoice = choices[Math.floor(Math.random()* choices.length)];
  
switch (userChoice + computerChoice) {
  case 'rockscissors':
  case 'paperrock':
  case 'scissorspaper':
   win(userChoice, computerChoice)
   break;
  case 'rockpaper':
  case 'paperscissors':
  case 'scissorsrock':
   lose(userChoice, computerChoice);
   break;
  case 'rockrock':
  case 'paperpaper':
  case 'scissorsscissors':
   draw(userChoice, computerChoice);
   break;
}

}

function win(userChoice, computerChoice) {
  userScore++;
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('result').textContent = `${userChoice} beats ${computerChoice}. You win!`;
  checkGameOver();
}

function lose(userChoice, computerChoice) {
  computerScore++;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('result').textContent = `${computerChoice} beats ${userChoice}. You lose!`;
  checkGameOver();
}

function draw(userChoice, computerChoice) {
  document.getElementById('result').textContent = `Both chose ${userChoice}. It's a draw!`;
  checkGameOver();
}

function checkGameOver() {
  if (userScore === 5 || computerScore === 5 || roundCount === 5) {
    if (userScore > computerScore) {
      endGame('You win the Budokai ! ');
    } else if (computerScore > userScore) {
      endGame('You lose the Budokai ! ');
    } else {
      endGame("It's a tie!");
    }
  }
}

function endGame(message) {
  document.getElementById('result').textContent = message;
  roundCount = 0;
  userScore = 0;
  computerScore = 0;
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;

  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('result').textContent = '';

  buttons.forEach(button => {
    button.disabled = false;
  });
}

const resetButton = document.getElementById('reset');
resetButton.style.display = 'block';
resetButton.addEventListener('click', resetGame);