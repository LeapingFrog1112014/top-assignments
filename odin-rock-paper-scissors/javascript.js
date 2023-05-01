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
    let playerScore = 0
    let computerScore = 0

    while (playerScore != 3 && computerScore != 3) {
        console.log("Player: " + playerScore + " Computer: " + computerScore)
        let playerSelection = undefined
        let computerSelection = getComputerChoice()

        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            playerSelection = prompt("Enter Rock Paper or Scissors")
            playerSelection = playerSelection.toLowerCase()
        }
        let result = playRound(playerSelection, computerSelection)

        if (result[0] == true) {
            playerScore++
        }
        else if (result[1] == true) {
            computerScore++
        }
        else {
            continue
        }
    }

    if (playerScore == 3) {
        console.log("You win!")
        return
    }
    else {
        console.log("You lose.")
        return
    }
}
