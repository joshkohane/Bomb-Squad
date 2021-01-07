console.log('WEBPACK IS WORKING')

import Game from './game';
import WordChoice from './word-choice';


function homescreen() {
    const start = document.getElementById('game-start-inner');
    let p = document.createElement('p');
    p.classList.add("text-end")
    let p2 = document.createElement('p');
    p2.classList.add("text-end")
    let p3 = document.createElement('p');
    p3.classList.add("text-end")
    let p4 = document.createElement('p');
    p4.classList.add("text-end")
    p.textContent = "We need your help to diffuse this bomb...";
    p2.textContent = "But hurry...there isn't much time";
    p3.textContent = "Try to guess the code one letter at a time";
    p4.textContent = "Before it's too late...";
    start.appendChild(p);
    setTimeout(() => start.appendChild(p2), 3000);
    setTimeout(() => start.appendChild(p3), 6000);
    setTimeout(() => start.appendChild(p4), 9000);
    // if (clock.hasChildNodes()) {
    //     clock.childNodes.forEach(child => {
    //         clock.removeChild(child);
    //     })
    // }
    // clock.appendChild(p);
}

document.addEventListener("DOMContentLoaded", () => {
    console.log('WEBPACK');
    const canvas = document.getElementById('game-canvas');
    const gameStartBtn = document.getElementById('game-start-btn');
    const gameStart = document.getElementById('game-start-container');
    const gameWinBtn = document.getElementById('game-win-btn');
    const gameWin = document.getElementById('game-win-container');
    const gameLoseBtn = document.getElementById('game-lose-btn');
    const gameLose = document.getElementById('game-lose-container');
    const musicPlayer = document.getElementById('music-player');

    // let currentLevel = 1
    // let wordChoice = new WordChoice(currentLevel)
    
    homescreen();

    let game = new Game()
    
    gameStartBtn.addEventListener('click', () => {
        gameStart.classList.add('hidden')
        game.start();
        musicPlayer.play();
    })

    gameWinBtn.addEventListener('click', () => {
        gameWin.classList.add('hidden')
        // currentLevel += 1
        game.restart();
        musicPlayer.play();
    })

    gameLoseBtn.addEventListener('click', () => {
        gameLose.classList.add('hidden')
        // let game = new Game(currentLevel)
        game.start();
        musicPlayer.play();
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