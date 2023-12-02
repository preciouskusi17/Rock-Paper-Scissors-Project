function getComputerChoice() {
    let choices= Math.random()*3;
    if (choices <=1){
      return 'Rock';
    } else if (choices <=2){
        return 'Paper';
    } else return 'Scissors'
        
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection==='Scissors'){
        return 'You won! Rock beats Scissors';

    } else  if (playerSelection.toLowerCase() === 'scissors' && computerSelection==='Rock'){
        return 'You lose! Rock beats Scissors';

    } else   if (playerSelection.toLowerCase() === 'paper' && computerSelection==='Rock'){
        return 'You won! Paper beats Rock';

    } else  if (playerSelection.toLowerCase() === 'rock' && computerSelection==='Paper'){
        return 'You lose! Paper beats Rock';

    } else  if (playerSelection.toLowerCase() === 'paper' && computerSelection==='Scissors'){
        return 'You lose! Scissor beats Paper';

    } else  if (playerSelection.toLowerCase() === 'scissors' && computerSelection==='Paper'){
        return 'You won! Scissor beats Paper';

    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection==='Rock'){
        return 'It\'s a tie! Rock ties with Rock';

    } else  if (playerSelection.toLowerCase() === 'scissors' && computerSelection==='scissors'){
        return 'It\'s a tie! Scissors ties with Scissors';

    } else   if (playerSelection.toLowerCase() === 'paper' && computerSelection==='Paper'){
        return 'It\'s a tie! Paper ties with Paper';

    } 
  }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
