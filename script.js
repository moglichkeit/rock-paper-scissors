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

function playAgain () {
    const restart = document.querySelector('#restart');
    restart.style.cssText = "visibility: visible";
    if (humanScore === 5) {
        score.textContent = `You win ${humanScore}:${computerScore}!`;
    } else {
        score.textContent = `You lose ${humanScore}:${computerScore}!`;
    }

    restart.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        score.textContent = `You ${humanScore}:${computerScore} Computer`;
        output.textContent = 'New game.';
        restart.style.cssText = "visibility: hidden";
        return;
    });
}

let humanScore = 0;
let computerScore = 0;
let roundResult = 0;

const btn = document.querySelectorAll('.controls');
const score = document.querySelector('.score');
const output = document.querySelector('.output');

btn.forEach( (button) => {
    button.addEventListener('click', () => {
        if (humanScore < 5 && computerScore < 5) {
            
            roundResult = playRound(button.id, getComputerChoice());
            if (roundResult === 1) {
                humanScore++;
                if (humanScore === 5) {
                    playAgain();
                } else {
                score.textContent = `You ${humanScore}:${computerScore} Computer`;
                }
            } else if (roundResult === -1) {
                computerScore++;
                if (computerScore === 5) {
                    playAgain();
                } else {
                score.textContent = `You ${humanScore}:${computerScore} Computer`;
                }
            }

        } else {
        }
    });
});