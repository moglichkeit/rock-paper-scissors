function getRandom() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let computerChoice = getRandom();
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Draw.');
        return 0;
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log('You lose! Paper beats Rock');
            return -1;
        } else {
            console.log('You win! Rock beats Scissors');
            return 1;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            console.log('You lose! Scissors beats paper');
            return -1;
        } else {
            console.log('You win! Paper beats Rock');
            return 1;
        }
    } else {
        if (computerSelection === 'rock') {
            console.log('You lose! Rock beats Scissors');
            return -1;
        } else {
            console.log('You win! Scissors beats Paper');
            return 1;
        }
    }
}

function game () {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt().toLowerCase();
        let computerSelection = getComputerChoice();

        console.log('Round ' + i)
        resultRound = playRound(playerSelection,computerSelection)

        if (resultRound === 1) {
            humanScore++;
        } else if (resultRound === -1) {
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        console.log('You win! You ' + humanScore + ':' + computerScore + ' Computer');
    } else if (humanScore < computerScore) {
        console.log('You lose! You ' + humanScore + ':' + computerScore + ' Computer');
    } else {
        console.log('Draw! You ' + humanScore + ':' + computerScore + ' Computer');
    }
}