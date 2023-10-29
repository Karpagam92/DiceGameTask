let currentPlayer = 1;
let score1 = 0;
let score2 = 0;

function rollDice(player) {
    if (currentPlayer === player) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        const scoreElement = document.getElementById(`score${player}`);
        const rollButton = document.getElementById(`rollDice${player}`);

        scoreElement.textContent = (player === 1) ? (score1 += diceValue) : (score2 += diceValue);

        if (score1 >= 30 || score2 >= 30) {
            announceWinner(player);
        } else {
            togglePlayer();
        }
    }
}

function togglePlayer() {
    currentPlayer = (currentPlayer === 1) ? 2 : 1;

    const rollButton1 = document.getElementById("rollDice1");
    const rollButton2 = document.getElementById("rollDice2");

    rollButton1.disabled = (currentPlayer === 1) ? false : true;
    rollButton2.disabled = (currentPlayer === 2) ? false : true;
}

function announceWinner(player) {
    const winningPlayer = (player === 1) ? "Player 1" : "Player 2";
    alert(`${winningPlayer} wins!`);
    disableGame();
}

function disableGame() {
    document.getElementById("rollDice1").disabled = true;
    document.getElementById("rollDice2").disabled = true;
    document.getElementById("resetButton").disabled = false;
}

function resetGame() {
    currentPlayer = 1;
    score1 = 0;
    score2 = 0;
    document.getElementById("score1").textContent = "0";
    document.getElementById("score2").textContent = "0";
    document.getElementById("rollDice1").disabled = false;
    document.getElementById("rollDice2").disabled = true;
    document.getElementById("resetButton").disabled = true;
}
