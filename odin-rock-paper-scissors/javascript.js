function getComputerChoice () {
    let num = Math.floor(Math.random() * 2)
    if (num == 0) {
        return "rock"
    }
    else if (num == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playRound (playerSelection, computerSelection) {
    
}
