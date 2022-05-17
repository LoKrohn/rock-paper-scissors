let playerDecision = prompt("Rock, Paper, or Scissors?").toLowerCase();
let computerDecision = computerPlay();


function computerPlay() {
    switch (randomNumber = Math.floor(Math.random()*3)){
        case 0 :
            return "rock";
            break;
        case 1 :
            return "paper";
            break;
        case 2 :
            return "scissors";
            break;
    }
    
}


console.log(playerDecision)
console.log(computerDecision);