/*jshint esversion: 6*/

// The Game object

let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    choices: ['button1', 'button2', 'button3', 'button4'],
}

function newGame() {

    /**
     * Resets the values of the Game Object.
     * Adds click event listener to the circle class.
     */
    
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    for (let circle of document.getElementsByClassName('circle')) {
        if (circle.getAttribute( 'data-listener') !== 'true') {
            circle.addEventListener('click', (e) => {
                let move = e.target.getAttribute('id');
                lightsOn(move);
                game.playerMoves.push(move);
                playerTurn();
            });
            circle.setAttribute('data-listener', 'true');
        }
    }
    showScore();
    addTurn();
}

function addTurn() {
    
    /**
     * Empties the playerMoves array.
     * Returns a random choice. 
     */

    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns();
}

function showScore() {
    
    // Updates the score HTML as required.

    document.getElementById('score').innerText = game.score;
}

function lightsOn(circ) {

     /**
     * Adds the light class to the returned choice.
     * Removes after set time.
     */

    document.getElementById(circ).classList.add('light');
    setTimeout(() => {
        document.getElementById(circ).classList.remove('light');
    }, 400);
}

function showTurns() {

    // Runs through the game sequence.

    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

function playerTurn() {

    /**
     * Compares the players turn to the game sequence.
     * Updates score as required.
     * If wrong move, alerts and starts new game.
     */

    let i = game.playerMoves.length - 1;
    if (game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length == game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else {
        alert('Wrong move!');
        newGame();
    }
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn };