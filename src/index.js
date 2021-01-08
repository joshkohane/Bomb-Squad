import Game from './game';

function homescreen() {
    const start = document.getElementById('game-start-inner');
    let p1 = document.createElement('p');
    p1.classList.add("text-end")
    let p2 = document.createElement('p');
    p2.classList.add("text-end")
    let p3 = document.createElement('p');
    p3.classList.add("text-end")
    let p4 = document.createElement('p');
    p4.classList.add("text-end")
    p1.textContent = "We need your help to diffuse this bomb...";
    p2.textContent = "But hurry...there isn't much time";
    p3.textContent = "Try to guess the code one letter at a time";
    p4.textContent = "Before it's too late...";
    start.appendChild(p1);
    setTimeout(() => start.appendChild(p2), 3000);
    setTimeout(() => start.appendChild(p3), 6000);
    setTimeout(() => start.appendChild(p4), 9000);
}

document.addEventListener("DOMContentLoaded", () => {
    const gameStartBtn = document.getElementById('game-start-btn');
    const gameStart = document.getElementById('game-start-container');
    const gameWinBtn = document.getElementById('game-win-btn');
    const gameWin = document.getElementById('game-win-container');
    const gameLoseBtn = document.getElementById('game-lose-btn');
    const gameLose = document.getElementById('game-lose-container');
    const musicPlayer = document.getElementById('music-player');
    const volumeIcon = document.getElementById('volume-icon');
    
    homescreen();

    let game = new Game()

    volumeIcon.addEventListener('click', () => {
        if (volumeIcon.classList.contains("fa-volume-up")) {
            volumeIcon.classList.remove("fa-volume-up");
            volumeIcon.classList.add("fa-volume-mute");
            musicPlayer.pause();
        } else if (gameLose.classList.contains("hidden") && gameWin.classList.contains("hidden") && gameStart.classList.contains("hidden")) {
            volumeIcon.classList.remove("fa-volume-mute");
            volumeIcon.classList.add("fa-volume-up");
            musicPlayer.play();
        } else {
            volumeIcon.classList.remove("fa-volume-mute");
            volumeIcon.classList.add("fa-volume-up");
        }
    })
    
    gameStartBtn.addEventListener('click', () => {
        gameStart.classList.add('hidden')
        game.start();
        
    })

    gameWinBtn.addEventListener('click', () => {
        gameWin.classList.add('hidden')
        game.restart();
    })

    gameLoseBtn.addEventListener('click', () => {
        gameLose.classList.add('hidden')
        game.start();
    })

    document.addEventListener('keypress', (e) => {
        game.attempedLetter(e.key);
    })
})