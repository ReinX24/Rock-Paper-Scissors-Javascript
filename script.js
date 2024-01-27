const choices = ['rock', 'paper', 'scissors']
const maxRounds = 5
let playerScore = 0
let computerScore = 0
let roundNumber = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Player Win"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Player Win"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Player Win"
    } else if (playerSelection == computerSelection) {
        return "Tie"
    } else {
        return "Computer Win"
    }
}

function game(playerSelection) {

    // Shows the cards
    document.querySelector("#choice-card").classList.remove("d-none")
    document.querySelector("#score-card").classList.remove("d-none")

    if (roundNumber < maxRounds) {

        const computerSelection = getComputerChoice()

        const roundWinner = playRound(playerSelection, computerSelection)

        // Show what choice each player made
        document.querySelector("#user-choice").innerHTML = `You: ${playerSelection}`
        document.querySelector("#computer-choice").innerHTML = `Computer: ${computerSelection}`

        // Update score winner
        switch (roundWinner) {
            case 'Player Win':
                playerScore++
                break;

            case 'Computer Win':
                computerScore++
                break;

            case 'Tie':
                playerScore++
                computerScore++
                break;

        }

        // Show who won the round
        document.querySelector('#round-winner').innerHTML = `Result: ${roundWinner}`

        // Update scores
        document.querySelector('#user-score').innerHTML = `Your Score: ${playerScore}`
        document.querySelector('#computer-score').innerHTML = `Computer Score: ${computerScore}`

        // Update round number
        roundNumber++
        document.querySelector("#round-counter").innerHTML = `Round: ${roundNumber}`

        if (roundNumber == maxRounds) {

            // Show game over jumbotron
            document.querySelector("#game-over-container").classList.remove("d-none")

            document.querySelector("#game-over").innerHTML = "Game Over!"
            if (playerScore > computerScore) {
                document.querySelector("#game-winner").innerHTML = "Player Wins!"
            } else if (playerScore < computerScore) {
                document.querySelector("#game-winner").innerHTML = "Computer Wins!"
            } else {
                document.querySelector("#game-winner").innerHTML = "Tie!"
            }
        }
    }
}

// Gets the user's choice whenever the click rock, paper, or scissors.
userChoices = document.querySelectorAll(".choice")

userChoices.forEach((userChoice) => {
    userChoice.addEventListener('click', (event) => {
        game(event.target.id) // returns the id of the HTML component.
    })
})

// Reset the game if the user chooses to reset.
document.querySelector("#reset-btn").addEventListener("click", resetGame)

function resetGame() {
    playerScore = 0
    computerScore = 0
    roundNumber = 0
    document.querySelector("#choice-card").classList.add("d-none")
    document.querySelector("#score-card").classList.add("d-none")
    document.querySelector("#game-over-container").classList.add("d-none")
}