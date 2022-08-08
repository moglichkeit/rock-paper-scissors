function getRandom() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    let computerChoice = getRandom();
    if (computerChoice === 1) {
        return 'rock';
    } else if (computerChoice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        output.textContent = 'Tie.';
        return 0;
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            output.textContent = 'You lose! Paper beats Rock';
            return -1;
        } else {
            output.textContent = 'You win! Rock beats Scissors';
            return 1;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            output.textContent = 'You lose! Scissors beats paper';
            return -1;
        } else {
            output.textContent = 'You win! Paper beats Rock';
            return 1;
        }
    } else {
        if (computerSelection === 'rock') {
            output.textContent = 'You lose! Rock beats Scissors';
            return -1;
        } else {
            output.textContent = 'You win! Scissors beats Paper';
            return 1;
        }
    }
}

function game () {
    let humanScore = 0;
    let computerScore = 0;

    const btn = document.querySelectorAll('.controls');

    btn.forEach((button) => {
        button.addEventListener('click', () => {
            resultRound = playRound(button.id, getComputerChoice());
            if (resultRound === 1) {
                humanScore++;
                score.textContent = `You ${humanScore}:${computerScore} Computer`;
            } else if (resultRound === -1) {
                computerScore++;
                score.textContent = `You ${humanScore}:${computerScore} Computer`;
            }
            if (humanScore === 5 || computerScore === 5)
            {
                humanScore = 0;
                computerScore = 0;
                score.textContent = `You ${humanScore}:${computerScore} Computer`;
                return;
            }
        })
    })
}
const output = document.querySelector('.output');
const score = document.querySelector('.score');
game();