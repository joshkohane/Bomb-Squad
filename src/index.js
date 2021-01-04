console.log('WEBPACK IS WORKING')


document.addEventListener("DOMContentLoaded", () => {
    console.log('WEBPACK');
    const canvas = document.getElementById('game-canvas');
    const gameStartBtn = document.getElementById('game-start-btn');
    const gameStart = document.getElementById('game-start-container');


    gameStartBtn.addEventListener('click', () => {
        gameStart.classList.add('hidden')
    })
})