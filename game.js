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

function singleRound () {
    if (playerDecision === computerDecision) {
         return "There has been a tie!";
    }
    else if ((playerDecision == "rock" && computerDecision == "paper") ||
            (playerDecision == "paper" && computerDecision == "scissors") ||
            (playerDecision == "scissors" && computerDecision == "rock")) {
                return "You have lost! How very unfortunate."
            }
    else if ((playerDecision == "paper" && computerDecision == "rock") ||
            (playerDecision == "scissors" && computerDecision == "paper") ||
            (playerDecision == "rock" && computerDecision == "scissors")) {
                return "You have won! It is an auspicious day."
            }
    else {
        return "we haven't made this part yet"
    }
}


console.log(playerDecision);
console.log(computerDecision);
console.log(singleRound());

