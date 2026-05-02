let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const resultMessage = document.getElementById("result-message");
const choices = document.querySelectorAll(".choice");

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function playRound(userChoice) {
    const compChoice = getComputerChoice();
    
    if (userChoice === compChoice) {
        resultMessage.textContent = `It's a draw! Both chose ${userChoice}.`;
        return;
    }

    // Define win conditions where the key is the user choice and the value is what it beats
    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (winConditions[userChoice] === compChoice) {
        userScore++;
        userScoreSpan.textContent = userScore;
        resultMessage.textContent = `You win! ${userChoice} beats ${compChoice}.`;
    } else {
        compScore++;
        compScoreSpan.textContent = compScore;
        resultMessage.textContent = `You lose! ${compChoice} beats ${userChoice}.`;
    }
}

// Add event listeners to all buttons dynamically
choices.forEach(button => {
    button.addEventListener("click", function() {
        playRound(this.id);
    });
});