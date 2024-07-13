// Select elements
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const rollButton = document.getElementById('rollButton');
const resetButton = document.getElementById('resetButton');
const result = document.getElementById('result');

// Game variables
let playerScore = 0;
let computerScore = 0;
let rolls = 0;

// Function to roll dice
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to calculate score
function calculateScore(roll1, roll2) {
    if (roll1 === 1 || roll2 === 1) {
        return 0;
    } else if (roll1 === roll2) {
        return (roll1 + roll2) * 2;
    } else {
        return roll1 + roll2;
    }
}

// Roll dice event
rollButton.addEventListener('click', () => {
    if (rolls < 3) {
        const playerRoll1 = rollDice();
        const playerRoll2 = rollDice();
        const computerRoll1 = rollDice();
        const computerRoll2 = rollDice();

        const playerRoundScore = calculateScore(playerRoll1, playerRoll2);
        const computerRoundScore = calculateScore(computerRoll1, computerRoll2);

        playerScore += playerRoundScore;
        computerScore += computerRoundScore;

        playerScoreEl.textContent = `Score: ${playerScore}`;
        computerScoreEl.textContent = `Score: ${computerScore}`;

        rolls++;

        if (rolls === 3) {
            if (playerScore > computerScore) {
                result.textContent = 'Player Wins!';
            } else if (playerScore < computerScore) {
                result.textContent = 'Computer Wins!';
            } else {
                result.textContent = 'It\'s a Tie!';
            }
        }
    }
});

// Reset game event
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    rolls = 0;
    playerScoreEl.textContent = 'Score: 0';
    computerScoreEl.textContent = 'Score: 0';
    result.textContent = '';
});
