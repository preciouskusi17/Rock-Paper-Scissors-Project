function getComputerChoice() {
    let choices= Math.random()*3;
    if (choices <=1){
      return 'Rock';
    } else if (choices <=2){
        return 'Paper';
    } else return 'Scissors'
        
}
let output= document.querySelector('div')
let playerScore= document.querySelector('#pscore');
let computerScore= document.querySelector('#cscore');
function playRound(playerSelection, computerSelection) {
      if ((playerSelection=='Rock' && computerSelection=='Scissors') 
            || (playerSelection=='Paper' && computerSelection=='Rock')
            || (playerSelection=='Scissors' && computerSelection=='Paper')){
                ++ playerScore.textContent;
                output.textContent= `You won! ${playerSelection} beats ${computerSelection}`
            
        } else if  (  (playerSelection=='Rock' && computerSelection=='Paper')
             || (playerSelection=='Paper' && computerSelection=='Scissors')
             || (playerSelection=='Scissors' && computerSelection=='Rock')){
                ++ computerScore.textContent; 
                output.textContent= `You lost! ${computerSelection} beats ${playerSelection}`;
         }else if (playerSelection==computerSelection){
            output.textContent= `It's a tie. ${computerSelection} ties with ${playerSelection}`
        }  
        if (playerScore.textContent==5){
            result.textContent='Congratulations! You won the game. Reload the page to replay' 
         } else if (computerScore.textContent==5){
             result.textContent='You lost the game. Reload the page to replay' 
          } 
  }
 
  let buttons= document.querySelectorAll('button');
  let result= document.querySelector('#result')
  
  buttons.forEach((btn) =>{
    btn.addEventListener('click',() =>{
        if (playerScore.textContent<5 && computerScore.textContent<5){
        return (playRound(btn.id, getComputerChoice()))
    } 
      })} 
  )
  