function startGame() {
    //Starting a new game
    let playerName = getInputValue('playername');
    playerNames(playerName);
    postScore(100, playerName);
    postScore(-100, playerName);
}
function playerNames(name = 'MultiMath Player') {
    console.log(`New game starting for ${name}`);
}
function getInputValue(elementID) {
    const inputElement = document.getElementById(elementID);
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName = 'MultiFruits player') {
    let logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    const scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = `${score} - ${playerName}`;
    logger(`Score: ${score}`);
}
document.getElementById('startGame').addEventListener('click', startGame);
const logMessage = (message) => console.log(message);
function logError(err) {
    console.error(err);
}
//# sourceMappingURL=app.js.map