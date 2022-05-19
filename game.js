let round = 0;
let userScore = 0;
let computerScore = 0;
let playerDecision;
let computerDecision;

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

function playRound () {
    playerDecision = prompt("Rock, Paper, or Scissors?").toLowerCase();
    computerDecision = computerPlay();
    if (playerDecision === computerDecision) {
         round++;
         return "There has been a tie!";
    }
    else if ((playerDecision == "rock" && computerDecision == "paper") ||
            (playerDecision == "paper" && computerDecision == "scissors") ||
            (playerDecision == "scissors" && computerDecision == "rock")) {
                round++;
                computerScore++;
                return "You have lost! How very unfortunate."

            }
    else if ((playerDecision == "paper" && computerDecision == "rock") ||
            (playerDecision == "scissors" && computerDecision == "paper") ||
            (playerDecision == "rock" && computerDecision == "scissors")) {
                round++;
                userScore++;
                return "You have won! It is an auspicious day."
            }
    else {
        return "we haven't made this part yet"
    }
}

function playGame() {
    while (round<5) {
        console.log(playRound());
        console.log(playerDecision);
        console.log(computerDecision);
    }
    alert("The game is over! Your score:" + userScore + " Computer score: " + computerScore)
}

playGame();



