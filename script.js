
let pcChoice;
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);


    if (randomNumber === 0) {
        pcChoice = "rock";
    } else if (randomNumber === 1) {
        pcChoice = "paper";
    } else {
        pcChoice = "scissors";
    }
}
let pcWon = 0;
let userWon = 0;
let resultMsg;
let rockChoice = () => {
    computerChoice()
    if (pcChoice == 'rock') {
        resultMsg = `it's a Tie`
    }
    else if (pcChoice == 'paper') {
        resultMsg = 'You Lost'
        pcWon++;
    }
    else {
        resultMsg = 'You Won';
        userWon++;
    }
    console.log(resultMsg)

    updateScore()
}

let paperChoice = () => {
    computerChoice()
    if (pcChoice == 'rock') {
        resultMsg = 'You Lost'
        pcWon++;
    }
    else if (pcChoice == 'paper') {
        resultMsg = `It's a Tie`
    }
    else {
        resultMsg = 'You Won';
        userWon++;
    }
    console.log(resultMsg)
    updateScore()
}

let scissorsChoice = () => {
    computerChoice()
    if (pcChoice == 'rock') {
        resultMsg = 'You Lost'
        pcWon++;
    }
    else if (pcChoice == 'paper') {
        resultMsg = 'You Won'
        userWon++;
    }
    else {
        resultMsg = `It's a Tie`;
    }
    console.log(resultMsg)
    updateScore()
}



let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')



rock.addEventListener('click', rockChoice)
paper.addEventListener('click', paperChoice)
scissors.addEventListener('click', scissorsChoice)

let pcScore = document.querySelector('#pc-score')
let userScore = document.querySelector('#you-score')
let Msg = document.querySelector('.resultMsgg')

function updateScore() {
    userScore.innerText = userWon
    pcScore.innerText = pcWon
    Msg.innerText = resultMsg
}
