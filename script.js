console.log(getComputerChoice());

function getComputerChoice(){
    let randomVal = 0;
    let max = 2;
    let min = 0;
    randomVal = Math.round(Math.random() * (max - min) + min);
    if(randomVal===0){
        return "Rock";
    } else if(randomVal===1){
        return "Paper";
    } else if(randomVal===2){
        return "Scissors";
    } else{
        console.log(randomVal);
        return "Computer was not able to ouput a choice";
    }
    return "";
}