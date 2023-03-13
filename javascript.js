function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
    
    if (!validChoices.includes(playerSelection)) {
      throw new Error(`Invalid input: ${playerSelection}. Please choose Rock, Paper, or Scissors.`);
    }
    
    if (playerSelection === computerSelection) {
      return "tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }

  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= 5; i++) {
      console.log(`Round ${i}:`);
  
      const computerSelection = getComputerChoice();
      let playerSelection = '';
      
      while (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
        playerSelection = prompt("Choose Rock, Paper, or Scissors");
        
        if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
          console.log(`Invalid input: ${playerSelection}. Please choose Rock, Paper, or Scissors.`);
        }
      }
  
      try {
        const result = playRound(playerSelection, computerSelection);
  
        if (result.includes("Win!")) {
          playerScore++;
          console.log("You win this round!");
        } else if (result.includes("Lose!")) {
          computerScore++;
          console.log("You lose this round!");
        } else {
          console.log("Tie!");
        }
  
        console.log(`Score: Player ${playerScore} - ${computerScore} Computer`);
        console.log("-----------------------");
  
      } catch (error) {
        console.log(error.message);
        i--;
      }
    }
  
    if (playerScore > computerScore) {
      console.log("Bravo! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry, you lose the game.");
    } else {
      console.log("Tie game!");
    }
  }