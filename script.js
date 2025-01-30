console.log(getHumanChoice());
console.log(getComputerChoice());


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomVal = 0;
  let max = 2;
  let min = 0;
  randomVal = Math.round(Math.random() * (max - min) + min);
  if (randomVal === 0) {
    return "Rock";
  } else if (randomVal === 1) {
    return "Paper";
  } else if (randomVal === 2) {
    return "Scissors";
  } else {
    console.log(randomVal);
    return "Computer was not able to ouput a choice";
  }
  return "";
}
function getHumanChoice() {
    let choice = true;

    while(choice === true){
  let choice = prompt("Choose to Play: Rock/Paper/Scissors : ");
  let userChoice = choice.toLowerCase();
  if(userChoice==="rock"|| userChoice==="paper"||userChoice==="scissors"){
    console.log(userChoice);
    break;
  }else{
    console.log("not a choice");
  }
 } 
  
}

