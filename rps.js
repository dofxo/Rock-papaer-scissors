const startBtn = document.getElementById('start')
const reStartBtn = document.getElementById('restart')
const playerEl = document.querySelector('.player')
const computerEl = document.querySelector('.computer')

let computerScoreEl = document.getElementById('computer-score')
let playerScoreEl = document.getElementById('player-score')
let resultEl = document.getElementById('result')


let computerScore = 0,
    playerScore = 0

function rockPaperScrissors() {


    const gameTable = [
        "paper",
        'scissors',
        'rock'
    ]
    const player = gameTable[Math.floor(Math.random() * 3)],
        computer = gameTable[Math.floor(Math.random() * 3)]

    // changes the logo
    playerEl.innerHTML = `<img src="images/${player}.png">`
    computerEl.innerHTML = `<img src="images/${computer}.png">`


    // paper > rock condition
    if ((player === 'paper' && computer === 'rock') || (computer === 'paper' && player === 'rock')) {

        if (player === 'paper') {
            resultEl.textContent = 'Player Has Won !'
            playerScore++
        } else {
            resultEl.textContent = 'Computer Has Won !'
            computerScore++

        }
    }
    // rock > scrissors condition
    else if ((player === 'rock' && computer === 'scissors') || (computer === 'rock' && player === 'scissors')) {

        if (player === 'rock') {
            resultEl.textContent = 'Player Has Won !'
            playerScore++
        } else {
            resultEl.textContent = 'Computer Has Won !'
            computerScore++

        }
    }
    // scissors > paper condition
    else if ((player === 'scissors' && computer === 'paper') || (computer === 'scissors' && player === 'paper')) {

        if (player === 'scissors') {
            resultEl.textContent = 'Player Has Won !'
            playerScore++

        } else {

            resultEl.textContent = 'Computer Has Won !'
            computerScore++


        }
    } else {
        resultEl.textContent = 'Draw !'
    }

    playerScoreEl.textContent = playerScore
    computerScoreEl.textContent = computerScore


}
// starts the game on the CLICK
startBtn.addEventListener('click', rockPaperScrissors)
// restarts the scores 
reStartBtn.addEventListener('click', () => {
    computerScore = 0
    playerScore = 0
    playerScoreEl.textContent = 0
    computerScoreEl.textContent = 0
})