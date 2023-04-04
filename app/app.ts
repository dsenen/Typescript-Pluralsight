function startGame() {
    //Starting a new game

    let playerName: string | undefined = getInputValue('playername');
    playerNames(playerName);

    postScore(100, playerName);
    postScore(-100, playerName);
}

function playerNames(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for ${name}`);
}

function getInputValue(elementID: string): string | undefined {

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === "") {
        return undefined;
    } else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = 'MultiFruits player'): void {
    
    let logger: (value: string) => void;

    if (score < 0){
        logger = logError;
    } else {
        logger = logMessage;
    }
    
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}
document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err);
}
