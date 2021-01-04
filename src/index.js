console.log('WEBPACK IS WORKING')


document.addEventListener("DOMContentLoaded", () => {
    console.log('WEBPACK');
    const canvas = document.getElementById('game-canvas');
    const gameStartBtn = document.getElementById('game-start-btn');
    const gameStart = document.getElementById('game-start-container');
    const gameWinBtn = document.getElementById('game-win-btn');
    const gameWin = document.getElementById('game-win-container');
    const gameLoseBtn = document.getElementById('game-lose-btn');
    const gameLose = document.getElementById('game-lose-container');


    gameStartBtn.addEventListener('click', () => {
        gameStart.classList.add('hidden')
    })

    gameWinBtn.addEventListener('click', () => {
        gameWin.classList.add('hidden')
    })

    gameLoseBtn.addEventListener('click', () => {
        gameLose.classList.add('hidden')
    })
})