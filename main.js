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

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice == computerChoice) {
        results.textContent = 'Same moves. It\'s a tie!';
    }
    else if ((humanChoice == 'Rock' && computerChoice == 'Paper') ||
        (humanChoice == 'Paper' && computerChoice == 'Scissors') ||
        (humanChoice == 'Scissors' && computerChoice == 'Rock')) {
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    else {
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    results.textContent = `The score is ${humanScore} (you) ${computerScore} (computer).`;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector("#results");

rock.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
    checkWinner()
})
paper.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
    checkWinner()
})
scissors.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
    checkWinner()
})

function checkWinner() {
    if (humanScore == 5) {
        results.textContent = 'You win.';
    }
    else if (computerScore == 5) {
        results.textContent = 'You lose.';
    }    
}


