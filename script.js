let humanScore = 0;
let computerScore = 0;
console.log(playGame());


function playGame(){
    let rounds = prompt("How many rounds would you like to play of ROCK/PAPER/SCISSORS ? :"); 
    let roundsNum = parseInt(rounds);
    for(let i = 0; i < roundsNum; i++){
        
        
        if((humanScore >= Math.round(roundsNum/2) && humanScore>=computerScore)||(computerScore >= Math.round(roundsNum/2) && computerScore>=humanScore)){
            if(humanScore > computerScore){
                console.log("You win");
            }
            if(computerScore > humanScore){
                console.log("You Lose");
            }
        }
    }

}

function getComputerChoice() {
  let randomVal = 0;
  let max = 2;
  let min = 0;
  randomVal = Math.round(Math.random() * (max - min) + min);
  if (randomVal === 0) {
    return "rock";
  } else if (randomVal === 1) {
    return "paper";
  } else if (randomVal === 2) {
    return "scissors";
  } else {
    console.log(randomVal);
    return "Computer was not able to ouput a choice";
  }
  return "";
}
function getHumanChoice() {

    while(true){
  let choice = prompt("Choose to Play: Rock/Paper/Scissors : ");
  let userChoice = choice.toLowerCase();
  if(userChoice==="rock"|| userChoice==="paper"||userChoice==="scissors"){
    return userChoice;
    break;
  }else{
    console.log("not a choice");
  }
 } 
  
}
function playRound(humanSelection, computerSelection){
    let humanChoice = humanSelection;
    let computerChoice = computerSelection;
    let loseOrWin="";
    if((humanChoice==="rock"&&computerChoice==="paper")|| (humanChoice==="paper"&&computerChoice==="scissors")||(humanChoice==="scissors"&&computerChoice==="rock")){
        loseOrWin=`You LOSE! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else if((humanChoice==="rock"&&computerChoice==="rock")|| (humanChoice==="paper"&&computerChoice==="paper")||(humanChoice==="scissors"&&computerChoice==="scissors")){
        loseOrWin=`its a TIE!`;
        humanScore++;
        computerScore++;
    } else {
        loseOrWin=`You WIN! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    console.log(loseOrWin);

}
