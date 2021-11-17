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
    
    // Resets the values of the Game Object. 
    
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
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
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns };