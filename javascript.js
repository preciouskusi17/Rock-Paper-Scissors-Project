function getComputerChoice() {
    let choices= Math.random()*3;
    if (choices <=1){
      return 'Rock';
    } else if (choices <=2){
        return 'Paper';
    } else return 'Scissors'
        
}
 

let computerSelection = getComputerChoice;

function playRound() {
    let playerSelection = prompt('Option =  Rock, Scissors, Paper','choose one option').toLowerCase();

    if (playerSelection === 'rock' && computerSelection()==='Scissors'){
        return 'You won! Rock beats Scissors';

    } else  if (playerSelection === 'scissors' && computerSelection()==='Rock'){
        return 'You lose! Rock beats Scissors';

    } else   if (playerSelection === 'paper' && computerSelection()==='Rock'){
        return 'You won! Paper beats Rock';

    } else  if (playerSelection === 'rock' && computerSelection()==='Paper'){
        return 'You lose! Paper beats Rock';

    } else  if (playerSelection === 'paper' && computerSelection()==='Scissors'){
        return 'You lose! Scissor beats Paper';

    } else  if (playerSelection === 'scissors' && computerSelection()==='Paper'){
        return 'You won! Scissor beats Paper';

    } else if (playerSelection === 'rock' && computerSelection()==='Rock'){
        return 'It\'s a tie! Rock ties with Rock';

    } else  if (playerSelection=== 'scissors' && computerSelection()==='Scissors'){
        return 'It\'s a tie! Scissors ties with Scissors';

    } else   if (playerSelection === 'paper' && computerSelection()==='Paper'){
        return 'It\'s a tie! Paper ties with Paper';

    } 
  }

function game (){
for (let i=1; i <= 5; ++i) console.log(playRound());
}