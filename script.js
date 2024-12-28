let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("userScore");
const computerScoreSpan = document.getElementById("computerScore");
const resultText = document.getElementById("resultText");
const resetButton = document.getElementById("resetButton");

const choices = document.querySelectorAll(".choice");

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        updateScores(result);
        displayResult(result, userChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function updateScores(result) {
    if (result === "win") {
        userScore++;
    } else if (result === "lose") {
        computerScore++;
    }
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

function displayResult(result, userChoice, computerChoice) {
    if (result === "draw") {
        resultText.textContent = `It's a draw! You both chose ${userChoice}.`;
    } else if (result === "win") {
        resultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else if (result === "lose") {
        resultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}

// Reset functionality
resetButton.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    resultText.textContent = "";
});