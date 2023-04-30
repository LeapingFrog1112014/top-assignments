function getComputerChoice {
    let num = Math.floor(Math.random() * 2);
    if (num == 0) {
        return "Rock";
    }
    else if (num == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
