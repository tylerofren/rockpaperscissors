function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 1) {
        return 'Rock';
    }
    else if (choice == 2) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    return prompt('Enter your move!');
}

function playGame() {
    let humanScore = 0, computerScore = 0;
    let gamesPlayed = 5;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase();
        console.log(humanChoice);
        console.log(computerChoice);
        if (humanChoice == computerChoice) {
            console.log('Same moves. It\'s a tie!');
        }
        else if ((humanChoice == 'Rock' && computerChoice == 'Paper') ||
            (humanChoice == 'Paper' && computerChoice == 'Scissors') ||
            (humanChoice == 'Scissors' && computerChoice == 'Rock')) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        console.log(`The score is ${humanScore} (you) ${computerScore} (computer).`)
    }
    for (let i = 0; i < gamesPlayed; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log('You win.');
    }
    else if (computerScore > humanScore) {
        console.log('You lose.');
    }
    else {
        console.log('Tie.');
    }
}
