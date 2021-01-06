console.log('WEBPACK IS WORKING')

import Game from './game';
import WordChoice from './word-choice';

document.addEventListener("DOMContentLoaded", () => {
    console.log('WEBPACK');
    const canvas = document.getElementById('game-canvas');
    const gameStartBtn = document.getElementById('game-start-btn');
    const gameStart = document.getElementById('game-start-container');
    const gameWinBtn = document.getElementById('game-win-btn');
    const gameWin = document.getElementById('game-win-container');
    const gameLoseBtn = document.getElementById('game-lose-btn');
    const gameLose = document.getElementById('game-lose-container');


    
    // let currentLevel = 1
    // let wordChoice = new WordChoice(currentLevel)
    
    let game = new Game()
    
    gameStartBtn.addEventListener('click', () => {
        gameStart.classList.add('hidden')
        game.start();
    })

    gameWinBtn.addEventListener('click', () => {
        gameWin.classList.add('hidden')
        // currentLevel += 1
        game.restart();
    })

    gameLoseBtn.addEventListener('click', () => {
        gameLose.classList.add('hidden')
        // let game = new Game(currentLevel)
        game.start();
    })

    document.addEventListener('keypress', (e) => {
        // console.log(e.key)
        game.attempedLetter(e.key);
    })

    // document.addEventListener(game.won(), () => {
    //     console.log('BIG WINNER')
    //     gameWin.classList.remove('hidden')

    // })

    // document.addEventListener(game.lost(), () => {
    //     // console.log(e.key)
    //     gameLose.classList.remove('hidden')

    // })
    
    // if (game.lost()) {
    //     console.log('GAME OVER')
    //     gameLose.classList.add('hidden')
    // }
})