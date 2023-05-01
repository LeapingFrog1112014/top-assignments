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

function announce (result, playerSelection, computerSelection) {
    if (result[0] == false) {
        if (result[1] == false) {
            return(playerSelection + " is equal to " + computerSelection + ". Draw.")
        }
        else {
            return(playerSelection + " loses to " + computerSelection+ ". You lose.")
        }
    }
    else {
        return(playerSelection + " beats " + computerSelection + ". You win!")
    }
}

function playRound (playerSelection, computerSelection) {
    let result = undefined
    if (playerSelection == computerSelection) {
        result = [false, false] // Draw case
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            result = [false, true]
        }
        else {
            result = [true, false]
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = [true , false]
        }
        else {
            result = [false, true]
        }
    }

    else {
        if (computerSelection == "rock") {
            result = [false , true]
        }
        else {
            result = [true, false]
        }
    }
    console.log(announce(result, playerSelection, computerSelection))
    return result
}

function game () {
    
}
