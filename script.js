console.log("Hello World");

function getComputerChoice(){
    let randomVal = 0;
    randomVal = Math.random() * (max - min) + min;
    if(randomVal===0){
        return "Rock";
    } else if(randomVal===1){
        return "Paper";
    } else if(randomVal===2){
        return "Scissors";
    } else{
        return "Computer was not able to ouput a choice";
    }
    return "";
}