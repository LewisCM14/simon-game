/*jshint esversion: 6*/

// The Game object

let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ['button1', 'button2', 'button3', 'button4'],
}

function newGame() {
    
    // Resets the values of the Game Object. 
    
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
}

function showScore() {
    
    // Updates the score HTML as required.

    document.getElementById('score').innerText = game.score;
}

module.exports = { game, newGame, showScore };