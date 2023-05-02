let playerScore = 0;
let computerScore = 0;
const scoreBoard = document.querySelector('.header');

const scoreBoardPlayer = document.createElement('p');
scoreBoardPlayer.innerText = `Player: ${playerScore}`;
scoreBoard.appendChild(scoreBoardPlayer);

const scoreBoardComputer = document.createElement('p');
scoreBoardComputer.innerText = `Computer: ${computerScore}`;
scoreBoard.appendChild(scoreBoardComputer);

const winnerAnnouncement = document.createElement('p');
winnerAnnouncement.innerText = "Make a choice to start the game";
scoreBoard.appendChild(winnerAnnouncement);

function getComputerSelection () {
    let num = Math.floor(Math.random() * 2);
    if (num == 0) {
        return "rock";
    }
    else if (num == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function modifyScoreBoard (results) {
    if (results[1] == false) {
        if(results[0] == true) {
            playerScore++;
            scoreBoardPlayer.innerText = `Player: ${playerScore}`;
        }
        else {
            computerScore++;
            scoreBoardComputer.innerText = `Computer: ${computerScore}`;
        }
    }
    return;
}

function announceResults (playerSelection, computerSelection, results) {
    if (results[1] == false) {
        if (results[0] == true) {
            winnerAnnouncement.innerText = `${playerSelection} beats ${computerSelection}. You win!`;
        }
        else {
            winnerAnnouncement.innerText = `${playerSelection} loses to ${computerSelection}. You lose.`;
        }
    }
    else {
        winnerAnnouncement.innerText = `You both selected ${playerSelection}. Draw!`;
    }
}
function playRound (playerSelection, computerSelection) {
    let result = undefined;
    if (playerSelection == computerSelection) {
        result = [false, true];
    }
    else if (playerSelection == "rock") {
        if(computerSelection == "paper") {
            result = [false, false];
        }
        else {
            result = [true, false];
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = [true, false];
        }
        else {
            result = [false, false];
        }
    }
    else {
        if (computerSelection == "rock") {
            result = [false, false];
        }
        else {
            result = [true, false];
        }
    }
    modifyScoreBoard(result);
    announceResults(playerSelection, computerSelection, result);
    return;
}



window.addEventListener('keydown', (event) => {
    let playerChoice = document.querySelector(`div[data-key="${event.code}"]`)
    let pChoice = (playerChoice.getAttribute('choice'));
    playRound(pChoice, getComputerSelection());
})
